<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

useSeoMeta({
  title: "sign up",
});

import { AuthInput } from "@/components/ui-custom";
import { OAuth } from "@/feature/auth";
import { Form } from "vee-validate";
import { toast } from "vue3-toastify";
import { signUpSchema } from "~/schema/auth.schema";

const onSubmit = (formValues: unknown) => {
  console.log("Submitted", formValues);
  toast.success("Sign In completed");
};
</script>

<template>
  <div class="flex items-center justify-center p-8">
    <div class="w-full max-w-sm">
      <h1 class="mb-2 text-3xl font-semibold">Create an account</h1>
      <p class="mb-8 text-gray-500">Enter your email below to create your account</p>

      <Form class="mb-6 space-y-3" :validation-schema="signUpSchema" @submit="onSubmit">
        <AuthInput name="name" type="text" placeholder="Enter your full name" />
        <AuthInput name="email" type="email" placeholder="gmail@example.com" />
        <AuthInput name="password" type="password" placeholder="Password" />
        <AuthInput name="confirmPassword" type="password" placeholder="Confirm password" />

        <button
          type="submit"
          class="w-full rounded-md bg-primary px-3 py-2 font-medium text-black transition-colors hover:bg-gray-100"
        >
          Sign up
        </button>
      </Form>

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
