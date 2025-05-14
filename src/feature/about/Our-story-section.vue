<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="grid items-center gap-12 md:grid-cols-2">
        <div class="order-2 md:order-1">
          <div class="relative">
            <div class="aspect-square overflow-hidden rounded-2xl">
              <img
                src="https://picsum.photos/600/600?random=1"
                alt="Our story"
                class="h-full w-full object-cover"
              />
            </div>
            <div
              class="absolute -bottom-6 -right-6 rounded-xl bg-yellow-400 p-4 font-bold text-[#1a1b1e]"
            >
              <p class="text-4xl">5+</p>
              <p>Years</p>
            </div>
          </div>
        </div>
        <div class="order-1 md:order-2">
          <div
            class="mb-4 inline-block rounded-full bg-gray-800 px-4 py-1 text-sm font-medium text-yellow-400"
          >
            Our Story
          </div>
          <h2 class="mb-6 text-3xl font-bold md:text-4xl">From startup to industry disruptor</h2>
          <p class="mb-6 text-gray-300">
            Founded in 2018, Aurorae began with a simple mission: make hotel booking less boring and
            more rewarding. What started as a small team of travel enthusiasts has grown into a
            platform trusted by over 400,000 travelers worldwide.
          </p>
          <p class="mb-8 text-gray-300">
            We're not just another booking site. We're building the future of travel by combining
            cutting-edge technology with personalized experiences that speak to a new generation of
            explorers.
          </p>
          <button class="group flex items-center font-medium text-yellow-400">
            Learn more about our journey
            <arrow-right-icon class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
