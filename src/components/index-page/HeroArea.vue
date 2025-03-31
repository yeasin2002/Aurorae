<script lang="ts" setup>
import CounterAnimation from '~/components/common/NumberCounter.vue';
import { Button } from '~/components/ui/button';

const wordStatistics = [
  {
    label: 'Client',
    value: 400,
    valuePostfix: '+',
  },
  {
    label: 'Product',
    value: 2.5,
    valuePostfix: 'K+',
  },
  {
    label: 'Year Experience',
    value: 2.5,
    valuePostfix: 'K+',
  },
]
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 py-4 md:grid-cols-2 px-4 lg:px-0">
    <div>
      <h1 class="my-4 font-clash-display text-5xl md:my-0 lg:text-6xl">
        Find the Best Hotels <br> at the Best Prices
</h1>
      <Button class="my-4 rounded-3xl font-clash-display font-bold !text-gray-900">Get Started</Button>
      <div class="hidden items-center gap-x-1 md:flex">
        <NuxtImg
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Product Image"
          class="mt-8 rounded-sm xl:w-[80%] 2xl:w-full max-h-[22rem]"
        />

      </div>
    </div>
    <!-- second section -->

    <div class="w-full xl:w-full">
      <h2>
        Discover a seamless hotel booking experience with our platform. Whether you’re planning a vacation, a business trip, or a weekend getaway, we bring you a curated selection of top-rated hotels.


      </h2>
      <div class="mt-4 flex items-center gap-x-10">
        <div v-for="item in wordStatistics" :key="item.label">
          <!-- <p class="text-2xl font-extrabold">{{ item.value }}{{ item.valuePostfix }}</p> -->
          <p class="flex items-center gap-x-1">
            <CounterAnimation :from="0" :to="item.value" :duration="2000" :decimals="2" />
            <span>{{ item.valuePostfix }}</span>
          </p>
          <p class="text-xs text-[#AEAEAE]">{{ item.label }}</p>
        </div>
      </div>
      <NuxtImg src="/assets/images/hero1.png" alt="Product Image" class="mt-8 w-full rounded-sm" />
    </div>
  </div>
</template>
