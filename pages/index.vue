<script setup lang="ts">
import NavBar from '~/components/common/NavBar/NavBar.vue'
import Hero from '~/components/index-page/HeroArea.vue'
import Service from '~/components/index-page/OurService.vue'
import Project from '~/components/index-page/ProjectShowCase.vue'
import Footer from '~/components/common/FooterSection.vue'

useSeoMeta({
  title: 'Furniture World',
  ogTitle: 'Furniture World',
  ogDescription: 'Interior design, building  pleasing environment',
  ogImage: '/cover.png',

  description:
    'Interior design is the art of science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space.',
})
</script>

<template>
  <div class="container px-2 md:px-4 2xl:px-0">
    <NavBar />
    <Hero />
    <Service />
    <Project />
    <Footer />
  </div>
</template>
