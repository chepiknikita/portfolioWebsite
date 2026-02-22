<script setup lang="ts">
import { ref } from 'vue';

interface AccordionItem {
  title: string
  content: string
}

const props = defineProps<{
  items: AccordionItem[]
  singleOpen?: boolean
}>()

const detailsRefs = ref<HTMLDetailsElement[]>([]);

function handleToggle(index: number, event: Event) {
  if (!props.singleOpen) return

  const target = event.target as HTMLDetailsElement

  // Если текущий details открывается
  if (target.open) {
    // Закрываем все другие
    detailsRefs.value.forEach((detail, i) => {
      if (i !== index && detail) {
        detail.open = false
      }
    })
  }
}
</script>

<template>
  <div class="space-y-0 accordion-container flex flex-col gap-3">
    <details
      v-for="(item, index) in items"
      :key="index"
      :ref="(el) => { if (el) detailsRefs[index] = el }"
      @toggle="handleToggle(index, $event)"
      class="group accordion-item border border-brand-brown"
    >
      <summary
        class="
          flex
          items-center
          justify-between
          cursor-pointer
          uppercase
          p-4 lg:p-5 2xl:p-7
          text-sm lg:text-base 2xl:text-xl
          select-none
          transition-colors
          focus-visible:outline-none
          focus-visible:ring-2"
        >
        <span>{{ item.title }}</span>
        <div class="flex h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7 2xl:h-8 2xl:w-8 shrink-0 items-center justify-center ml-2">
          <svg class="h-full w-full transition-all duration-300 group-open:rotate-45" viewBox="0 0 28 28" fill="none"
            aria-hidden="true">
            <path d="M6 12 L18 12 M12 6 L12 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              class="transition-all duration-300" />
          </svg>
        </div>
      </summary>
      <div class="accordion-content font-manrope font-normal text-sm lg:text-base 2xl:text-xl">
        <div class="p-4 lg:px-5 lg:pb-5 2xl:px-7 2xl:pb-7">
           {{ item.content }}
        </div>
      </div>
    </details>
  </div>
</template>

<style scoped>
/* Убираем стандартный маркер в Safari/Firefox */
summary {
  list-style: none;
}

/* Для браузеров, которые не поддерживают list-style:none в summary */
summary::-webkit-details-marker {
  display: none;
}

/* Плавная анимация высоты (опционально) */
.accordion-content {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>