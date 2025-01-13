<script lang="ts" setup>
import { serviceData } from '~/data'
import SectionHeader from './SectionHeader.vue'
// import LineArrow from '~/assets/icons/line-arrow.svg'
</script>

<template>
  <div>
    <SectionHeader
      heading1="What we can do"
      heading2="for your home"
      desc="We always provide the best for our clients in any case so that all their wishes can be realized and have a decent, comfortable and aesthetically pleassing place to live. Pleasing environment for the people using the space."
    />

    <!-- server list -->
    <div class="bg-primary px-2 pt-6 lg:px-10 lg:pb-8 lg:pt-14">
      <div
        v-for="item in serviceData"
        :key="item.label"
        class="group flex items-center justify-between border-b border-b-background text-black  lg:py-8"
      >
        <div class="py-8 space-y-3 md:py-0 md:space-y-0">
          <h4 class="font-clash-display text-5xl font-medium text-nowrap">
            {{ item.label }}
          </h4>
          <p class="md:w-2/3 w-full font-aeonik text-sm md:opacity-0 transition-all group-hover:opacity-100 opacity-90 ">
            {{ item.desc }}
          </p>
        </div>
        <NuxtImg
          src="/assets/icons/line-arrow.svg"
          alt="Arrow"
          class="mr-6 hidden size-10 transition-all group-hover:rotate-12 md:block"
        />
      </div>
    </div>
  </div>
</template>
