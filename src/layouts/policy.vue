<script setup>
import { useRoute } from "vue-router";
import FooterSection from "~/components/common/FooterSection.vue";
import NavBar from "~/components/common/NavBar/NavBar.vue";
import { policyPage } from "~/data";

const route = useRoute();
useSeoMeta({
  title: "Policies",
});
</script>

<template>
  <div class="container min-h-screen text-white">
    <NavBar />

    <div class="px-4 py-12">
      <h1 class="mb-6 text-4xl font-bold md:text-5xl">Our Policies</h1>
      <p class="max-w-3xl text-lg text-gray-300">
        We are committed to transparency and fairness in all our operations. Please review our
        policies below to understand how we handle your data, the terms of using our platform, and
        our refund procedures.
      </p>
    </div>

    <!-- Policy Tabs -->
    <div class="mb-12 px-4">
      <div class="mb-8 flex flex-wrap border-b border-gray-700">
        <NuxtLink
          v-for="tab in policyPage"
          :key="tab.title"
          :href="tab.link"
          :class="[
            'px-6 py-3 font-medium focus:outline-none',
            route.path === tab.link
              ? 'border-b-2 border-yellow-400 text-yellow-400'
              : 'text-gray-400 hover:text-white',
          ]"
        >
          {{ tab.title }}
        </NuxtLink>
      </div>

      <!-- Policy Content -->
      <div class="rounded-lg bg-gray-800 p-6 md:p-8">
        <slot />
      </div>
    </div>

    <FooterSection />
  </div>
</template>
