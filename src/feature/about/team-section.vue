<script setup lang="ts">
import { team } from "~/data/about.data";
</script>

<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <div
          class="mb-4 inline-block rounded-full bg-gray-800 px-4 py-1 text-sm font-medium text-yellow-400"
        >
          Our Team
        </div>
        <h2 class="mb-6 text-3xl font-bold md:text-4xl">Meet the minds behind Aurorae</h2>
        <p class="text-gray-300">
          A diverse group of travel enthusiasts, tech wizards, and hospitality experts working to
          revolutionize how you book hotels.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
        <div v-for="(member, index) in team" :key="index" class="group">
          <div class="relative mb-4 aspect-[3/4] overflow-hidden rounded-xl bg-gray-800">
            <img
              :src="member.img"
              :alt="member.name"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <!-- <button class="rounded-lg bg-yellow-400 px-4 py-2 text-sm font-medium text-[#1a1b1e]">
                Connect
              </button> -->
            </div>
          </div>
          <h3 class="text-lg font-bold">{{ member.name }}</h3>
          <p class="text-sm text-gray-400">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
