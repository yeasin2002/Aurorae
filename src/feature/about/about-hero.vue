<template>
  <section class="relative overflow-hidden py-20 md:py-28">
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-purple-500/5 to-transparent"
    ></div>
    <div class="container relative z-10 mx-auto px-4">
      <div class="max-w-4xl">
        <h1 class="mb-6 text-5xl font-bold leading-tight md:text-7xl">
          We're changing how you
          <span class="relative">
            <span class="relative z-10 text-yellow-400"> book hotels</span>
            <span
              class="absolute bottom-2 left-0 -z-0 h-3 w-full rounded-full bg-yellow-400/20"
            ></span>
          </span>
        </h1>
        <p class="mb-8 max-w-2xl text-xl text-gray-300 md:text-2xl">
          Aurorae is the next-gen hotel booking platform built for travelers who want more than just
          a place to stay.
        </p>
        <div class="flex items-center space-x-4">
          <div class="flex -space-x-4">
            <div
              v-for="i in 4"
              :key="i"
              class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-[#1a1b1e] bg-gray-800"
            >
              <img
                :src="`https://picsum.photos/40?random=${i}`"
                :alt="`Team member ${i}`"
                class="h-10 w-10 object-cover"
              />
            </div>
          </div>
          <p class="text-gray-400">
            Join our <span class="text-yellow-400">400,000+</span> happy travelers
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
