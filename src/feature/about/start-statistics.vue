<script setup lang="ts">
import { stats } from '~/data/about.data'
</script>

<template>
  <section class="bg-gray-900/50 py-20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div v-for="(stat, index) in stats" :key="index" class="text-center">
          <div
            class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400"
          >
            <component :is="stat.icon" class="h-8 w-8" />
          </div>
          <p class="mb-2 text-3xl font-bold md:text-4xl">{{ stat.value }}</p>
          <p class="text-gray-400">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
