<script setup lang="ts">
import { UserPlusIcon } from 'lucide-vue-next'
</script>

<template>
  <div class="flex min-h-screen items-center justify-center px-4">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-white">Create your account</h2>
        <p class="mt-2 text-center text-sm text-gray-400">
          Or
          <a href="#" class="font-medium text-[#FFD700] hover:text-[#FFD700]/80">
            sign in to your existing account
          </a>
        </p>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="name" class="sr-only">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              autocomplete="name"
              required
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-[#FFD700] focus:outline-none focus:ring-[#FFD700] sm:text-sm"
              placeholder="Full name"
            />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="relative block w-full appearance-none rounded-none border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-[#FFD700] focus:outline-none focus:ring-[#FFD700] sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="new-password"
              required
              class="relative block w-full appearance-none rounded-none border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-[#FFD700] focus:outline-none focus:ring-[#FFD700] sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div>
            <label for="password-confirm" class="sr-only">Confirm password</label>
            <input
              id="password-confirm"
              name="password-confirm"
              type="password"
              autocomplete="new-password"
              required
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-[#FFD700] focus:outline-none focus:ring-[#FFD700] sm:text-sm"
              placeholder="Confirm password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              class="h-4 w-4 rounded border-gray-600 bg-gray-800 text-[#FFD700] focus:ring-[#FFD700]"
            />
            <label for="terms" class="ml-2 block text-sm text-gray-400">
              I agree to the
              <a href="#" class="font-medium text-[#FFD700] hover:text-[#FFD700]/80">Terms</a>
              and
              <a href="#" class="font-medium text-[#FFD700] hover:text-[#FFD700]/80"
                >Privacy Policy</a
              >
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-[#FFD700] px-4 py-2 text-sm font-medium text-black hover:bg-[#FFD700]/90 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <UserPlusIcon
                class="h-5 w-5 text-[#1C1C1C] group-hover:text-[#1C1C1C]/70"
                aria-hidden="true"
              />
            </span>
            Create Account
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
