<template>
  <div class="min-h-screen  ">
    <!-- Top Navigation -->
    <nav class="border-b border-gray-800">
      <div class="px-4 mx-auto">
        <div class="flex items-center h-16 space-x-8">
          <div class="flex items-center space-x-6">
            <span class="text-gray-400">Mail</span>
            <span class="text-white font-medium">Dashboard</span>
            <span class="text-gray-400">Cards</span>
            <span class="text-gray-400">Tasks</span>
            <span class="text-gray-400">Playground</span>
            <span class="text-gray-400">Forms</span>
            <span class="text-gray-400">Music</span>
            <span class="text-gray-400">Authentication</span>
          </div>
          <div class="ml-auto">
            <a href="#" class="text-gray-400 hover:text-gray-200">View code →</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Secondary Navigation -->
    <div class="border-b border-gray-800">
      <div class="px-4 py-4 mx-auto">
        <div class="flex items-center">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
              AK
            </div>
            <span class="font-medium text-white">Alicia Koch</span>
          </div>
          <div class="ml-8 flex space-x-6">
            <span class="text-white">Overview</span>
            <span class="text-gray-400">Customers</span>
            <span class="text-gray-400">Products</span>
            <span class="text-gray-400">Settings</span>
          </div>
          <div class="ml-auto flex items-center space-x-4">
            <input 
              type="text" 
              placeholder="Search..." 
              class="px-4 py-2 rounded-lg w-64 bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-gray-600"
            >
            <div class="w-8 h-8 rounded-full bg-gray-800 border border-gray-700"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dashboard Content -->
    <main class="px-4 py-8">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-2xl font-bold text-white">Dashboard</h1>
        <div class="flex items-center space-x-4">
          <span class="text-gray-400">Jan 20, 2023 - Feb 9, 2023</span>
          <button class="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
            Download
          </button>
        </div>
      </div>

      <!-- Metric Cards -->
      <div class="grid grid-cols-4 gap-6 mb-8">
        <div class="p-6 bg-gray-800 rounded-xl border border-gray-700">
          <div class="text-sm text-gray-400 mb-2">Total Revenue</div>
          <div class="text-2xl font-bold text-white">$45,231.89</div>
          <div class="text-sm text-gray-400">+20.1% from last month</div>
        </div>
        <div class="p-6 bg-gray-800 rounded-xl border border-gray-700">
          <div class="text-sm text-gray-400 mb-2">Subscriptions</div>
          <div class="text-2xl font-bold text-white">+2350</div>
          <div class="text-sm text-gray-400">+180.1% from last month</div>
        </div>
        <div class="p-6 bg-gray-800 rounded-xl border border-gray-700">
          <div class="text-sm text-gray-400 mb-2">Sales</div>
          <div class="text-2xl font-bold text-white">+12,234</div>
          <div class="text-sm text-gray-400">+19% from last month</div>
        </div>
        <div class="p-6 bg-gray-800 rounded-xl border border-gray-700">
          <div class="text-sm text-gray-400 mb-2">Active Now</div>
          <div class="text-2xl font-bold text-white">+573</div>
          <div class="text-sm text-gray-400">+201 since last hour</div>
        </div>
      </div>

      <!-- Chart and Recent Sales -->
      <div class="grid grid-cols-3 gap-6">
        <div class="col-span-2 p-6 bg-gray-800 rounded-xl border border-gray-700">
          <div class="h-[300px] bg-gray-900/50 rounded-lg"></div>
        </div>
        <div class="p-6 bg-gray-800 rounded-xl border border-gray-700">
          <h3 class="font-medium text-white mb-4">Recent Sales</h3>
          <div class="text-sm text-gray-400 mb-4">You made 265 sales this month.</div>
          
          <div class="space-y-4">
            <div v-for="(sale, index) in 5" :key="index" class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full bg-gray-700"></div>
                <div>
                  <div class="font-medium text-white">User Name</div>
                  <div class="text-sm text-gray-400">user@email.com</div>
                </div>
              </div>
              <div class="font-medium text-white">+$99.00</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// No functionality needed as per requirements
</script>