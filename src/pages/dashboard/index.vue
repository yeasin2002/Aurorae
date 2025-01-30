<script setup>
import { ref } from 'vue'
import Datepicker from '../../components/dashboard/components/Datepicker.vue'
import FilterButton from '../../components/dashboard/components/DropdownFilter.vue'
import DashboardCard01 from '../../components/dashboard/DashboardCard01.vue'
import DashboardCard02 from '../../components/dashboard/DashboardCard02.vue'
import DashboardCard03 from '../../components/dashboard/DashboardCard03.vue'
import DashboardCard04 from '../../components/dashboard/DashboardCard04.vue'
import DashboardCard05 from '../../components/dashboard/DashboardCard05.vue'
import DashboardCard06 from '../../components/dashboard/DashboardCard06.vue'
import DashboardCard07 from '../../components/dashboard/DashboardCard07.vue'
import DashboardCard08 from '../../components/dashboard/DashboardCard08.vue'
import DashboardCard09 from '../../components/dashboard/DashboardCard09.vue'
import DashboardCard10 from '../../components/dashboard/DashboardCard10.vue'
import DashboardCard11 from '../../components/dashboard/DashboardCard11.vue'
import DashboardCard12 from '../../components/dashboard/DashboardCard12.vue'
import DashboardCard13 from '../../components/dashboard/DashboardCard13.vue'
import Banner from '../../components/dashboard/partials/Banner.vue'
import Header from '../../components/dashboard/partials/Header.vue'
import Sidebar from '../../components/dashboard/partials/Sidebar.vue'


  const sidebarOpen = ref(false)
  
  
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="grow">
        <div class="max-w-9xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
          <!-- Dashboard actions -->
          <div class="mb-8 sm:flex sm:items-center sm:justify-between">
            <!-- Left: Title -->
            <div class="mb-4 sm:mb-0">
              <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">
                Dashboard
              </h1>
            </div>

            <!-- Right: Actions -->
            <div class="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
              <!-- Filter button -->
              <FilterButton align="right" />
              <!-- Datepicker built with flatpickr -->
              <Datepicker align="right" />
              <!-- Add view button -->
              <button
                class="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
              >
                <svg
                  class="xs:hidden shrink-0 fill-current"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
                  />
                </svg>
                <span class="max-xs:sr-only">Add View</span>
              </button>
            </div>
          </div>

          <!-- Cards -->
          <div class="grid grid-cols-12 gap-6">
            <!-- Line chart (Acme Plus) -->
            <DashboardCard01 />
            <!-- Line chart (Acme Advanced) -->
            <DashboardCard02 />
            <!-- Line chart (Acme Professional) -->
            <DashboardCard03 />
            <!-- Bar chart (Direct vs Indirect) -->
            <DashboardCard04 />
            <!-- Line chart (Real Time Value) -->
            <DashboardCard05 />
            <!-- Doughnut chart (Top Countries) -->
            <DashboardCard06 />
            <!-- Table (Top Channels) -->
            <DashboardCard07 />
            <!-- Line chart (Sales Over Time) -->
            <DashboardCard08 />
            <!-- Stacked bar chart (Sales VS Refunds) -->
            <DashboardCard09 />
            <!-- Card (Customers) -->
            <DashboardCard10 />
            <!-- Card (Reasons for Refunds) -->
            <DashboardCard11 />
            <!-- Card (Recent Activity) -->
            <DashboardCard12 />
            <!-- Card (Income/Expenses) -->
            <DashboardCard13 />
          </div>
        </div>
      </main>

      <Banner />
    </div>
  </div>
</template>
