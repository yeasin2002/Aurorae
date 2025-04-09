<template>
  <div class="flex h-screen bg-[#1e1e38]">
    <!-- Sidebar -->
    <div class="w-60 border-r border-[#2d2d50] bg-[#1e1e38] text-white">
      <div class="flex items-center gap-2 p-4">
        <div class="text-2xl text-purple-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-triangle"
          >
            <path
              d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            />
          </svg>
        </div>
        <h1 class="text-xl font-semibold">Vuexy</h1>
        <div class="ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-clock"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
      </div>

      <div class="mt-4">
        <div class="flex cursor-pointer items-center px-4 py-2 text-gray-300 hover:bg-[#2d2d50]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-layout-dashboard"
          >
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
          </svg>
          <span class="ml-3">Dashboards</span>
          <div class="ml-auto flex items-center">
            <span
              class="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"
              >5</span
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down ml-1"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>

        <div class="flex cursor-pointer items-center bg-purple-600 px-4 py-2 text-white">
          <div class="flex w-5 justify-center">○</div>
          <span class="ml-3">Analytics</span>
        </div>

        <div class="flex cursor-pointer items-center px-4 py-2 text-gray-300 hover:bg-[#2d2d50]">
          <div class="flex w-5 justify-center">○</div>
          <span class="ml-3">CRM</span>
        </div>

        <div class="flex cursor-pointer items-center px-4 py-2 text-gray-300 hover:bg-[#2d2d50]">
          <div class="flex w-5 justify-center">○</div>
          <span class="ml-3">eCommerce</span>
        </div>

        <div class="flex cursor-pointer items-center px-4 py-2 text-gray-300 hover:bg-[#2d2d50]">
          <div class="flex w-5 justify-center">○</div>
          <span class="ml-3">Logistics</span>
        </div>

        <div class="flex cursor-pointer items-center px-4 py-2 text-gray-300 hover:bg-[#2d2d50]">
          <div class="flex w-5 justify-center">○</div>
          <span class="ml-3">Academy</span>
        </div>

        <div class="flex cursor-pointer items-center px-4 py-2 text-gray-300 hover:bg-[#2d2d50]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-layout"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <line x1="3" x2="21" y1="9" y2="9" />
            <line x1="9" x2="9" y1="21" y2="9" />
          </svg>
          <span class="ml-3">Layouts</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-right ml-auto"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>

        <div class="flex cursor-pointer items-center px-4 py-2 text-gray-300 hover:bg-[#2d2d50]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-file"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          <span class="ml-3">Front Pages</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-right ml-auto"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>

        <div class="px-4 py-3 text-xs font-semibold text-gray-400">APPS & PAGES</div>

        <div class="flex cursor-pointer items-center px-4 py-2 text-gray-300 hover:bg-[#2d2d50]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mail"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span class="ml-3">Email</span>
        </div>

        <div class="flex cursor-pointer items-center px-4 py-2 text-gray-300 hover:bg-[#2d2d50]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-message-square"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span class="ml-3">Chat</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 overflow-auto">
      <!-- Header -->
      <div class="flex items-center border-b border-[#2d2d50] bg-[#1e1e38] p-4">
        <div class="relative w-64">
          <input
            type="text"
            placeholder="Search [CTRL + K]"
            class="w-full rounded-md bg-[#2d2d50] py-2 pl-10 pr-4 text-white focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search absolute left-3 top-2.5 text-gray-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>

        <div class="ml-auto flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-languages text-gray-400"
          >
            <path d="m5 8 6 6" />
            <path d="m4 14 6-6 2-3" />
            <path d="M2 5h12" />
            <path d="M7 2h1" />
            <path d="m22 22-5-10-5 10" />
            <path d="M14 18h6" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-moon text-gray-400"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-layout-grid text-gray-400"
          >
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
          </svg>

          <div class="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-bell text-gray-400"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <div class="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500"></div>
          </div>

          <div
            class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          >
            <span class="text-sm text-white">JD</span>
          </div>
        </div>
      </div>

      <!-- Dashboard Content -->
      <div class="grid grid-cols-12 gap-6 p-6">
        <!-- Website Analytics Card -->
        <div
          class="relative col-span-12 overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 p-6 text-white md:col-span-8 lg:col-span-6"
        >
          <div class="flex items-start justify-between">
            <div>
              <h2 class="text-xl font-semibold">Website Analytics</h2>
              <p class="text-sm opacity-90">Total 28.5% Conversion Rate</p>
            </div>
            <div class="flex gap-1">
              <div class="h-2 w-2 rounded-full bg-white"></div>
              <div class="h-2 w-2 rounded-full bg-white/50"></div>
              <div class="h-2 w-2 rounded-full bg-white/50"></div>
            </div>
          </div>

          <div class="mt-8 grid grid-cols-2 gap-4">
            <div>
              <h3 class="text-lg font-semibold">Traffic</h3>
              <div class="mt-4 grid grid-cols-2 gap-4">
                <div class="rounded-md bg-purple-700/30 p-3">
                  <div class="text-xl font-bold">28%</div>
                  <div class="text-sm opacity-80">Sessions</div>
                </div>
                <div class="rounded-md bg-purple-700/30 p-3">
                  <div class="text-xl font-bold">3.1k</div>
                  <div class="text-sm opacity-80">Page Views</div>
                </div>
                <div class="rounded-md bg-purple-700/30 p-3">
                  <div class="text-xl font-bold">1.2k</div>
                  <div class="text-sm opacity-80">Leads</div>
                </div>
                <div class="rounded-md bg-purple-700/30 p-3">
                  <div class="text-xl font-bold">12%</div>
                  <div class="text-sm opacity-80">Conversions</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Decorative graphic -->
          <div class="absolute bottom-0 right-0 h-40 w-40 opacity-80">
            <div
              class="h-full w-full rotate-45 transform rounded-full bg-gradient-to-r from-teal-400 to-purple-400 blur-sm"
            ></div>
          </div>
        </div>

        <!-- Average Daily Sales Card -->
        <div class="col-span-12 rounded-lg bg-[#252547] p-6 text-white md:col-span-4 lg:col-span-3">
          <h2 class="text-lg font-semibold">Average Daily Sales</h2>
          <p class="text-xs text-gray-400">Total Sales This Month</p>

          <div class="mt-4">
            <h3 class="text-2xl font-bold">$28,450</h3>
          </div>

          <div class="relative mt-6 h-24">
            <!-- Chart placeholder -->
            <div class="absolute inset-0">
              <svg viewBox="0 0 100 30" class="h-full w-full">
                <path
                  d="M0,15 Q10,5 20,10 T40,5 T60,15 T80,10 T100,20"
                  fill="none"
                  stroke="#22c55e"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <!-- Sales Overview Card -->
        <div class="col-span-12 rounded-lg bg-[#252547] p-6 text-white md:col-span-4 lg:col-span-3">
          <div class="flex items-start justify-between">
            <h2 class="text-lg font-semibold">Sales Overview</h2>
            <div class="text-sm font-medium text-green-400">+18.2%</div>
          </div>

          <div class="mt-4">
            <h3 class="text-2xl font-bold">$42.5k</h3>
          </div>

          <div class="mt-6 flex items-center justify-between">
            <div>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-shopping-cart text-teal-400"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path
                    d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
                  />
                </svg>
                <span>Order</span>
              </div>
              <div class="mt-2 text-xl font-semibold">62.2%</div>
              <div class="text-xs text-gray-400">6,440</div>
            </div>

            <div class="text-gray-400">vs</div>

            <div>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-eye text-purple-400"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span>Visits</span>
              </div>
              <div class="mt-2 text-xl font-semibold">25.5%</div>
              <div class="text-xs text-gray-400">12,749</div>
            </div>
          </div>

          <div class="mt-4 h-2 overflow-hidden rounded-full bg-gray-700">
            <div
              class="h-full w-3/5 rounded-full bg-gradient-to-r from-teal-400 to-purple-400"
            ></div>
          </div>
        </div>

        <!-- Earning Reports Card -->
        <div class="col-span-12 rounded-lg bg-[#252547] p-6 text-white md:col-span-6">
          <div class="flex items-start justify-between">
            <div>
              <h2 class="text-lg font-semibold">Earning Reports</h2>
              <p class="text-xs text-gray-400">Weekly Earnings Overview</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-more-vertical text-gray-400"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </div>

          <div class="mt-6 flex items-start gap-2">
            <div class="text-3xl font-bold">$468</div>
            <div class="text-sm font-medium text-green-400">+4.2%</div>
          </div>

          <p class="mt-2 text-xs text-gray-400">You informed of this week compared to last week.</p>

          <div class="relative mt-6 h-32">
            <!-- Bar chart placeholder -->
            <div class="absolute inset-0 flex items-end justify-between">
              <div class="h-[30%] w-[8%] rounded-t-md bg-purple-800"></div>
              <div class="h-[50%] w-[8%] rounded-t-md bg-purple-800"></div>
              <div class="h-[40%] w-[8%] rounded-t-md bg-purple-800"></div>
              <div class="h-[30%] w-[8%] rounded-t-md bg-purple-800"></div>
              <div class="h-[70%] w-[8%] rounded-t-md bg-purple-500"></div>
              <div class="h-[35%] w-[8%] rounded-t-md bg-purple-800"></div>
              <div class="h-[45%] w-[8%] rounded-t-md bg-purple-800"></div>
            </div>
          </div>

          <div class="mt-2 flex justify-between text-xs text-gray-400">
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
            <div>Su</div>
          </div>

          <div class="mt-6 grid grid-cols-3 gap-4">
            <div class="rounded-md bg-[#2d2d50] p-3">
              <div class="flex items-center gap-2">
                <div
                  class="flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 text-purple-800"
                >
                  $
                </div>
                <span class="text-sm">Earnings</span>
              </div>
              <div class="mt-2 text-xl font-semibold">$545.69</div>
              <div class="mt-1 h-1 w-full rounded-full bg-purple-700"></div>
            </div>

            <div class="rounded-md bg-[#2d2d50] p-3">
              <div class="flex items-center gap-2">
                <div
                  class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-200 text-teal-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-trending-up"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
                <span class="text-sm">Profit</span>
              </div>
              <div class="mt-2 text-xl font-semibold">$256.34</div>
              <div class="mt-1 h-1 w-full rounded-full bg-teal-500"></div>
            </div>

            <div class="rounded-md bg-[#2d2d50] p-3">
              <div class="flex items-center gap-2">
                <div
                  class="flex h-6 w-6 items-center justify-center rounded-full bg-red-200 text-red-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-trending-down"
                  >
                    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                    <polyline points="16 17 22 17 22 11" />
                  </svg>
                </div>
                <span class="text-sm">Expense</span>
              </div>
              <div class="mt-2 text-xl font-semibold">$74.19</div>
              <div class="mt-1 h-1 w-full rounded-full bg-red-500"></div>
            </div>
          </div>
        </div>

        <!-- Support Tracker Card -->
        <div class="col-span-12 rounded-lg bg-[#252547] p-6 text-white md:col-span-6">
          <div class="flex items-start justify-between">
            <div>
              <h2 class="text-lg font-semibold">Support Tracker</h2>
              <p class="text-xs text-gray-400">Last 7 Days</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-more-vertical text-gray-400"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </div>

          <div class="mt-6">
            <div class="text-3xl font-bold">164</div>
            <p class="text-sm text-gray-400">Total Tickets</p>
          </div>

          <div class="mt-6 flex">
            <div class="w-1/2">
              <div class="mb-4 flex items-center gap-3">
                <div
                  class="flex h-8 w-8 items-center justify-center rounded-md bg-purple-700/30 text-purple-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-ticket"
                  >
                    <path
                      d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
                    />
                    <path d="M13 5v2" />
                    <path d="M13 17v2" />
                    <path d="M13 11v2" />
                  </svg>
                </div>
                <div>
                  <div class="text-sm">New Tickets</div>
                  <div class="text-xs text-gray-400">142</div>
                </div>
              </div>

              <div class="mb-4 flex items-center gap-3">
                <div
                  class="flex h-8 w-8 items-center justify-center rounded-md bg-teal-700/30 text-teal-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-folder-open"
                  >
                    <path
                      d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
                    />
                  </svg>
                </div>
                <div>
                  <div class="text-sm">Open Tickets</div>
                  <div class="text-xs text-gray-400">28</div>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div
                  class="flex h-8 w-8 items-center justify-center rounded-md bg-orange-700/30 text-orange-400"
                >
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="    class="lucide lucide-clock text-orange-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> -->
                </div>
                <div>
                  <div class="text-sm">Response Time</div>
                  <div class="text-xs text-gray-400">1 Day</div>
                </div>
              </div>
            </div>

            <div class="flex w-1/2 items-center justify-center">
              <!-- Circular progress chart -->
              <div class="relative h-36 w-36">
                <svg viewBox="0 0 100 100" class="h-full w-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#3b3b60" stroke-width="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#8b5cf6"
                    stroke-width="8"
                    stroke-dasharray="283"
                    stroke-dashoffset="42"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                  <div class="text-2xl font-bold">85%</div>
                  <div class="text-xs text-gray-400">Completed Task</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sales by Countries Card -->
        <div class="col-span-12 rounded-lg bg-[#252547] p-6 text-white md:col-span-4">
          <div class="flex items-start justify-between">
            <div>
              <h2 class="text-lg font-semibold">Sales by Countries</h2>
              <p class="text-xs text-gray-400">Monthly Sales Overview</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-more-vertical text-gray-400"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </div>

          <div class="mt-6">
            <div class="flex cursor-pointer items-center gap-3 rounded-md p-3 hover:bg-[#2d2d50]">
              <div class="flex h-8 w-8 items-center justify-center rounded-md bg-blue-100">
                <span class="text-blue-800">🇺🇸</span>
              </div>
              <div class="flex-1">
                <div class="flex justify-between">
                  <div class="text-sm font-medium">$8,567k</div>
                </div>
                <div class="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-gray-700">
                  <div class="h-full w-4/5 rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Total Earning Card -->
        <div class="col-span-12 rounded-lg bg-[#252547] p-6 text-white md:col-span-4">
          <div class="flex items-start justify-between">
            <div>
              <h2 class="text-lg font-semibold">Total Earning</h2>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-more-vertical text-gray-400"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </div>

          <div class="mt-8 flex items-center justify-center">
            <div class="text-center">
              <div class="text-5xl font-bold">87%</div>
              <div class="mt-2 flex items-center justify-center gap-1 text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trending-up"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span>25.8%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Monthly Campaign State Card -->
        <div class="relative col-span-12 rounded-lg bg-[#252547] p-6 text-white md:col-span-4">
          <div class="flex items-start justify-between">
            <div>
              <h2 class="text-lg font-semibold">Monthly Campaign State</h2>
              <p class="text-xs text-gray-400">8.52k Social Visitors</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-more-vertical text-gray-400"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </div>

          <div class="absolute bottom-4 right-4">
            <button
              class="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// This is a static template with dummy data
// No functionality is implemented as per requirements
</script>

<style>
/* Additional styles can be added here if needed */
</style>
