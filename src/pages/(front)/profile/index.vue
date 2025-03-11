<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Profile',
})

definePageMeta({
  layout: 'profile',
})
</script>

<template>
  <div class="min-h-screen bg-background text-white">
    <!-- Profile Content -->
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col gap-8 md:flex-row">
        <!-- Main Content -->
        <div class="flex-1">
          <div class="mb-8 rounded-lg bg-gray-900 p-6">
            <h1 class="mb-2 font-clash-display text-3xl font-bold">Welcome back, John</h1>
            <p class="font-aeonik text-gray-400">
              Manage your profile and view your booking history
            </p>
          </div>

          <!-- Dashboard Stats -->
          <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="rounded-lg bg-gray-900 p-6">
              <div class="mb-4 flex items-center justify-between">
                <h3 class="font-clash-display text-lg">Upcoming Stays</h3>
                <span class="rounded-full bg-yellow-400 px-2 py-1 text-xs font-bold text-black"
                  >2</span
                >
              </div>
              <p class="mb-1 text-3xl font-bold">2</p>
              <p class="text-sm text-gray-400">Next: Mar 15 - Mar 20</p>
            </div>

            <div class="rounded-lg bg-gray-900 p-6">
              <div class="mb-4 flex items-center justify-between">
                <h3 class="font-clash-display text-lg">Loyalty Points</h3>
                <span class="rounded-full bg-purple-500 px-2 py-1 text-xs font-bold text-white"
                  >Gold</span
                >
              </div>
              <p class="mb-1 text-3xl font-bold">4,250</p>
              <p class="text-sm text-gray-400">750 until Platinum</p>
            </div>

            <div class="rounded-lg bg-gray-900 p-6">
              <div class="mb-4 flex items-center justify-between">
                <h3 class="font-clash-display text-lg">Saved Hotels</h3>
                <span class="rounded-full bg-blue-500 px-2 py-1 text-xs font-bold text-white"
                  >New</span
                >
              </div>
              <p class="mb-1 text-3xl font-bold">12</p>
              <p class="text-sm text-gray-400">3 new recommendations</p>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="mb-8 rounded-lg bg-gray-900 p-6">
            <div class="mb-6 flex items-center justify-between">
              <h2 class="font-clash-display text-xl font-bold">Recent Activity</h2>
              <button class="text-sm text-yellow-400 hover:underline">View All</button>
            </div>

            <div class="space-y-4">
              <div class="flex items-center rounded-lg bg-gray-800 p-4">
                <div class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-medium">Booking Confirmed</h4>
                  <p class="text-sm text-gray-400">Luxury Suite at Grand Hotel - Mar 15-20</p>
                </div>
                <span class="text-xs text-gray-500">2 days ago</span>
              </div>

              <div class="flex items-center rounded-lg bg-gray-800 p-4">
                <div
                  class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-medium">Payment Successful</h4>
                  <p class="text-sm text-gray-400">$1,250.00 - Grand Hotel</p>
                </div>
                <span class="text-xs text-gray-500">2 days ago</span>
              </div>

              <div class="flex items-center rounded-lg bg-gray-800 p-4">
                <div
                  class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-medium">Review Submitted</h4>
                  <p class="text-sm text-gray-400">Oceanview Resort - 5 stars</p>
                </div>
                <span class="text-xs text-gray-500">1 week ago</span>
              </div>
            </div>
          </div>

          <!-- Recommended Hotels -->
          <div class="rounded-lg bg-gray-900 p-6">
            <div class="mb-6 flex items-center justify-between">
              <h2 class="font-clash-display text-xl font-bold">Recommended For You</h2>
              <button class="text-sm text-yellow-400 hover:underline">View All</button>
            </div>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div class="overflow-hidden rounded-lg bg-gray-800">
                <div class="relative h-48 bg-gray-700">
                  <div
                    class="absolute right-3 top-3 rounded-full bg-yellow-400 px-2 py-1 text-xs font-bold text-black"
                  >
                    New
                  </div>
                </div>
                <div class="p-4">
                  <h3 class="mb-1 font-clash-display font-medium">Luxury Mountain Resort</h3>
                  <div class="mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <span class="ml-2 text-sm text-gray-400">5.0 (128 reviews)</span>
                  </div>
                  <p class="mb-4 text-sm text-gray-400">Aspen, Colorado • 5 nights</p>
                  <div class="flex items-center justify-between">
                    <span class="font-bold"
                      >$349<span class="text-sm font-normal text-gray-400">/night</span></span
                    >
                    <button
                      class="rounded-md bg-yellow-400 px-3 py-1 text-sm font-medium text-black"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
