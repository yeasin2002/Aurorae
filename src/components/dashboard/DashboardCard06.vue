<template>
  <div
    class="col-span-full flex flex-col rounded-xl bg-white shadow-sm dark:bg-gray-800 sm:col-span-6 xl:col-span-4"
  >
    <header class="border-b border-gray-100 px-5 py-4 dark:border-gray-700/60">
      <h2 class="font-semibold text-gray-800 dark:text-gray-100">Top Countries</h2>
    </header>
    <!-- Chart built with Chart.js 3 -->
    <!-- Change the height attribute to adjust the chart height -->
    <DoughnutChart :data="chartData" width="389" height="260" />
  </div>
</template>

<script>
import DoughnutChart from '@/components/charts/DoughnutChart.vue';
import { ref } from 'vue';

// Import utilities
import { tailwindConfig } from '@/utils/Utils';

export default {
  name: 'DashboardCard06',
  components: {
    DoughnutChart,
  },
  setup() {
    const chartData = ref({
      labels: ['United States', 'Italy', 'Other'],
      datasets: [
        {
          label: 'Top Countries',
          data: [35, 30, 35],
          backgroundColor: [
            tailwindConfig().theme.colors.violet[500],
            tailwindConfig().theme.colors.sky[500],
            tailwindConfig().theme.colors.violet[800],
          ],
          hoverBackgroundColor: [
            tailwindConfig().theme.colors.violet[600],
            tailwindConfig().theme.colors.sky[600],
            tailwindConfig().theme.colors.violet[900],
          ],
          borderWidth: 0,
        },
      ],
    })

    return {
      chartData,
    }
  },
}
</script>
