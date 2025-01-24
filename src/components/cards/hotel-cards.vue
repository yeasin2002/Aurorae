<template>
  <div class="group overflow-hidden rounded-lg bg-white/5">
    <div class="relative h-64">
      <NuxtLink to="/hotels/1">
        <img
          src="https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="The Fairmont Orchid, Hawaii"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </NuxtLink>
    </div>
    <div class="p-6">
      <div class="mb-2 flex items-start justify-between">
        <NuxtLink to="/hotels/1" class="text-2xl font-bold"> The Fairmont Orchid, Hawaii </NuxtLink>
        <div class="flex items-center gap-1 rounded bg-white/10 px-2 py-1">
          <Icon name="mingcute:star-fill" />
          <span>4.9</span>
        </div>
      </div>
      <p class="mb-4 text-gray-400">Luxurious resort with ocean views</p>
      <div class="mb-4 flex flex-wrap gap-2">
        <span class="rounded bg-white/10 px-2 py-1 text-xs">Pool</span>
        <span class="rounded bg-white/10 px-2 py-1 text-xs">Spa</span>
        <span class="rounded bg-white/10 px-2 py-1 text-xs">Restaurant</span>
        <span class="rounded bg-white/10 px-2 py-1 text-xs">Gym</span>
        <span class="rounded bg-white/10 px-2 py-1 text-xs">Room Service</span>
      </div>
      <div class="flex items-center justify-between">
        <div>
          <span class="text-2xl font-bold text-[#FFD700]">$429</span>
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
</template>
