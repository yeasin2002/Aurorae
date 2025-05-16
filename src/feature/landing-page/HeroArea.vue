<template>
  <section class="z-10 flex min-h-screen flex-col items-center justify-between py-16">
    <div class="container mx-auto px-4 md:px-8">
      <div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        <!-- Left Column -->
        <div class="flex flex-col justify-center">
          <h1
            class="mb-8 font-clash-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          >
            Find the Best Hotels<br />at the Best Prices
          </h1>
          <NuxtLink
            to="/hotels"
            class="w-fit rounded-full bg-yellow-400 px-8 py-3 font-aeonik font-bold text-gray-900 transition duration-300 hover:bg-yellow-500"
          >
            Get Started
          </NuxtLink>
        </div>
        <!-- Right Column -->
        <div class="flex flex-col">
          <p class="mb-8 font-aeonik text-lg xl:text-xl">
            Discover a seamless hotel booking experience with our platform. Whether you're planning
            a vacation, a business trip, or a weekend getaway, we bring you a curated selection of
            top-rated hotels.
          </p>
          <!-- Stats -->
          <div class="mb-10 grid grid-cols-3 gap-4">
            <div class="flex flex-col">
              <span class="font-clash-display text-xl font-bold md:text-2xl">400.00 +</span>
              <span class="font-aeonik text-sm text-gray-400">Client</span>
            </div>
            <div class="flex flex-col">
              <span class="font-clash-display text-xl font-bold md:text-2xl">2.50 K+</span>
              <span class="font-aeonik text-sm text-gray-400">Product</span>
            </div>
            <div class="flex flex-col">
              <span class="font-clash-display text-xl font-bold md:text-2xl">2.50 K+</span>
              <span class="font-aeonik text-sm text-gray-400">Year Experience</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Images Section -->
      <div class="mt-24 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div class="h-96 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury hotel with pool"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="h-96 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Hotel interior"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
:root {
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
}

.bg-primary {
  background-color: var(--color-primary);
}

.bg-primary-dark {
  background-color: var(--color-primary-dark);
}

.text-primary {
  color: var(--color-primary);
}

.focus\:ring-primary:focus {
  --tw-ring-color: var(--color-primary);
}

.focus\:border-primary:focus {
  border-color: var(--color-primary);
}
/* You can add custom styles here if needed */
</style>
