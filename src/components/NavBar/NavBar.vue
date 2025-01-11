<script lang="ts" setup>
import Logo from '@/assets/illustration/logo.svg?component'
import { navigation } from '@/data'
import MobileNav from './MobileNav.vue'
</script>

<template>
  <div class="flex items-center justify-between py-6">
    <div class="flex items-center justify-between gap-x-8">
      <div class="flex items-center"><Logo />&trade;</div>

      <div class="space-x-2 hidden lg:block">
        <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium">
          {{ item.name }}
        </a>
      </div>
    </div>
    <button class="btn btn-secondary hidden lg:block">Download</button>

    <MobileNav />
  </div>
</template>
