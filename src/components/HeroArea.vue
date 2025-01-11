<script lang="ts" setup>
import HeroStrip from '@/assets/illustration/hero-stripe.svg?component'
import PlayIcon from '@/assets/icons/play.svg?component'

// mockups
import MockupCompact from '@/assets/mockup/mockup-compact.svg?component'
import Ellipse from '@/assets/ellipse/Ellipse 1.svg?component'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 items-center">
    <div class="flex flex-col">
      <div class="space-y-4">
        <h1 class="font-bold text-6xl capitalize">
          make the best <br />
          financial decisions
        </h1>
        <h2 class="font-medium">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu
          adipiscing sociis arcu lorem porttitor.
        </h2>

        <div class="flex items-center gap-x-4">
          <button class="btn btn-secondary">Get Started</button>
          <button class="btn btn-default border border-gray-500 space-x-2">
            <PlayIcon />
            <span>Watch Video</span>
          </button>
        </div>
      </div>
      <div>
        <HeroStrip />
      </div>
    </div>

    <div class="relative">
      <MockupCompact />
    </div>
  </div>
</template>
