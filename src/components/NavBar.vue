<script lang="ts">
import Logo from '@/assets/illustration/logo.svg?component'
import { navigation } from '@/data'

export default {
  name: 'NavBar',
  components: { Logo },
  data: () => ({ navigation }),
}
</script>

<template>
  <div class="flex items-center justify-between py-6">
    <div class="flex items-center justify-between gap-x-8">
      <Logo />
      <div class="space-x-2">
        <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-semibold">{{
          item.name
        }}</a>
      </div>
    </div>
    <button class="btn-dark">Download</button>
  </div>
</template>
