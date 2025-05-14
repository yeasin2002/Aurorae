<script setup lang="ts">
import Footer from '~/components/common/FooterSection.vue';
import NavBar from '~/components/common/NavBar/NavBar.vue';

import '../assets/css/main.css'


useSeoMeta({
  ogTitle: 'aurorae',
  ogDescription: 'Interior design, building  pleasing environment',
  ogImage: '/cover.png',
  description: 'Interior design is the art of science of enhancing the interior of a building.',
})

</script>

<template>
  <div class="container px-2 md:px-4 2xl:px-0">
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>
