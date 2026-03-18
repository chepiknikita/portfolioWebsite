export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-animate', {
    mounted(el, binding) {
      const delay = binding.value?.delay ?? 0
      const direction = binding.value?.direction ?? 'up'

      const classMap: Record<string, string> = {
        up: 'animate-on-scroll',
        left: 'animate-on-scroll-left',
        right: 'animate-on-scroll-right',
      }

      el.style.transitionDelay = `${delay}ms`
      el.classList.add(classMap[direction] ?? 'animate-on-scroll')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('is-visible')
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.1 },
      )

      observer.observe(el)
      el._scrollObserver = observer
    },
    unmounted(el) {
      el._scrollObserver?.disconnect()
    },
  })
})
