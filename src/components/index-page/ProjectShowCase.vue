<script setup lang="ts">
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

    <div class="space-y-14 px-4 lg:mx-2 lg:space-y-4 lg:px-0">
      <div
        v-for="(item, index) in projectShowcase"
        :key="item.label"
        class="group grid grid-cols-1 gap-y-3 text-black lg:grid-cols-12"
      >
        <NuxtImg
          :src="item.img"
          :alt="`img of ${item.label}`"
          :class="{ 'lg:order-last': index % 2 === 0 }"
          class="col-span-7 rounded-md xl:col-span-8"
        />
        <div class="col-span-5 flex flex-col justify-around gap-y-4 lg:mx-8 xl:col-span-4">
          <div>
            <h4 class="font-clash-display text-3xl font-medium">
              {{ item.label }}
            </h4>
            <p class="mt-2 font-aeonik text-base xl:text-lg">{{ item.dec }}</p>
          </div>

          <a :href="item.link" class="flex gap-x-3 lg:text-lg xl:text-xl">
            <span>View project</span>
            <span
              class="into-center rounded-full border border-black p-1 transition-all group-hover:translate-x-2"
            >
              <Icon name="mingcute:arrow-right-line" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
