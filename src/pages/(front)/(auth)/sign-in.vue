<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
useSeoMeta({
  title: "Sign In",
});

import { AuthInput } from "@/components/ui-custom";
import { useToast } from "@/components/ui/toast/use-toast";
import { useField, useForm } from "vee-validate";
import { signInSchema } from "~/schema/auth.schema";

const { handleSubmit } = useForm({ validationSchema: signInSchema });

const { value: password, errorMessage: passwordError } = useField("password");
const { value: email, errorMessage: emailError } = useField("email");

const { toast } = useToast();

const onSubmit = handleSubmit((values) => {
  console.log("Submitted", values);
  toast({
    title: "Scheduled: Catch up",
    description: "Friday, February 10, 2023 at 5:57 PM",
  });
});
</script>

<template>
  <form class="flex items-center justify-center p-8" @submit.prevent="onSubmit">
    <div class="w-full max-w-sm">
      <h1 class="mb-2 text-3xl font-semibold">Log into your account</h1>
      <p class="mb-8 text-gray-500">Enter your email below to create your account</p>

      <div class="mb-6 space-y-3">
        <AuthInput
          type="email"
          placeholder="gmail@example.com"
          class="input-primary"
          v-model="email"
          :error-msg="emailError"
        />

        <AuthInput
          type="password"
          placeholder="password"
          class="input-primary"
          v-model="password"
          :error-msg="passwordError"
        />

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
          <span class="bg-black px-2 text-gray-500">Or continue with</span>
        </div>
      </div>

      <div class="flex gap-3">
        <button
          class="flex w-full items-center justify-center gap-2 rounded-md border border-zinc-800 px-3 py-2 transition-colors hover:border-zinc-700"
        >
          <Icon name="local:google-logo" class="h-5 w-5" />
          GitHub
        </button>

        <button
          class="flex w-full items-center justify-center gap-2 rounded-md border border-zinc-800 px-3 py-2 transition-colors hover:border-zinc-700"
        >
          <Icon name="local:facebook-logo" class="h-5 w-5" />
          Facebook
        </button>
      </div>

      <p class="mt-8 text-center text-sm text-gray-500">
        Don't have any account,
        <a href="#" class="text-white underline">Create one</a>
      </p>
    </div>
  </form>
</template>
