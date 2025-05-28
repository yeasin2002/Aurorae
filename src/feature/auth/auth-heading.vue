<script setup lang="ts">
const { heading, desc } = defineProps<{ heading: string; desc: string }>();
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="mb-2 text-3xl font-semibold">{{ heading }}</h1>
    <p class="mb-8 text-gray-500">{{ desc }}</p>
  </div>
</template>
