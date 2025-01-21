<script setup lang="ts">
import { ref } from 'vue'
import { Search, Star } from 'lucide-vue-next'
import { hotels, amenities } from '@/data'
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
              <Search class="mr-2 h-5 w-5" />
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

    <!-- Hotel Listings -->
    <section class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="hotel in hotels"
          :key="hotel.id"
          class="group overflow-hidden rounded-lg bg-white/5"
        >
          <div class="relative h-64">
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              :alt="hotel.name"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div class="p-6">
            <div class="mb-2 flex items-start justify-between">
              <h3 class="text-2xl font-bold">{{ hotel.name }}</h3>
              <div class="flex items-center gap-1 rounded bg-white/10 px-2 py-1">
                <Star class="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
                <span>{{ hotel.rating.toFixed(1) }}</span>
              </div>
            </div>
            <p class="mb-4 text-gray-400">{{ hotel.description }}</p>
            <div class="mb-4 flex flex-wrap gap-2">
              <span
                v-for="amenity in hotel.amenities"
                :key="amenity"
                class="rounded bg-white/10 px-2 py-1 text-xs"
              >
                {{ amenity }}
              </span>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <span class="text-2xl font-bold text-[#FFD700]">${{ hotel.price }}</span>
                <span class="text-gray-400">/night</span>
              </div>
              <button
                class="rounded-md border border-[#FFD700] px-4 py-2 text-[#FFD700] transition-colors duration-300 hover:bg-[#FFD700] hover:text-black"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="container mx-auto px-4 py-16">
      <div class="rounded-lg bg-[#FFD700] p-8 md:p-12">
        <div class="max-w-2xl">
          <h2 class="mb-4 text-3xl font-bold text-black md:text-4xl">
            Let's Find Your Dream Stay Together
          </h2>
          <p class="mb-8 text-black/80">
            Our expert team is ready to help you find the perfect accommodation for your next
            adventure.
          </p>
          <button class="rounded-md bg-black px-8 py-3 text-white hover:bg-black/90">
            Contact Now
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
