import type { Ref } from 'vue';

export const useBodyScroll = (isLocked: Ref<boolean>) => {
  watch(isLocked, (v) => {
    if (v) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  });
};
