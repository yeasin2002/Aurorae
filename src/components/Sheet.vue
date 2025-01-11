<template>
  <div>
    <slot name="trigger" :open="open" />
    <Teleport to="body">
      <Transition name="sheet">
        <div v-if="modelValue" class="fixed inset-0 z-50 flex">
          <div class="fixed inset-0 bg-black/40" aria-hidden="true" @click="close"></div>
          <div
            ref="sheetRef"
            :class="['fixed bg-white dark:bg-gray-800 shadow-lg', positionClasses, sizeClasses]"
            role="dialog"
            aria-modal="true"
            :aria-label="title"
            @keydown.esc="close"
          >
            <div class="flex flex-col h-full">
              <div
                class="flex items-center justify-between px-4 py-3 border-b dark:border-gray-700"
              >
                <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">{{ title }}</h2>
                <button
                  @click="close"
                  class="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  <XIcon class="w-5 h-5" />
                </button>
              </div>
              <div class="flex-1 overflow-y-auto p-4">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { XIcon } from 'lucide-vue-next'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: 'Sheet',
  },
  position: {
    type: String,
    default: 'right',
    validator: (value) => ['top', 'right', 'bottom', 'left'].includes(value),
  },
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['sm', 'default', 'lg', 'xl', 'full'].includes(value),
  },
})

const emit = defineEmits(['update:modelValue'])

const sheetRef = ref(null)
const { activate, deactivate } = useFocusTrap(sheetRef)

const positionClasses = computed(() => {
  switch (props.position) {
    case 'top':
      return 'inset-x-0 top-0'
    case 'right':
      return 'top-0 right-0 h-full'
    case 'bottom':
      return 'inset-x-0 bottom-0'
    case 'left':
      return 'top-0 left-0 h-full'
    default:
      return 'top-0 right-0 h-full'
  }
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'w-3/4 sm:w-1/3',
    default: 'w-3/4 sm:w-1/2',
    lg: 'w-3/4 sm:w-2/3',
    xl: 'w-3/4 sm:w-5/6',
    full: 'w-full',
  }
  return sizes[props.size] || sizes.default
})

const open = () => {
  emit('update:modelValue', true)
}

const close = () => {
  emit('update:modelValue', false)
}

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      nextTick(() => {
        activate()
      })
    } else {
      deactivate()
    }
  },
)

onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscapeKey)
})

const handleEscapeKey = (e) => {
  if (e.key === 'Escape' && props.modelValue) {
    close()
  }
}
</script>

<style scoped>
.sheet-enter-active,
.sheet-leave-active {
  transition: transform 0.3s ease-in-out;
}

.sheet-enter-from,
.sheet-leave-to {
  transform: translateX(100%);
}

.sheet-enter-active[class*='top-'],
.sheet-leave-active[class*='top-'] {
  transform: translateY(-100%);
}

.sheet-enter-active[class*='bottom-'],
.sheet-leave-active[class*='bottom-'] {
  transform: translateY(100%);
}

.sheet-enter-active[class*='left-'],
.sheet-leave-active[class*='left-'] {
  transform: translateX(-100%);
}
</style>
