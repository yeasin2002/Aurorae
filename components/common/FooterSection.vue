<script lang="ts" setup>
import { footerData, footerSocial } from '~/data'
import Logo from '~/components/common/LogoFull.vue'
</script>

<template>
  <footer class="py-10">
    <div class="grid grid-cols-1 gap-y-4 px-2 sm:px-0 xl:grid-cols-2">
      <h3 class="font-clash-display text-6xl">
        <span>Let’s Work</span>
        <br />
        <span class="ml-16 sm:ml-20">Together</span>
      </h3>
      <div class="space-y-4">
        <p class="w-4/5 font-aeonik">
          Interior design is the art of science of enhancing the interior of a building to achieve a
          healthier and more aesthetically pleasing environment for the people using the space.
        </p>
        <button class="btn btn-default px-8 font-aeonik font-bold">Contact Now</button>
      </div>
    </div>

    <!-- bottom contact area -->
    <div class="grid grid-cols-1 gap-y-4 pb-6 pt-16 md:gap-y-8 lg:grid-cols-12 xl:gap-y-0">
      <div class="col-span-2">
        <Logo />
        <div class="mt-5 flex items-center gap-x-2">
          <a
            v-for="icon in footerSocial"
            :key="icon.label"
            :href="icon.label"
            class="flex items-center justify-center rounded-full bg-white p-1"
          >
            <component :is="icon.icon" class="size-4 text-black" />
            <span class="sr-only"> Contact via  {{ icon.label }} </span>
          </a>
        </div>
      </div>

      <div class="col-span-10 grid grid-cols-1 gap-y-4 md:grid-cols-3">
        <div v-for="item in footerData" :key="item.label">
          <h4 class="font-clash-display text-3xl font-medium">{{ item.label }}</h4>
          <div
            v-for="(data, index) in item.menu"
            :key="index"
            class="mt-2 font-aeonik text-sm text-gray-300"
          >
            <span v-if="typeof data === 'string'">
              {{ data }}
            </span>

            <a v-else :href="data.url">
              {{ data.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
