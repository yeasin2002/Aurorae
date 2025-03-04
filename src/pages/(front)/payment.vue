<template>
  <div class="mx-auto max-w-7xl px-6 py-8">
    <!-- Back Button -->
    <div class="mb-8">
      <a href="./details.html" class="text-zinc-800 hover:underline">
        <i class="fas fa-chevron-left mr-2"></i>
        Request to book
      </a>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
      <!-- Left Column -->
      <div>
        <section class="mb-8">
          <h2 class="mb-4 text-xl font-semibold">Your trip</h2>

          <!-- Dates -->
          <div class="mb-4 flex items-center justify-between">
            <div>
              <h3 class="font-medium">Dates</h3>
              <p class="text-sm text-zinc-600">Jan 3 - 8, 2025</p>
            </div>
            <button class="text-sm text-zinc-800 underline">Edit</button>
          </div>

          <!-- Guests -->
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-medium">Guests</h3>
              <p class="text-sm text-zinc-600">1 guest</p>
            </div>
            <button class="text-sm text-zinc-800 underline">Edit</button>
          </div>
        </section>

        <!-- Payment Section -->
        <section class="mb-8">
          <h2 class="mb-4 text-xl font-semibold">Pay with American Express</h2>
          <div class="space-y-4">
            <input type="text" placeholder="Card number" class="w-full rounded-lg border p-3" />

            <div class="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Expiration" class="rounded-lg border p-3" />
              <input type="text" placeholder="CVV" class="rounded-lg border p-3" />
            </div>
          </div>
        </section>

        <!-- Billing Address -->
        <section class="mb-8">
          <h2 class="mb-4 text-xl font-semibold">Billing address</h2>
          <div class="space-y-4">
            <input type="text" placeholder="Street address" class="w-full rounded-lg border p-3" />
            <input
              type="text"
              placeholder="Apt or suite number"
              class="w-full rounded-lg border p-3"
            />
            <input type="text" placeholder="City" class="w-full rounded-lg border p-3" />
            <div class="grid grid-cols-2 gap-4">
              <input type="text" placeholder="State" class="rounded-lg border p-3" />
              <input type="text" placeholder="ZIP code" class="rounded-lg border p-3" />
            </div>
          </div>
        </section>

        <!-- Book Button -->
        <a
          href="./success.html"
          class="mt-6 block w-full rounded-lg bg-primary py-3 text-center text-white hover:brightness-90"
        >
          Request to book
        </a>
      </div>

      <!-- Right Column -->
      <div>
        <!-- Price Details Card -->
        <div class="sticky top-0 mb-8 rounded-lg bg-white p-6 shadow-sm">
          <div class="mb-6 flex items-start gap-4">
            <img
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Property"
              class="!size-20 rounded-lg object-cover"
              style="width: 4.5rem"
            />
            <div>
              <p class="text-sm text-black">
                One room and one living room with a straight sea view, 1.8m queen...
              </p>
              <div class="flex items-center">
                <i class="fas fa-star mr-1 text-sm"></i>
                <span class="mt-1 text-xs text-zinc-500">5.00 (3 Reviews)</span>
              </div>
            </div>
          </div>

          <div class="border-t pt-4 text-black">
            <h3 class="mb-4 font-semibold">Price details</h3>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span>$59.08 x 5 nights</span>
                <span>$295.39</span>
              </div>
              <div class="flex justify-between">
                <span>Cleaning fee</span>
                <span>$17.50</span>
              </div>
              <div class="flex justify-between">
                <span>Service fee</span>
                <span>$51.31</span>
              </div>
              <div class="flex justify-between border-t pt-3 font-semibold">
                <span>Total (USD)</span>
                <span>$364.20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
