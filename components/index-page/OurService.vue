<script lang="ts" setup>
import { serviceData } from '~/data'
import SectionHeader from './SectionHeader.vue'
import LineArrow from '~/assets/icons/line-arrow.svg'
</script>

<template>
  <div>
    <SectionHeader
      heading1="What we can do"
      heading2="for your home"
      desc="We always provide the best for our clients in any case so that all their wishes can be realized and have a decent, comfortable and aesthetically pleassing place to live. Pleasing environment for the people using the space."
    />

    <!-- server list -->
    <div class="bg-primary px-10 pb-8 pt-14">
      <div
        v-for="item in serviceData"
        :key="item.label"
        class="group flex items-center justify-between border-b border-b-background py-8 text-black"
      >
        <div>
          <p class="font-clash-display text-5xl font-medium">
            {{ item.label }}
          </p>
          <p class="w-2/3 font-aeonik text-sm opacity-0 transition-all group-hover:opacity-100">
            {{ item.desc }}
          </p>
        </div>
        <img
          :src="LineArrow"
          alt="Arrow"
          class="mr-6 size-10 transition-all group-hover:rotate-12"
        />
      </div>
    </div>
  </div>
</template>
