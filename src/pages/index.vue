<script setup lang="ts">
import Hotel from "@/components/cards/hotel-cards.vue";
import Hero from "~/components/index-page/HeroArea.vue";
import Service from "~/components/index-page/OurService.vue";
import Project from "~/components/index-page/ProjectShowCase.vue";

// const config = useRuntimeConfig();
// console.log("supabaseUrl : ", config.public.supabaseUrl);
// console.log('supabaseAnonKey : ', config.public.supabaseAnonKey)

</script>

<template>
  <Hero />

  <section class="mb-16 space-y-10">
    <div class="mb-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
    </div>

    <div class="flex items-center justify-center">
      <NuxtLink
        to="/hotels"
        class="w-fit rounded-full bg-yellow-400 px-8 py-3 font-aeonik font-bold text-gray-900 transition duration-300 hover:bg-yellow-500"
      >
        See More
      </NuxtLink>
    </div>
  </section>

  <Service />
  <Project />
</template>
