<script setup lang="ts">
import LogoFull from '~/components/common/LogoFull.vue'
</script>

<template>
  <div class="min-h-screen bg-black font-sans text-white">
    <!-- Header -->
    <header class="absolute left-0 right-0 top-0 flex items-center justify-between p-6">
        <LogoFull />
      <a href="#" class="text-sm text-white hover:text-gray-300">Login</a>
    </header>

    <!-- Main Content -->
    <main class="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <!-- Left Section -->
      <section class="hidden flex-col justify-center bg-zinc-900 p-16 md:flex">
        <blockquote class="mb-8 text-3xl font-medium leading-relaxed">
          "This library has saved me countless hours of work and helped me deliver stunning designs
          to my clients faster than ever before."
        </blockquote>
        <p class="text-gray-500">Sofia Davis</p>
      </section>

      <slot />
    </main>
  </div>
</template>
