<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import SectionHeader from "./SectionHeader.vue";
import { projectShowcase } from "~/data";
</script>

<template>
  <div class="bg-white pt-8">
    <SectionHeader
      heading1="Our all projects "
      heading2="for clients"
      desc="We always provide the best for our clients in any case so that all their wishes can be realized and have a decent, comfortable and aesthetically pleasing place to live. Pleasing environment for the people using the space."
    />

    <div>
      <div
        v-for="(item, index) in projectShowcase"
        :key="item.label"
        class="grid grid-cols-12 my-4 text-black mx-2"
      >
        <img
          :src="item.img"
          :alt="`img of ${item.label}`"
          class="col-span-8 rounded-md"
          :class="{ 'order-last': index % 2 === 0 }"
        />
        <div class="flex flex-col justify-around col-span-4 mx-8">
          <div>
            <h5 class="font-clash-display text-3xl font-medium">
              {{ item.label }}
            </h5>
            <p class="font-aeonik text-lg mt-2">{{ item.dec }}</p>
          </div>

          <a :href="item.link" class="flex gap-x-3 text-xl">
            View project
            <span class="into-center rounded-full border border-black p-1">
              <ArrowRight class="text-black" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
