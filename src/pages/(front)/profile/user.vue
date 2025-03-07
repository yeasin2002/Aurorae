<template>
  <div class="min-h-screen bg-background">
    <!-- Main Content -->
    <div class="mx-auto max-w-6xl px-6 py-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- User Info Card -->
        <div class="rounded-lg bg-background p-6 shadow-sm">
          <div class="flex flex-col items-center">
            <div class="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400">
              <span class="text-3xl font-bold">JP</span>
            </div>
            <h2 class="text-xl font-medium">James Peterson</h2>
            <p class="text-neutral-600">Member since January 2023</p>
            <button class="mt-4 text-sm font-medium underline">Edit Profile</button>
          </div>
          <hr class="my-6" />
          <div class="space-y-3">
            <div class="flex justify-between">
              <span class="text-neutral-600">Email</span>
              <span class="font-medium">james.peterson@example.com</span>
            </div>
            <div class="flex justify-between">
              <span class="text-neutral-600">Phone</span>
              <span class="font-medium">+1 (555) 123-4567</span>
            </div>
            <div class="flex justify-between">
              <span class="text-neutral-600">Location</span>
              <span class="font-medium">New York, USA</span>
            </div>
          </div>
        </div>

        <!-- Dashboard Content -->
        <div class="space-y-8 lg:col-span-2">
          <!-- Account Summary -->
          <div class="rounded-lg bg-background p-6 shadow-sm">
            <h3 class="mb-4 text-xl font-medium">Account Summary</h3>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div class="rounded-lg bg-neutral-100 p-4">
                <div class="text-sm text-neutral-600">Total Bookings</div>
                <div class="mt-2 font-clash-display text-3xl font-bold">7</div>
              </div>
              <div class="rounded-lg bg-neutral-100 p-4">
                <div class="text-sm text-neutral-600">Reward Points</div>
                <div class="mt-2 font-clash-display text-3xl font-bold">2,450</div>
              </div>
              <div class="rounded-lg bg-neutral-100 p-4">
                <div class="text-sm text-neutral-600">Membership Level</div>
                <div class="mt-2 font-clash-display text-3xl font-bold">Gold</div>
              </div>
            </div>
          </div>

          <!-- Upcoming Trips -->
          <div class="rounded-lg bg-background p-6 shadow-sm">
            <div class="mb-4 flex items-center justify-between">
              <h3 class="text-xl font-medium">Upcoming Trips</h3>
              <a href="#" class="text-sm text-black underline">View All</a>
            </div>
            <div class="space-y-4">
              <div class="flex flex-col gap-4 rounded-lg border p-4 md:flex-row">
                <div class="h-24 w-full flex-shrink-0 rounded-lg bg-neutral-200 md:w-24">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Hotel"
                    class="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div class="flex-grow">
                  <div class="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 class="font-medium">Luxury Resort & Spa</h4>
                      <p class="text-sm text-neutral-600">Bali, Indonesia</p>
                    </div>
                    <div class="mt-2 md:mt-0 md:text-right">
                      <div class="text-sm font-medium">March 15 - March 22, 2025</div>
                      <div class="text-sm text-neutral-600">7 nights • 2 adults</div>
                    </div>
                  </div>
                  <div class="mt-3 flex items-center justify-between">
                    <span class="inline-block rounded bg-green-100 px-2 py-1 text-xs text-green-800"
                      >Confirmed</span
                    >
                    <button class="text-sm font-medium">Manage Booking</button>
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-4 rounded-lg border p-4 md:flex-row">
                <div class="h-24 w-full flex-shrink-0 rounded-lg bg-neutral-200 md:w-24">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Hotel"
                    class="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div class="flex-grow">
                  <div class="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 class="font-medium">Urban Boutique Hotel</h4>
                      <p class="text-sm text-neutral-600">New York, USA</p>
                    </div>
                    <div class="mt-2 md:mt-0 md:text-right">
                      <div class="text-sm font-medium">April 5 - April 8, 2025</div>
                      <div class="text-sm text-neutral-600">3 nights • 1 adult</div>
                    </div>
                  </div>
                  <div class="mt-3 flex items-center justify-between">
                    <span class="inline-block rounded bg-green-100 px-2 py-1 text-xs text-green-800"
                      >Confirmed</span
                    >
                    <button class="text-sm font-medium">Manage Booking</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Recently Viewed -->
          <div class="rounded-lg bg-background p-6 shadow-sm">
            <div class="mb-4 flex items-center justify-between">
              <h3 class="text-xl font-medium">Recently Viewed</h3>
              <a href="#" class="text-sm text-black underline">View All</a>
            </div>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div class="overflow-hidden rounded-lg border">
                <div class="h-32 bg-neutral-200">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Hotel"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="p-4">
                  <h4 class="font-medium">Mountain View Lodge</h4>
                  <p class="text-sm text-neutral-600">Switzerland</p>
                  <div class="mt-2 flex items-center justify-between">
                    <div class="text-sm font-bold">$350 / night</div>
                    <button class="rounded-full bg-yellow-400 px-3 py-1 text-sm font-medium">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              <div class="overflow-hidden rounded-lg border">
                <div class="h-32 bg-neutral-200">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Hotel"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="p-4">
                  <h4 class="font-medium">Seaside Retreat</h4>
                  <p class="text-sm text-neutral-600">Greece</p>
                  <div class="mt-2 flex items-center justify-between">
                    <div class="text-sm font-bold">$280 / night</div>
                    <button class="rounded-full bg-yellow-400 px-3 py-1 text-sm font-medium">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-12 bg-black px-6 py-12 text-white">
      <div class="mx-auto max-w-6xl">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div class="mb-4 flex items-center">
              <img src="/brand/android-chrome-192x192.png" alt="Auroras" class="h-6" />
            </div>
            <p class="mb-4 text-sm text-neutral-400">Let's Work Together</p>
            <div class="flex space-x-4">
              <a href="#" class="text-white hover:text-yellow-400">
                <span class="sr-only">Facebook</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  />
                </svg>
              </a>
              <a href="#" class="text-white hover:text-yellow-400">
                <span class="sr-only">Instagram</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  />
                </svg>
              </a>
              <a href="#" class="text-white hover:text-yellow-400">
                <span class="sr-only">Twitter</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-medium">Address</h3>
            <p class="text-sm text-neutral-400">900 and 2, Techville, United State</p>
            <p class="mt-2 text-sm text-neutral-400">
              +0123 5234567<br />
              +0123 5234567<br />
              armordesign@gmail.com
            </p>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-medium">Our Policies</h3>
            <ul class="space-y-2 text-sm text-neutral-400">
              <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-white">Terms of Use</a></li>
              <li><a href="#" class="hover:text-white">Refund Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
