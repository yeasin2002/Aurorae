<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import SectionHeader from './SectionHeader.vue'
import { projectShowcase } from '~/data'
</script>

<template>
  <div class="bg-white pb-8">
    <SectionHeader
      heading1="Our all projects "
      heading2="for clients"
      desc="We always provide the best for our clients in any case so that all their wishes can be realized and have a decent, comfortable and aesthetically pleasing place to live. Pleasing environment for the people using the space."
    />

    <div  class="space-y-14 md:space-y-4 px-4 md:mx-2">
      <div
        v-for="(item, index) in projectShowcase"
        :key="item.label"
        class=" grid grid-cols-1 text-black md:grid-cols-12 gap-y-3 group"
      >
        <img
          :src="item.img"
          :alt="`img of ${item.label}`"
          class="col-span-8 rounded-md"
          :class="{ 'md:order-last': index % 2 === 0 }"
        />
        <div class="md:mx-8 flex flex-col justify-around col-span-4 gap-y-4">
          <div>
            <h5 class="font-clash-display text-3xl font-medium">
              {{ item.label }}
            </h5>
            <p class="mt-2 font-aeonik text-lg">{{ item.dec }}</p>
          </div>

          <a :href="item.link" class="flex gap-x-3 text-xl">
            View project
            <span class="into-center rounded-full border border-black p-1 group-hover:translate-x-2 transition-all">
              <ArrowRight class="text-black" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
