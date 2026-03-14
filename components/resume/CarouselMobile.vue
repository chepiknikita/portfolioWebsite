<template>
  <div
    class="md:hidden relative size-full overflow-hidden select-none"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(item, index) in slides"
        :key="index"
        class="min-w-full pb-10 flex justify-center"
      >
        <ResumeReasonCard
          :key="index"
          :title="item.title"
          :content="item.content"
        />
      </div>
    </div>

    <div class="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
      <button
        v-for="(_, index) in slides"
        :key="index"
        class="h-2 rounded-full transition-all duration-300"
        :class="getDotClass(index)"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  slides: { title: string, content: string }[]
}>();

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length;
}

const touchStartX = ref(0)

const onTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.changedTouches[0].screenX
}

const onTouchEnd = (e: TouchEvent) => {
  const diff = e.changedTouches[0].screenX - touchStartX.value

  if (diff > 50) {
    currentIndex.value =
      (currentIndex.value - 1 + props.slides.length) %
      props.slides.length
  }

  if (diff < -50) {
    nextSlide()
  }
}

const goToSlide = (index: number) => {
  currentIndex.value = index
}

const getDotClass = (index: number) => {
  const diff = Math.abs(index - currentIndex.value)

  if (diff === 0) {
    return 'w-2 h-2 bg-white'
  }

  if (diff === 1) {
    return 'w-2 h-2 bg-white/40'
  }

  return 'w-[6px] h-[6px] bg-white/40'
}
</script>
