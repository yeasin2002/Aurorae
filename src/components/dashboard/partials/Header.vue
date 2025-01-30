<template>
  <header
    class="sticky top-0 z-30 before:absolute before:inset-0 before:-z-10 before:backdrop-blur-md max-lg:before:bg-white/90 dark:max-lg:before:bg-gray-800/90"
    :class="[
      variant === 'v2' || variant === 'v3'
        ? 'before:bg-white after:absolute after:inset-x-0 after:top-full after:-z-10 after:h-px after:bg-gray-200 dark:after:bg-gray-700/60'
        : 'max-lg:shadow-sm lg:before:bg-gray-100/90 dark:lg:before:bg-gray-900/90',
      variant === 'v2' ? 'dark:before:bg-gray-800' : '',
      variant === 'v3' ? 'dark:before:bg-gray-900' : '',
    ]"
  >
    <div class="px-4 sm:px-6 lg:px-8">
      <div
        class="flex h-16 items-center justify-between"
        :class="
          variant === 'v2' || variant === 'v3'
            ? ''
            : 'border-gray-200 dark:border-gray-700/60 lg:border-b'
        "
      >
        <!-- Header: Left side -->
        <div class="flex">
          <!-- Hamburger button -->
          <button
            class="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 lg:hidden"
            @click.stop="$emit('toggle-sidebar')"
            aria-controls="sidebar"
            :aria-expanded="sidebarOpen"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>
        </div>

        <!-- Header: Right side -->
        <div class="flex items-center space-x-3">
          <div>
            <button
              class="ml-3 flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50 lg:hover:bg-gray-200 dark:lg:hover:bg-gray-800"
              :class="{ 'bg-gray-200 dark:bg-gray-800': searchModalOpen }"
              @click.stop="searchModalOpen = true"
              aria-controls="search-modal"
            >
              <span class="sr-only">Search</span>
              <svg
                class="fill-current text-gray-500/80 dark:text-gray-400/80"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Z"
                />
                <path
                  d="m13.314 11.9 2.393 2.393a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414Z"
                />
              </svg>
            </button>
            <SearchModal
              id="search-modal"
              searchId="search"
              :modalOpen="searchModalOpen"
              @open-modal="searchModalOpen = true"
              @close-modal="searchModalOpen = false"
            />
          </div>
          <Notifications align="right" />
          <Help align="right" />
          <ThemeToggle />
          <!-- Divider -->
          <hr class="h-6 w-px border-none bg-gray-200 dark:bg-gray-700/60" />
          <UserMenu align="right" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'

import Help from '../components/DropdownHelp.vue'
import Notifications from '../components/DropdownNotifications.vue'
import UserMenu from '../components/DropdownProfile.vue'
import SearchModal from '../components/ModalSearch.vue'
import ThemeToggle from '../components/ThemeToggle.vue'

export default {
  name: 'Header',
  props: ['sidebarOpen', 'variant'],
  components: {
    SearchModal,
    Notifications,
    Help,
    ThemeToggle,
    UserMenu,
  },
  setup() {
    const searchModalOpen = ref(false)
    return {
      searchModalOpen,
    }
  },
}
</script>
