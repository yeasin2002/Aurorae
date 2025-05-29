<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

useSeoMeta({
  title: "sign up",
});

import { AuthHeading, OAuth } from "@/feature/auth";
import { SignupConfirm, SignupInitial } from "~/feature/auth";

const isSignInProcessCompleted = ref(false);
const toggleSignInProcess = () => {
  isSignInProcessCompleted.value = !isSignInProcessCompleted.value;
};

</script>

<template>
  <div class="flex items-center justify-center p-8">
    <div class="w-full max-w-sm">
      <AuthHeading
        heading="Create an account"
        desc="Enter your email below to create your account"
      />
      <SignupInitial
        v-if="!isSignInProcessCompleted"
        @toggle-sign-in-process="toggleSignInProcess"
      />
      <SignupConfirm v-else />

      <div class="relative my-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-zinc-800"></div>
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="px-2 text-gray-500">Or continue with</span>
        </div>
      </div>

      <OAuth />

      <p class="mt-8 text-center text-sm text-gray-500">
        Already have any account,
        <NuxtLink to="/sign-in" class="text-white underline">sign-in instead</NuxtLink>
      </p>
    </div>
  </div>
</template>
