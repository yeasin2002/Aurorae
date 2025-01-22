<script setup lang="ts">
import Hero from '~/components/index-page/HeroArea.vue'
import Service from '~/components/index-page/OurService.vue'
import Project from '~/components/index-page/ProjectShowCase.vue'

useSeoMeta({
  // title: 'aurorae',
  ogTitle: 'aurorae',
  ogDescription: 'Interior design, building  pleasing environment',
  ogImage: '/cover.png',
  description: 'Interior design is the art of science of enhancing the interior of a building.',
})
</script>

<template>
  <Hero />
  <Service />
  <Project />
</template>
