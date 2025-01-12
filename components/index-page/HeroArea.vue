<script lang="ts" setup>
import { wordStatistics } from "~/data";
import heroImg1 from "~/assets/images/hero2.png";
import heroImg2 from "~/assets/images/hero1.png";
import circleArrow from "~/assets/icons/circle-arrow.png";
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5">
    <div>
      <h1 class="text-5xl lg:text-6xl font-clash-display my-4 md:my-0">
        Let’s Design
        <br />
        Your Home
        <br />
        Very Easily
      </h1>
      <button class="btn btn-default my-4 font-clash-display font-bold">
        Get Started
      </button>

      <div class="hidden md:flex gap-x-1 items-center">
        <img :src="heroImg1" alt="Product Image" class="mt-8 rounded-sm" />
        <div class="flex items-center justify-center w-full gap-x-2">
          <img :src="circleArrow" alt="Arrow" class="size-14" />
          <p>
            Scroll to <br />
            explore
          </p>
        </div>
      </div>
    </div>
    <!-- second section -->
    <div class="font-aeonik">
      <div class="w-full lg:w-4/5">
        <h2>
          Interior design is the art of science of enhancing the interior of a
          building to achieve a healthier and more aesthetically pleasing
          environment for the people using the space.
        </h2>
        <div class="flex items-center gap-x-10 mt-4">
          <div v-for="item in wordStatistics" :key="item.label">
            <p class="font-extrabold text-2xl">{{ item.value }}</p>
            <p class="text-[#AEAEAE] text-xs">{{ item.label }}</p>
          </div>
        </div>
        <img
          :src="heroImg2"
          alt="Product Image"
          class="mt-8 rounded-sm w-full"
        />
      </div>
    </div>
  </div>
</template>
