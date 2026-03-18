<script setup lang="ts">
interface AccordionItem {
  title: string
  content: string
}

const props = defineProps<{
  items: AccordionItem[]
  singleOpen?: boolean
}>()

const openStates = ref<boolean[]>(props.items.map(() => false))

function toggle(index: number) {
  if (props.singleOpen) {
    openStates.value = openStates.value.map((_: boolean, i: number) => i === index ? !openStates.value[index] : false)
  } else {
    openStates.value[index] = !openStates.value[index]
  }
}

function onEnter(el: Element) {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = '0'
  htmlEl.style.opacity = '0'
  requestAnimationFrame(() => {
    htmlEl.style.height = htmlEl.scrollHeight + 'px'
    htmlEl.style.opacity = '1'
  })
}

function onAfterEnter(el: Element) {
  (el as HTMLElement).style.height = 'auto'
}

function onLeave(el: Element) {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = htmlEl.scrollHeight + 'px'
  htmlEl.style.opacity = '1'
  requestAnimationFrame(() => {
    htmlEl.style.height = '0'
    htmlEl.style.opacity = '0'
  })
}
</script>

<template>
  <div class="flex flex-col gap-3">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="group border border-brand-brown"
      :class="{ 'is-open': openStates[index] }"
    >
      <button
        type="button"
        class="flex w-full cursor-pointer select-none items-center justify-between p-4 uppercase transition-colors duration-300 focus-visible:outline-none lg:p-5 2xl:p-7"
        :class="openStates[index] ? 'text-white' : 'text-white/70 hover:text-white'"
        @click="toggle(index)"
      >
        <span class="text-sm lg:text-base 2xl:text-xl">{{ item.title }}</span>
        <div class="ml-2 flex h-4 w-4 shrink-0 items-center justify-center sm:h-5 sm:w-5 lg:h-7 lg:w-7 2xl:h-8 2xl:w-8">
          <svg
            class="h-full w-full transition-transform duration-300"
            :class="openStates[index] ? 'rotate-45' : 'rotate-0'"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 14 L22 14 M14 6 L14 22"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </button>

      <Transition
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @leave="onLeave"
      >
        <div
          v-show="openStates[index]"
          class="overflow-hidden transition-[height,opacity] duration-350 ease-in-out"
        >
          <div class="border-t border-brand-brown/30 p-4 font-manrope text-sm font-normal text-white/80 lg:px-5 lg:pb-5 2xl:px-7 2xl:pb-7 2xl:text-xl">
            {{ item.content }}
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.transition-\[height\,opacity\] {
  transition-property: height, opacity;
}
</style>
