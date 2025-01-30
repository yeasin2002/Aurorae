<script setup>
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

</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <main class="grow">
        <div class="max-w-9xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
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
