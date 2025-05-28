<script setup lang="ts">
import Toaster from "@/components/ui/toast/Toaster.vue";

// CSS
import "vue3-toastify/dist/index.css";
import "./assets/css/main.css";
</script>

<template>
  <Toaster />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
