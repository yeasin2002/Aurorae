<script setup lang="ts">
import FooterSection from "~/components/common/FooterSection.vue";

useSeoMeta({
  title: "Profile",
});
</script>

<template>
  <header class="border-b border-gray-800 px-6 py-4">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <a href="/" class="flex items-center">
          <span class="font-clash-display text-2xl font-bold text-yellow-400">Aurorae</span>
        </a>
      </div>

      <div class="flex items-center">
        <button class="rounded-md bg-white px-4 py-2 font-medium text-black">Get Started</button>
      </div>
    </div>
  </header>

  <slot />

  <FooterSection />
</template>
