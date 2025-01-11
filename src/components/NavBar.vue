<script lang="ts">
import Logo from '@/assets/illustration/logo.svg?component'

export default {
  name: 'NavBar',
  components: { Logo },
}
</script>

<template>
  <div class="flex items-center justify-between py-6">
    <Logo />
    <div></div>
    <button class="btn-dark">Download</button>
  </div>
</template>
