<template>
  <div class="col-span-full rounded-xl bg-white shadow-sm dark:bg-gray-800 xl:col-span-6">
    <header class="border-b border-gray-100 px-5 py-4 dark:border-gray-700/60">
      <h2 class="font-semibold text-gray-800 dark:text-gray-100">Customers</h2>
    </header>
    <div class="p-3">
      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="w-full table-auto">
          <!-- Table header -->
          <thead
            class="bg-gray-50 text-xs font-semibold uppercase dark:bg-gray-700 dark:bg-opacity-50 dark:text-gray-500"
          >
            <tr>
              <th class="whitespace-nowrap p-2">
                <div class="text-left font-semibold">Name</div>
              </th>
              <th class="whitespace-nowrap p-2">
                <div class="text-left font-semibold">Email</div>
              </th>
              <th class="whitespace-nowrap p-2">
                <div class="text-left font-semibold">Spent</div>
              </th>
              <th class="whitespace-nowrap p-2">
                <div class="text-center font-semibold">Country</div>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody class="divide-y divide-gray-100 text-sm dark:divide-gray-700/60">
            <tr v-for="customer in customers" :key="customer.id">
              <td class="whitespace-nowrap p-2">
                <div class="flex items-center">
                  <div class="mr-2 h-10 w-10 shrink-0 sm:mr-3">
                    <img
                      class="rounded-full"
                      :src="customer.image"
                      width="40"
                      height="40"
                      :alt="customer.name"
                    />
                  </div>
                  <div class="font-medium text-gray-800 dark:text-gray-100">
                    {{ customer.name }}
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap p-2">
                <div class="text-left">{{ customer.email }}</div>
              </td>
              <td class="whitespace-nowrap p-2">
                <div class="text-left font-medium text-green-500">{{ customer.spent }}</div>
              </td>
              <td class="whitespace-nowrap p-2">
                <div class="text-center text-lg">{{ customer.location }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import Image01 from '@/assets/images/user-36-05.jpg'
import Image02 from '@/assets/images/user-36-06.jpg'
import Image03 from '@/assets/images/user-36-07.jpg'
import Image04 from '@/assets/images/user-36-08.jpg'
import Image05 from '@/assets/images/user-36-09.jpg'

export default {
  name: 'DashboardCard10',
  setup() {
    const customers = ref([
      {
        id: '0',
        image: Image01,
        name: 'Alex Shatov',
        email: 'alexshatov@gmail.com',
        location: '🇺🇸',
        spent: '$2,890.66',
      },
      {
        id: '1',
        image: Image02,
        name: 'Philip Harbach',
        email: 'philip.h@gmail.com',
        location: '🇩🇪',
        spent: '$2,767.04',
      },
      {
        id: '2',
        image: Image03,
        name: 'Mirko Fisuk',
        email: 'mirkofisuk@gmail.com',
        location: '🇫🇷',
        spent: '$2,996.00',
      },
      {
        id: '3',
        image: Image04,
        name: 'Olga Semklo',
        email: 'olga.s@cool.design',
        location: '🇮🇹',
        spent: '$1,220.66',
      },
      {
        id: '4',
        image: Image05,
        name: 'Burak Long',
        email: 'longburak@gmail.com',
        location: '🇬🇧',
        spent: '$1,890.66',
      },
    ])

    return {
      customers,
    }
  },
}
</script>
