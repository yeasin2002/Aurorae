<script lang="ts" setup>
import { navigation } from '~/data'
import MobileNav from './MobileNav.vue'
import Logo from '~/components/common/LogoFull.vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="pt-6">
    <nav class="flex items-center justify-between gap-x-3">
      <Logo />
      <div class="hidden space-x-4 lg:block">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="font-aeonik font-medium"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <Button class="hidden rounded-3xl font-aeonik lg:block" variant="secondary"
        >Get Started</Button
      >
      <MobileNav />
    </nav>
    <div class="my-4 h-[0.10rem] w-full bg-gray-400"></div>
  </div>
</template>
