<script lang="ts" setup>
import { serviceData } from "~/data";
import SectionHeader from "./SectionHeader.vue";
import LineArrow from "~/assets/icons/line-arrow.svg";
</script>

<template>
  <div>
    <SectionHeader
      heading1="What we can do"
      heading2="for your home"
      desc="We always provide the best for our clients in any case so that all their wishes can be realized and have a decent, comfortable and aesthetically pleassing place to live. Pleasing environment for the people using the space."
    />

    <!-- server list -->
    <div class="bg-primary pb-8 pt-14 px-10">
      <div
        v-for="item in serviceData"
        :key="item.label"
        class="flex items-center justify-between text-black border-b border-b-background py-8 group"
      >
        <div>
          <p class="font-clash-display font-medium text-5xl">
            {{ item.label }}
          </p>
          <p
            class="font-aeonik text-sm w-2/3 opacity-0 group-hover:opacity-100 transition-all"
          >
            {{ item.desc }}
          </p>
        </div>
        <img
          :src="LineArrow"
          alt="Arrow"
          class="size-10 mr-6 group-hover:rotate-12 transition-all"
        />
      </div>
    </div>
  </div>
</template>
