<script lang="ts" setup>
type Props = {
  heading1: string
  heading2: string
  desc: string
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="bg-white grid grid-cols-1 md:grid-cols-2 gap-x-5 text-background items-start  px-10 pb-10 pt-24"
  >
    <h3 class="font-clash-display text-3xl md:text-5xl">
      {{ props.heading1 }} <br />
      {{ props.heading2 }}
    </h3>
    <p class="font-aeonik mt-4 md:mt-0">
      {{ props.desc }}
    </p>
  </div>
</template>
