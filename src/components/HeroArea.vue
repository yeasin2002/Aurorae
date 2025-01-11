<script lang="ts" setup>
import HeroStrip from '@/assets/illustration/hero-stripe.svg?url'
import PlayIcon from '@/assets/icons/play.svg?component'
import MockupCompact from '@/assets/mockup/mockup-compact.svg.svg?url'
import EllipseRed from '@/assets/ellipse/elipse.png'
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
        <img :src="HeroStrip" alt="strip" />
      </div>
    </div>

    <div class="relative hidden md:block">
      <img :src="MockupCompact" class="z-0 isolate" alt="mockup" />
      <img :src="EllipseRed" class="absolute bottom-0 left-0 z-10" />
    </div>
  </div>
</template>
