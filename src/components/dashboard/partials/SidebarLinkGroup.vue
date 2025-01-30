<template>
  <li
    class="mb-0.5 rounded-lg bg-[linear-gradient(135deg,var(--tw-gradient-stops))] py-2 pl-4 pr-3 last:mb-0"
    :class="
      activeCondition && 'from-violet-500/[0.12] to-violet-500/[0.04] dark:from-violet-500/[0.24]'
    "
  >
    <slot :handleClick="handleClick" :expanded="expanded" />
  </li>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SidebarLinkGroup',
  props: ['activeCondition'],
  setup(props) {
    const expanded = ref(props.activeCondition)

    const handleClick = () => {
      expanded.value = !expanded.value
    }

    return {
      expanded,
      handleClick,
    }
  },
}
</script>
