<script lang="ts" setup>
import { wordStatistics } from '~/data'
import heroImg1 from '~/assets/images/hero2.png'
import heroImg2 from '~/assets/images/hero1.png'
import circleArrow from '~/assets/icons/circle-arrow.png'
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2">
    <div>
      <h1 class="my-4 font-clash-display text-5xl md:my-0 lg:text-6xl">
        Let’s Design
        <br />
        Your Home
        <br />
        Very Easily
      </h1>
      <button class="btn btn-default my-4 font-clash-display font-bold">Get Started</button>

      <div class="hidden items-center gap-x-1 md:flex">
        <img :src="heroImg1" alt="Product Image" class="mt-8 rounded-sm" />
        <div class="flex w-full items-center justify-center gap-x-2">
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
          Interior design is the art of science of enhancing the interior of a building to achieve a
          healthier and more aesthetically pleasing environment for the people using the space.
        </h2>
        <div class="mt-4 flex items-center gap-x-10">
          <div v-for="item in wordStatistics" :key="item.label">
            <p class="text-2xl font-extrabold">{{ item.value }}</p>
            <p class="text-xs text-[#AEAEAE]">{{ item.label }}</p>
          </div>
        </div>
        <img :src="heroImg2" alt="Product Image" class="mt-8 w-full rounded-sm" />
      </div>
    </div>
  </div>
</template>
