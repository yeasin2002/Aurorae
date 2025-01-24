<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Star, Check, MapPin } from 'lucide-vue-next'
import { amenities } from '~/data'
import DatePicker from '~/components/ui/date-Picker.vue'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const route = useRoute()
const id = (route.params as { id: string }).id || ''
console.log('🚀 ~ hotel id: ', id)

const bookHotel = () => {
  console.log('Booking submitted')
}

const guests = Array.from({ length: 5 })
</script>

<template>
  <div class="min-h-screen bg-background font-aeonik text-primary-foreground">
    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <img
        src="https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Luxury Ocean View Resort"
        class="h-full w-full rounded-lg object-cover"
      />
      <div class="absolute inset-0 flex items-end bg-black bg-opacity-50">
        <div class="container mx-auto px-4 py-8">
          <h1 class="mb-4 font-clash-display text-4xl font-bold text-white md:text-6xl">
            Luxury Ocean View Resort
          </h1>
          <div class="mb-2 flex items-center gap-x-1 text-white">
            <Star />
            <span class="text-lg">4.8 (382 reviews)</span>
          </div>
          <p class="flex items-center gap-x-1 text-xl text-white">
            <MapPin /> <span>Malibu, California</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <!-- Hotel Details -->
        <div class="space-y-8 lg:col-span-2">
          <section>
            <h2 class="mb-4 font-clash-display text-3xl font-bold">About this hotel</h2>
            <p class="text-lg">
              Experience unparalleled luxury at our oceanfront resort. Nestled on pristine beaches
              with breathtaking views, our resort offers world-class amenities, exquisite dining,
              and personalized service to ensure an unforgettable stay.
            </p>
          </section>

          <section>
            <h2 class="mb-4 font-clash-display text-3xl font-bold">Amenities</h2>
            <ul class="grid grid-cols-2 gap-4">
              <li class="flex items-center gap-x-2" v-for="amenity in amenities" :key="amenity">
                <Check class="size-4 text-green-600" />
                <span> {{ amenity }} </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="mb-4 font-clash-display text-3xl font-bold">Location</h2>
            <div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
              <div class="flex items-center justify-center bg-primary bg-opacity-20">
                <svg class="h-12 w-12 text-primary" viewBox="0 0 24 24">...</svg>
              </div>
            </div>
          </section>

          <!-- review sections -->
          <section>
            <h2 class="mb-4 font-clash-display text-3xl font-bold">Reviews</h2>

            <!-- review card 1 -->
            <div class="mb-6 border-b border-primary border-opacity-20 pb-6 last:border-b-0">
              <div class="mb-2 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Reviewer"
                  class="mr-3 h-10 w-10 rounded-full"
                />
                <div>
                  <h3 class="font-bold">Reviewer Name</h3>
                  <div class="flex items-center">
                    <svg class="h-4 w-4 fill-primary text-primary" viewBox="0 0 24 24">...</svg>
                  </div>
                </div>
              </div>
              <p>Review comment here.</p>
            </div>
            <!-- review card 1 -->
          </section>
        </div>

        <!-- Booking Section -->
        <div class="text-background lg:col-span-1">
          <div class="sticky top-8 rounded-lg bg-primary bg-opacity-5 p-6">
            <h2 class="mb-4 font-clash-display text-3xl font-bold">
              $499 <span class="text-lg font-normal">/night</span>
            </h2>
            <form class="space-y-4">
              <div>
                <label for="check-in" class="mb-1 block text-sm font-medium">Check-in</label>
                <DatePicker
                  class="w-full rounded-md border border-primary border-opacity-20 bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label for="check-out" class="mb-1 block text-sm font-medium">Check-out</label>
                <DatePicker
                  class="w-full rounded-md border border-primary border-opacity-20 bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label for="guests" class="mb-1 block text-sm font-medium">Guests</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>

                      <SelectItem v-for="(_, index) in guests" :key="index" :value="index.toString()">
                        {{ index +1 }} Person
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <!-- <select
                  id="guests"
                  name="guests"
                  required
                  class="w-full rounded-md border border-primary border-opacity-20 bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                </select> -->
              </div>
              <button
                type="submit"
                class="w-full rounded-md bg-primary py-3 font-bold text-primary-foreground transition duration-300 hover:bg-opacity-90"
              >
                Book Now
              </button>
            </form>
            <p class="mt-4 text-center text-sm">You won't be charged yet</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
