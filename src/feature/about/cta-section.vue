<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div
        class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 p-12"
      >
        <div
          class="absolute right-0 top-0 -mr-32 -mt-32 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl"
        ></div>
        <div
          class="absolute bottom-0 left-0 -mb-32 -ml-32 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl"
        ></div>

        <div class="relative z-10 mx-auto max-w-2xl text-center">
          <h2 class="mb-6 text-3xl font-bold md:text-4xl">
            Ready to experience better hotel booking?
          </h2>
          <p class="mb-8 text-gray-300">
            Join over 400,000 travelers who've discovered the Aurorae difference. Sign up today and
            get 15% off your first booking.
          </p>
          <NuxtLink
            to="/hotels"
            class="rounded-xl bg-yellow-400 px-8 py-4 text-lg font-medium text-[#1a1b1e] transition-colors hover:bg-yellow-300"
          >
            Get Started
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
