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
        <IconsCall
          size="40"
          :class="[
            $route.name === 'contacts'
              ? 'text-white'
              : 'text-transparent hover:text-white',
          ]"
        />
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