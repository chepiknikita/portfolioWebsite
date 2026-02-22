  <template>
  <div class="w-full hidden md:block">
    <div class="flex sm:items-stretch sm:justify-start">
      <div
        class="cursor-pointer"
        @click="() => $router.push('/')"
      >
        <div class="font-lora font-normal text-4xl text-right select-none 2xl:text-5xl">NC</div>
      </div>
      <div class="flex-1 flex space-x-6 lg:space-x-10 justify-center items-center">
        <NuxtLink
          v-for="(item, ind) in items"
          :key="ind"
          :class="[item.key === $route.name ? 'nav-link-active' : 'nav-link']"
          :to="item.path"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <button
        type="button"
        class="block"
        @click="() => $router.push('/contacts')"
      >
        <div class="w-8 h-8">
          <svg width="40" height="40" viewBox="0 0 40 40" :fill="$route.name === 'contacts' ? 'white' : 'none'" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.20996 0.5H10.3232C11.8353 0.50006 13.2045 1.36319 13.8633 2.70508L13.9854 2.97949L16.3301 8.83691C16.8343 10.0975 16.6514 11.5227 15.8623 12.6133L15.6963 12.8271L14.4355 14.3389C12.7983 16.3036 12.9318 19.192 14.7393 21L18.9971 25.2617C20.8053 27.07 23.6958 27.2002 25.6602 25.5635H25.6611L27.1719 24.3018L27.1729 24.3027C28.2857 23.3753 29.8169 23.1328 31.1621 23.6709L37.0205 26.0137C38.518 26.6127 39.5 28.0628 39.5 29.6758L39.499 35.7891C39.499 37.8384 37.8381 39.5 35.7891 39.5C16.2997 39.5 0.5 23.6998 0.5 4.20996C0.500061 2.16095 2.16094 0.500247 4.20996 0.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: { name: string, path: string, key: string }[];
}>();
</script>

<style scoped lang="postcss">
.nav-link-active,
.nav-link {
  @apply relative after:content-[''] after:absolute after:h-[1px] after:right-0 after:bottom-0 after:transition-[width] after:duration-500 py-2 text-sm font-medium font-manrope uppercase 2xl:text-base;
}

.nav-link-active {
  @apply after:w-full after:bg-white text-white;
}

.nav-link {
  @apply after:w-0 after:bg-white/20 text-gray-300;
}

.nav-link:hover:not(.nav-link-active) {
  @apply hover:after:content-[''] hover:after:absolute hover:after:h-[2px] hover:after:w-full hover:after:left-0 hover:after:bottom-0 hover:after:bg-white/30 hover:after:transition-[width] hover:text-white hover:after:duration-500;
}
</style>