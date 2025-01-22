<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { navigation } from '~/data'
import { AlignJustify } from 'lucide-vue-next'
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet'
</script>

<template>
  <div class="lg:hidden">
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
        <span class="sr-only">Menu</span>
      </SheetTrigger>
      <SheetContent class="text-white">
        <div class="flex flex-col gap-y-1 font-aeonik text-xl">
          <NuxtLink v-for="menu in navigation" :key="menu.name" :href="menu.href">
            {{ menu.name }}
          </NuxtLink>
        </div>

        <Button class="mt-4 rounded-3xl font-aeonik" variant="secondary">Get Started</Button>
      </SheetContent>
    </Sheet>
  </div>
</template>
