<script setup lang="ts">
import Hotel from '@/components/cards/hotel-cards.vue'
import CTA from './hotelList-CTA.vue'
import { amenities } from '~/data'
</script>

<template>
  <div class="min-h-screen bg-[#1C1C1C] text-white">
    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-16">
      <div class="max-w-3xl">
        <h1 class="mb-4 text-5xl font-bold">Find Your Perfect Stay</h1>
        <p class="mb-8 text-xl text-gray-400">
          Discover unique places to stay that match your style and budget
        </p>

        <!-- Search and Filters -->
        <div class="space-y-4">
          <div class="flex flex-wrap gap-4">
            <div class="min-w-[200px] flex-1">
              <input
                type="text"
                placeholder="Where do you want to stay?"
                class="w-full rounded-md border-0 bg-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              />
            </div>
            <button
              class="flex items-center rounded-md bg-[#FFD700] px-8 py-2 text-black hover:bg-[#FFD700]/90"
            >
              <Icon name="lucide:search" class="mr-2 h-5 w-5" />
              Search
            </button>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <select
              class="w-[180px] rounded-md border-0 bg-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            >
              <option value="" disabled selected>Price Range</option>
              <option value="budget">Under $200</option>
              <option value="mid">$200 - $500</option>
              <option value="luxury">$500+</option>
            </select>

            <select
              class="w-[180px] rounded-md border-0 bg-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            >
              <option value="" disabled selected>Guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4+ Guests</option>
            </select>

            <select
              class="w-[180px] rounded-md border-0 bg-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            >
              <option value="" disabled selected>Sort By</option>
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="container mx-auto border-t border-white/10 px-4 py-8">
      <div class="flex justify-start gap-12">
        <div>
          <h3 class="mb-2 text-4xl font-bold">400+</h3>
          <p class="text-gray-400">Locations</p>
        </div>
        <div>
          <h3 class="mb-2 text-4xl font-bold">2.5K+</h3>
          <p class="text-gray-400">Happy Guests</p>
        </div>
        <div>
          <h3 class="mb-2 text-4xl font-bold">2.5K+</h3>
          <p class="text-gray-400">Reviews</p>
        </div>
      </div>
    </section>

    <!-- Amenities Filter -->
    <section class="container mx-auto px-4 py-8">
      <div class="flex flex-wrap gap-3">
        <button
          v-for="amenity in amenities"
          :key="amenity"
          class="rounded-md border border-white/20 px-4 py-2 hover:bg-white/10"
        >
          {{ amenity }}
        </button>
      </div>
    </section>

    <section class="grid grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 lg:grid-cols-3">
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
    </section>

    <CTA />
  </div>
</template>
