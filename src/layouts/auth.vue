<script setup lang="ts">
import LogoFull from "~/components/common/LogoFull.vue";
import FlickeringGrid from "~/components/inspira-ui/FlickeringGrid.vue";

useSeoMeta({
  title: "auth",
});
</script>

<template>
  <div class="min-h-screen  font-sans text-white">
    <!-- Header -->
    <header class="absolute left-0 right-0 top-0 flex items-center justify-start p-6">
      <LogoFull />
      <!-- <a href="#" class="text-sm text-white hover:text-gray-300">Login</a> -->
    </header>

    <!-- Main Content -->
    <main class="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div class="relative  p-16 hidden lg:flex">
        <ClientOnly>
          <div class="absolute top-0 left-0 h-full w-full overflow-hidden rounded-lg  overflow-x-hidden select-none">
            <FlickeringGrid
              class="relative inset-0 -left-1/2 z-0 h-full w-full [mask-image:radial-gradient(450px_circle_at_center,white,transparent)] select-none opacity-50  "
              :square-size="4"
              :grid-gap="6"
              color="#FED500"
              :max-opacity="0.5"
              :flicker-chance="0.1"
              :width="800"
              :height="800"
            />
          </div>
        </ClientOnly>
        <!-- Left Section -->
        <section class=" flex flex-col justify-center  ">
          <blockquote class="mb-8 text-3xl font-medium leading-relaxed">
            "This library has saved me countless hours of work and helped me deliver stunning designs
            to my clients faster than ever before."
          </blockquote>
          <p class="text-gray-500">Sofia Davis</p>
        </section>
      </div>

      <slot />
    </main>
  </div>
</template>
