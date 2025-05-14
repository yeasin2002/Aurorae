<script setup lang="ts">
import { values } from '~/data/about.data'
</script>

<template>
  <section class="bg-gray-900/50 py-20">
    <div class="container mx-auto px-4">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <div
          class="mb-4 inline-block rounded-full bg-gray-800 px-4 py-1 text-sm font-medium text-yellow-400"
        >
          Our Values
        </div>
        <h2 class="mb-6 text-3xl font-bold md:text-4xl">What drives us forward</h2>
        <p class="text-gray-300">
          These core principles guide everything we do, from how we build our platform to how we
          treat our customers.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <div
          v-for="(value, index) in values"
          :key="index"
          class="rounded-2xl bg-gray-800/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-gray-800 hover:shadow-xl hover:shadow-yellow-400/5"
        >
          <div class="mb-6 inline-block rounded-xl bg-gray-900 p-4">
            <component :is="value.icon" class="h-8 w-8 text-yellow-400" />
          </div>
          <h3 class="mb-4 text-xl font-bold">{{ value.title }}</h3>
          <p class="text-gray-400">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
