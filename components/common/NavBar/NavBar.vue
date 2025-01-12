<script lang="ts" setup>
import { navigation } from '~/data'
import MobileNav from './MobileNav.vue'
import Logo from '~/components/common/LogoFull.vue'
</script>

<template>
  <div class="pt-6">
    <nav class="flex items-center justify-between gap-x-3">
      <Logo />
      <div class="hidden space-x-4 lg:block">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="font-aeonik font-medium"
        >
          {{ item.name }}
        </a>
      </div>
      <button class="btn btn-secondary hidden font-aeonik lg:block">Get Started</button>
      <MobileNav />
    </nav>
    <div class="my-4 h-[0.10rem] w-full bg-gray-400"></div>
  </div>
</template>
