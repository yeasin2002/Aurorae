<template>
  <span ref="counterRef" :class="cn(props.class)">
    {{ displayValue }}
  </span>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { cn } from '~/lib/cn'

interface Props {
  from?: number
  to: number
  duration?: number
  decimals?: number
  animateOnView?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  from: 0,
  duration: 1000,
  decimals: 0,
  animateOnView: false,
})

const counterRef = ref<HTMLElement | null>(null)
const currentValue = ref(props.from)
const isAnimating = ref(false)
const hasAnimated = ref(false)

const displayValue = computed(() => {
  return currentValue.value.toFixed(props.decimals)
})

const animateValue = (timestamp: number) => {
  if (!isAnimating.value) return

  const progress = Math.min((timestamp - startTime) / props.duration, 1)
  currentValue.value = props.from + progress * (props.to - props.from)

  if (progress < 1) {
    requestAnimationFrame(animateValue)
  } else {
    isAnimating.value = false
    hasAnimated.value = true
  }
}

let startTime: number

const startAnimation = () => {
  if (isAnimating.value || hasAnimated.value) return
  isAnimating.value = true
  startTime = performance.now()
  requestAnimationFrame(animateValue)
}

onMounted(() => {
  if (props.animateOnView) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.value) {
          startAnimation()
        }
      },
      { threshold: 0.5 },
    )

    if (counterRef.value) {
      observer.observe(counterRef.value)
    }
  } else {
    startAnimation()
  }
})

watch(
  () => props.to,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      currentValue.value = props.from
      hasAnimated.value = false
      startAnimation()
    }
  },
)
</script>
