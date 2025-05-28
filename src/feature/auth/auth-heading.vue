<script setup lang="ts">
import { BoxReveal } from "~/components/inspira-ui/box-reveal";

const { heading, desc } = defineProps<{ heading: string; desc: string }>();
</script>

<template>
  <div class="mb-8 flex flex-col items-center justify-center space-y-2">
    <BoxReveal color="#FBE05B">
      <h1 class="text-3xl font-semibold">{{ heading }}</h1>
    </BoxReveal>

    <BoxReveal color="#FBE05B">
      <p class="text-gray-500">{{ desc }}</p>
    </BoxReveal>
  </div>
</template>
