<script setup lang="ts">
import { testimonials } from '~/data/about.data'
</script>

<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <div
          class="mb-4 inline-block rounded-full bg-gray-800 px-4 py-1 text-sm font-medium text-yellow-400"
        >
          Testimonials
        </div>
        <h2 class="mb-6 text-3xl font-bold md:text-4xl">What our users say</h2>
        <p class="text-gray-300">
          Don't just take our word for it. Here's what travelers like you have to say about Aurorae.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="relative rounded-2xl bg-gray-800/50 p-8"
        >
          <div class="absolute -top-4 left-8 text-6xl text-yellow-400">"</div>
          <p class="relative z-10 mb-8 pt-4 text-gray-300">{{ testimonial.quote }}</p>
          <div class="flex items-center">
            <div class="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-700">
              <img
                :src="`https://picsum.photos/48/48?random=${index + 20}`"
                :alt="testimonial.name"
                class="h-full w-full object-cover"
              />
            </div>
            <div>
              <p class="font-medium">{{ testimonial.name }}</p>
              <p class="text-sm text-gray-400">{{ testimonial.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
