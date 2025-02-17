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
    class="container mx-auto grid grid-cols-1 items-start gap-x-5  px-4 pb-10 pt-24 text-background md:grid-cols-2 md:gap-x-2 md:rounded-t-sm md:px-7 xl:px-10"
  >
    <h3 class="font-clash-display text-3xl lg:text-4xl xl:text-5xl">
      {{ props.heading1 }} <br />
      {{ props.heading2 }}
    </h3>
    <p class="mt-4 font-aeonik md:mt-0 md:text-xs lg:text-base">
      {{ props.desc }}
    </p>
  </div>
</template>
