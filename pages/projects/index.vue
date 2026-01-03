<template>
  <article>
    <section>
      <PagePreview :value="{ title: 'Мои работы', description: 'Ниже вы найдете подборку моих проектов' }" />
    </section>
    <section class="pt-24 pb-10">
      <div class="mx-20 flex justify-center">

        <div class="block max-h-max max-w-max">
          <div class="w-[250px] h-[300px]">
            <NuxtLink to="/projects/2">
              <img class="absolte size-full object-cover object-center" src="../../assets/image.png" alt="" />
            </NuxtLink>
          </div>
          <div class="py-6">
            <NuxtLink
              to="/projects/2"
              class="font-['Lora'] font-normal lg:text-3xl"
            >
              Read more
            </NuxtLink>
          </div>
        </div>
        
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">

</script>

<style scoped></style>