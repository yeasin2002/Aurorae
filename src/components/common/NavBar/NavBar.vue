<script lang="ts" setup>
import Logo from "~/components/common/LogoFull.vue";
import { navigation } from "~/data";
import MobileNav from "./MobileNav.vue";
</script>

<template>
  <div class="pt-6">
    <nav class="flex items-center justify-between gap-x-3">
      <Logo />
      <div class="hidden space-x-4 lg:block">
        <NuxtLink
          v-for="item in navigation.slice(1)"
          :key="item.name"
          :to="item.href"
          class="font-aeonik font-medium"
        >
          {{ item.name }}
        </NuxtLink>
      </div>

      <NuxtLink
        to="/login"
        class="w-fit rounded-2xl bg-gray-50 px-6 py-2 font-aeonik font-bold text-gray-900 transition duration-300 hover:bg-gray-100 text-sm"
      >
        Login
      </NuxtLink>

      <MobileNav />
    </nav>
    <div class="my-4 h-[0.10rem] w-full bg-gray-400"></div>
  </div>
</template>
