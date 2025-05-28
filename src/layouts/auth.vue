<script setup lang="ts">
useSeoMeta({
  title: "auth",
});

import { onMounted, ref } from "vue";
import LogoFull from "~/components/common/LogoFull.vue";
import { BlurReveal } from "~/components/inspira-ui/blur-reveal";
import FlickeringGrid from "~/components/inspira-ui/FlickeringGrid.vue";
import { travelQuotes, type travelQuotesType } from "~/data";

const quote = ref<travelQuotesType>({
  quote: "",
  writer: "",
  image: "",
  metadata: { nationality: "", source: "", tags: [] },
});

onMounted(() => {
  quote.value = travelQuotes[Math.floor(Math.random() * travelQuotes.length)];
});
</script>

<template>
  <div class="min-h-screen font-sans text-white">
    <!-- Header -->
    <header class="absolute left-0 right-0 top-0 flex items-center justify-between px-16 py-6">
      <LogoFull />
      <NuxtLink to="/" class="text-sm text-white hover:text-gray-300">
        <Icon name="lucide:home" class="mr-2 inline-block size-5" />
        <span class="font-clash-display"> Go Home </span>
      </NuxtLink>
    </header>

    <!-- Main Content -->
    <main class="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div class="relative hidden p-16 lg:flex">
        <ClientOnly>
          <div
            class="absolute left-0 top-0 h-full w-full select-none overflow-hidden overflow-x-hidden rounded-lg"
          >
            <FlickeringGrid
              class="relative inset-0 -left-1/2 z-0 h-full w-full !select-none opacity-50 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
              :square-size="4"
              :grid-gap="6"
              color="#FED500"
              :max-opacity="0.5"
              :flicker-chance="0.1"
              :width="800"
              :height="800"
            />
          </div>
        </ClientOnly>
        <!-- Left Section -->
        <section class="flex flex-col justify-center">
          <BlurReveal :delay="0.2" :duration="0.75" class="p-8">
            <blockquote class="mb-8 text-3xl font-medium leading-relaxed">
              {{ quote.quote }}
            </blockquote>
            <p class="text-gray-500">- {{ quote.writer }}</p>
          </BlurReveal>
        </section>
      </div>

      <slot />
    </main>
  </div>
</template>
