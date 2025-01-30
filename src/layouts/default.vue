<script setup lang="ts">
import Footer from '~/components/common/FooterSection.vue'
import NavBar from '~/components/common/NavBar/NavBar.vue'

import '../assets/css/main.css'
import '../components/charts/ChartjsConfig'
</script>

<template>
  <div class="container px-2 md:px-4 2xl:px-0">
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>
