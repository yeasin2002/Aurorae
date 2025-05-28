<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
useSeoMeta({
  title: "Sign In",
});

import { AuthInput } from "@/components/ui-custom";
import { useToast } from "@/components/ui/toast/use-toast";
import { OAuth } from "@/feature/auth";
import { Form, type GenericObject } from "vee-validate";
import { type SignInFormType, signInSchema } from "~/schema/auth.schema";

const { toast } = useToast();

const onSubmit = (values: GenericObject) => {
  const { email, password } = values as SignInFormType;
  console.log("Submitted", email, password);
  toast({
    title: "Scheduled: Catch up",
    description: "Friday, February 10, 2023 at 5:57 PM",
  });
};
</script>

<template>
  <Form
    class="flex items-center justify-center p-8"
    :validation-schema="signInSchema"
    @submit="onSubmit"
  >
    <div class="w-full max-w-sm">
      <h1 class="mb-2 text-3xl font-semibold">Log into your account</h1>
      <p class="mb-8 text-gray-500">Enter your email below to create your account</p>

      <div class="mb-6 space-y-3">
        <AuthInput type="email" placeholder="gmail@example.com" name="email" />
        <AuthInput type="password" placeholder="password" name="password" />

        <button
          class="w-full rounded-md bg-primary px-3 py-2 font-medium text-black transition-colors hover:bg-gray-100"
        >
          Sign in with Email
        </button>
      </div>

      <div class="relative my-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-zinc-800"></div>
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-transparent px-2 text-gray-500">Or continue with</span>
        </div>
      </div>

      <OAuth />

      <p class="mt-8 text-center text-sm text-gray-500">
        Don't have any account,
        <NuxtLink to="/sign-up" class="text-white underline">Create an account</NuxtLink>
      </p>
    </div>
  </Form>
</template>
