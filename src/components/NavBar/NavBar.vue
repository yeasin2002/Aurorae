<script lang="ts" setup>
import { navigation } from '@/data'
import MobileNav from './MobileNav.vue'
</script>

<template>
  <div class="pt-6">
    <nav class="flex items-center justify-between gap-x-3">
      <a class="text-primary font-clash-display">Furniture world </a>
      <div class="space-x-4 hidden lg:block">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="font-medium font-aeonik"
        >
          {{ item.name }}
        </a>
      </div>
      <button class="btn btn-secondary hidden lg:block font-aeonik">Get Started</button>
      <MobileNav />
    </nav>
    <div class="h-[0.10rem] bg-gray-400 w-full my-4"></div>
  </div>
</template>
