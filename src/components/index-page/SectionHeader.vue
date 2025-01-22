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
    class="grid grid-cols-1 items-start gap-x-5 md:gap-x-2 bg-white px-4 md:px-7 xl:px-10 pb-10 pt-24 text-background md:grid-cols-2 md:rounded-t-sm"
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
