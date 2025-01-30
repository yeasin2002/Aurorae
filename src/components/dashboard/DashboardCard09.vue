<template>
  <div
    class="col-span-full flex flex-col rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6"
  >
    <header class="flex items-center border-b border-gray-100 px-5 py-4 dark:border-gray-700/60">
      <h2 class="font-semibold text-gray-800 dark:text-gray-100">Sales VS Refunds</h2>
      <Tooltip class="ml-2" size="lg">
        <div class="text-sm">
          Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
        </div>
      </Tooltip>
    </header>
    <div class="px-5 py-3">
      <div class="flex items-start">
        <div class="mr-2 text-3xl font-bold text-gray-800 dark:text-gray-100">+$6,796</div>
        <div class="rounded-full bg-red-500/20 px-1.5 text-sm font-medium text-red-700">-34%</div>
      </div>
    </div>
    <!-- Chart built with Chart.js 3 -->
    <div class="grow">
      <!-- Change the height attribute to adjust the chart height -->
      <BarChart :data="chartData" width="595" height="248" />
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/charts/BarChart02.vue';
import Tooltip from '@/components/dashboard/components/Tooltip.vue';
import { ref } from 'vue';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

export default {
  name: 'DashboardCard09',
  components: {
    Tooltip,
    BarChart,
  },
  setup() {
    const chartData = ref({
      labels: ['12-01-2022', '01-01-2023', '02-01-2023', '03-01-2023', '04-01-2023', '05-01-2023'],
      datasets: [
        // Light blue bars
        {
          label: 'Stack 1',
          data: [6200, 9200, 6600, 8800, 5200, 9200],
          backgroundColor: tailwindConfig().theme.colors.violet[500],
          hoverBackgroundColor: tailwindConfig().theme.colors.violet[600],
          barPercentage: 0.7,
          categoryPercentage: 0.7,
          borderRadius: 4,
        },
        // Blue bars
        {
          label: 'Stack 2',
          data: [-4000, -2600, -5350, -4000, -7500, -2000],
          backgroundColor: tailwindConfig().theme.colors.violet[200],
          hoverBackgroundColor: tailwindConfig().theme.colors.violet[300],
          barPercentage: 0.7,
          categoryPercentage: 0.7,
          borderRadius: 4,
        },
      ],
    })

    return {
      chartData,
    }
  },
}
</script>
