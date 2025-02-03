<template>
  <div class="min-h-screen bg-black font-sans text-white">
    <!-- Header -->
    <header class="absolute left-0 right-0 top-0 flex items-center justify-between p-6">
      <div class="flex items-center gap-2 font-medium">
        <div class="text-xl">⚡</div>
        Acme Inc
      </div>
      <a href="#" class="text-sm text-white hover:text-gray-300">Login</a>
    </header>

    <!-- Main Content -->
    <main class="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <!-- Left Section -->
      <section class="hidden flex-col justify-center bg-zinc-900 p-16 md:flex">
        <blockquote class="mb-8 text-3xl font-medium leading-relaxed">
          "This library has saved me countless hours of work and helped me deliver stunning designs
          to my clients faster than ever before."
        </blockquote>
        <p class="text-gray-500">Sofia Davis</p>
      </section>

      <!-- Right Section -->
      <section class="flex items-center justify-center p-8">
        <div class="w-full max-w-sm">
          <h1 class="mb-2 text-3xl font-semibold">Create an account</h1>
          <p class="mb-8 text-gray-500">Enter your email below to create your account</p>

          <div class="mb-6 space-y-3">
            <input
              type="email"
              placeholder="name@example.com"
              class="w-full rounded-md border border-zinc-800 bg-transparent px-3 py-2 text-sm transition-colors focus:border-zinc-700 focus:outline-none"
            />
            <button
              class="w-full rounded-md bg-white px-3 py-2 font-medium text-black transition-colors hover:bg-gray-100"
            >
              Sign in with Email
            </button>
          </div>

          <div class="relative my-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-zinc-800"></div>
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="bg-black px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          <button
            class="flex w-full items-center justify-center gap-2 rounded-md border border-zinc-800 px-3 py-2 transition-colors hover:border-zinc-700"
          >
            <svg viewBox="0 0 24 24" class="h-5 w-5">
              <path
                fill="currentColor"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
            GitHub
          </button>

          <p class="mt-8 text-center text-sm text-gray-500">
            By clicking continue, you agree to our
            <a href="#" class="text-white underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" class="text-white underline">Privacy Policy</a>.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
