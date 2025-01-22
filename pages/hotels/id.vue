<script setup lang="ts">
import { ref } from 'vue'
import { Star, Check, MapPin } from 'lucide-vue-next'

interface Review {
  id: number
  name: string
  avatar: string
  rating: number
  comment: string
}

interface Hotel {
  id: string
  name: string
  description: string
  price: number
  rating: number
  reviews: number
  reviewsDetails: Review[]
  location: string
  amenities: string[]
  image: string
}

// Mock data for the hotel
const hotel = ref<Hotel>({
  id: '1',
  name: 'Luxury Ocean View Resort',
  description:
    'Experience unparalleled luxury at our oceanfront resort. Nestled on pristine beaches with breathtaking views, our resort offers world-class amenities, exquisite dining, and personalized service to ensure an unforgettable stay.',
  price: 499,
  rating: 4.8,
  reviews: 382,
  reviewsDetails: [
    {
      id: 1,
      name: 'John Doe',
      avatar: '/placeholder.svg?height=40&width=40',
      rating: 5,
      comment:
        'Absolutely stunning resort with impeccable service. The ocean view from our room was breathtaking!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: '/placeholder.svg?height=40&width=40',
      rating: 4,
      comment:
        'Great amenities and beautiful location. The staff was very friendly and accommodating.',
    },
  ],
  location: 'Malibu, California',
  amenities: [
    'Free WiFi',
    'Ocean View',
    'Spa',
    'Fitness Center',
    'Restaurant',
    '24/7 Room Service',
    'Swimming Pool',
    'Beach Access',
  ],
  image: `https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
})

const bookHotel = () => {
  console.log('Booking submitted')
}
</script>

<template>
  <div class="min-h-screen bg-background font-aeonik text-primary-foreground">
    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <img :src="hotel.image" :alt="hotel.name" class="h-full w-full rounded-lg object-cover" />
      <div class="absolute inset-0 flex items-end bg-black bg-opacity-50">
        <div class="container mx-auto px-4 py-8">
          <h1 class="mb-4 font-clash-display text-4xl font-bold text-white md:text-6xl">
            {{ hotel.name }}
          </h1>
          <div class="mb-2 flex items-center text-white">
            <Star class="mr-1 h-5 w-5 fill-primary text-primary" />
            <span class="text-lg">{{ hotel.rating.toFixed(1) }} ({{ hotel.reviews }} reviews)</span>
          </div>
          <p class="text-xl text-white">{{ hotel.location }}</p>
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
            <p class="text-lg">{{ hotel.description }}</p>
          </section>

          <section>
            <h2 class="mb-4 font-clash-display text-3xl font-bold">Amenities</h2>
            <ul class="grid grid-cols-2 gap-4">
              <li v-for="amenity in hotel.amenities" :key="amenity" class="flex items-center">
                <Check class="mr-2 h-5 w-5 text-primary" />
                <span>{{ amenity }}</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="mb-4 font-clash-display text-3xl font-bold">Location</h2>
            <div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
              <!-- Placeholder for map -->
              <div class="flex items-center justify-center bg-primary bg-opacity-20">
                <MapPin class="h-12 w-12 text-primary" />
              </div>
            </div>
          </section>

          <section>
            <h2 class="mb-4 font-clash-display text-3xl font-bold">Reviews</h2>
            <div
              v-for="review in hotel.reviewsDetails"
              :key="review.id"
              class="mb-6 border-b border-primary border-opacity-20 pb-6 last:border-b-0"
            >
              <div class="mb-2 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  :alt="review.name"
                  class="mr-3 h-10 w-10 rounded-full"
                />
                <div>
                  <h3 class="font-bold">{{ review.name }}</h3>
                  <div class="flex items-center">
                    <Star
                      v-for="i in 5"
                      :key="i"
                      :class="[
                        'h-4 w-4',
                        i <= review.rating ? 'fill-primary text-primary' : 'text-gray-300',
                      ]"
                    />
                  </div>
                </div>
              </div>
              <p>{{ review.comment }}</p>
            </div>
          </section>
        </div>

        <!-- Booking Section -->
        <div class="lg:col-span-1">
          <div class="sticky top-8 rounded-lg bg-primary bg-opacity-5 p-6">
            <h2 class="mb-4 font-clash-display text-3xl font-bold">
              ${{ hotel.price }} <span class="text-lg font-normal">/night</span>
            </h2>
            <form @submit.prevent="bookHotel" class="space-y-4">
              <div>
                <label for="check-in" class="mb-1 block text-sm font-medium">Check-in</label>
                <input
                  type="date"
                  id="check-in"
                  name="check-in"
                  required
                  class="w-full rounded-md border border-primary border-opacity-20 bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label for="check-out" class="mb-1 block text-sm font-medium">Check-out</label>
                <input
                  type="date"
                  id="check-out"
                  name="check-out"
                  required
                  class="w-full rounded-md border border-primary border-opacity-20 bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label for="guests" class="mb-1 block text-sm font-medium">Guests</label>
                <select
                  id="guests"
                  name="guests"
                  required
                  class="w-full rounded-md border border-primary border-opacity-20 bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                </select>
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
