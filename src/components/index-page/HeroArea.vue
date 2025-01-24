<script lang="ts" setup>
import { ArrowRight } from 'lucide-vue-next'
import { wordStatistics } from '~/data'
import { Button } from '~/components/ui/button'
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 py-4 md:grid-cols-2">
    <div>
      <h1 class="my-4 font-clash-display text-5xl md:my-0 lg:text-6xl">
        Let’s Design
        <br />
        Your Home
        <br />
        Very Easily
      </h1>
      <Button class="my-4 rounded-3xl font-clash-display font-bold">Get Started</Button>

      <div class="hidden items-center gap-x-1 md:flex">
        <NuxtImg
          src="/assets/images/hero2.png"
          alt="Product Image"
          class="mt-8 rounded-sm xl:w-[80%] 2xl:w-full"
        />
        <div
          id="scroll  direction"
          class="hidden w-full items-center justify-center gap-x-2 gap-y-2 xl:flex"
        >
          <span
            class="into-center rotate-90 rounded-full border border-primary p-2 text-primary transition-all group-hover:translate-x-2"
          >
            <ArrowRight />
          </span>

          <p class="text-xs">
            Scroll to <br />
            explore
          </p>
        </div>
      </div>
    </div>
    <!-- second section -->

    <div class="w-full xl:w-full">
      <h2>
        Explore Unique Stays Around the World Designed to Match Your Style and Comfort From Luxury
        Resorts to Budget-Friendly Options Find the Perfect Place for Your Next Adventure
      </h2>
      <div class="mt-4 flex items-center gap-x-10">
        <div v-for="item in wordStatistics" :key="item.label">
          <p class="text-2xl font-extrabold">{{ item.value }}</p>
          <p class="text-xs text-[#AEAEAE]">{{ item.label }}</p>
        </div>
      </div>
      <NuxtImg src="/assets/images/hero1.png" alt="Product Image" class="mt-8 w-full rounded-sm" />
    </div>
  </div>
</template>
