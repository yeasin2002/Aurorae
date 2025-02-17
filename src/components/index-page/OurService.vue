<script lang="ts" setup>
import { serviceData } from '~/data';

import SectionHeader from './SectionHeader.vue'
</script>

<template>
  <div>
    <div class="bg-white">
      <SectionHeader
        heading1="What we can do"
        heading2="for your home"
        desc="We always provide the best for our clients in any case so that all their wishes can be realized and have a decent, comfortable and aesthetically pleassing place to live. Pleasing environment for the people using the space."
      />
    </div>

    <!-- server list -->
    <div class="bg-primary px-2 pt-6 lg:px-10 lg:pb-8 lg:pt-14">
      <div
        v-for="item in serviceData"
        :key="item.label"
        class="group container mx-auto flex items-center justify-between border-b border-b-background text-black lg:py-8"
      >
        <div class="space-y-3 py-8 md:space-y-0 md:py-0">
          <h4 class="text-nowrap font-clash-display text-5xl font-medium">
            {{ item.label }}
          </h4>
          <p
            class="w-full font-aeonik text-sm opacity-90 transition-all group-hover:opacity-100 md:w-2/3 md:opacity-0"
          >
            {{ item.desc }}
          </p>
        </div>
        <Icon
          name="local:line-arrow"
          class="mr-6 hidden size-10 transition-all group-hover:rotate-12 md:block"
        />
      </div>
    </div>
  </div>
</template>
