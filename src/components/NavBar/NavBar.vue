<script lang="ts" setup>

import { navigation } from '@/data'
import MobileNav from './MobileNav.vue'
</script>

<template>
  <div class="flex items-center justify-between py-6 gap-x-3">
    <a class="text-primary">Furniture world </a>

    <div class="space-x-2 hidden lg:block">
      <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium">
        {{ item.name }}
      </a>
    </div>
    <button class="btn btn-secondary hidden lg:block">Download</button>

    <MobileNav />
  </div>
</template>
