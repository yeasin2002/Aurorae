<template>
  <div class="flex min-h-screen items-center justify-center px-4">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
        <p class="mt-2 text-center text-sm text-gray-400">
          Or
          <a href="#" class="font-medium text-[#FFD700] hover:text-[#FFD700]/80">
            start your 14-day free trial
          </a>
        </p>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-[#FFD700] focus:outline-none focus:ring-[#FFD700] sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-[#FFD700] focus:outline-none focus:ring-[#FFD700] sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-600 bg-gray-800 text-[#FFD700] focus:ring-[#FFD700]"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-400"> Remember me </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-[#FFD700] hover:text-[#FFD700]/80">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-[#FFD700] px-4 py-2 text-sm font-medium text-black hover:bg-[#FFD700]/90 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon
                name="lucide:lock-keyhole-open"
                class="h-5 w-5 text-[#1C1C1C] group-hover:text-[#1C1C1C]/70"
                aria-hidden="true"
              />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
