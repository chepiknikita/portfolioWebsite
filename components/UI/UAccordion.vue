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
  <div class="space-y-0 accordion-container flex flex-col gap-4">
    <details
      v-for="(item, index) in items" :key="index"
      :ref="(el) => { if (el) detailsRefs[index] = el }"
      class="group accordion-item border border-[#665133] first:rounded-t last:rounded-b"
      @toggle="handleToggle(index, $event)"
    >
      <summary
        class="flex cursor-pointer uppercase items-center justify-between px-5 py-4 text-base font-normal transition-colors hover:bg-amber-50/10 group-open:bg-amber-50/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#665133]">
        <span>{{ item.title }}</span>
        <div class="ml-4 flex h-7 w-7 shrink-0 items-center justify-center">
          <svg class="h-full w-full transition-all duration-300 group-open:rotate-45" viewBox="0 0 28 28" fill="none"
            aria-hidden="true">
            <path d="M6 12 L18 12 M12 6 L12 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              class="transition-all duration-300" />
          </svg>
        </div>
      </summary>
      <div class="accordion-content border-t border-[#665133] text-base pt-4">
        <div class="px-5 py-4">
          <p>{{ item.content }}</p>
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