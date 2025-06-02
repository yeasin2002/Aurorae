<script setup lang="ts">
import { AuthInput } from "@/components/ui-custom";
import { Form, type GenericObject } from "vee-validate";
import { toast } from "vue3-toastify";
import { useSupabase } from "~/lib/supabaseClient";
import { signInSchema, type SignInFormType } from "~/schema/auth.schema";

const emit = defineEmits(["toggle-sign-in-process"]);

const onSubmit = async (values: GenericObject) => {
  const formValues = values as SignInFormType;

  try {
    const { data, error } = await useSupabase().auth.signUp({
      email: formValues.email,
      password: formValues.password,
    });

    if (error) new Error(error.message);

    emit("toggle-sign-in-process");
    toast.success("Sign In completed");
    console.log(`data: `, data);
  } catch (error: any) {
    console.log(error);
    toast.error(error?.message || `Something went wrong`);
  }
};
</script>

<template>
  <Form class="mb-6 space-y-3" :validation-schema="signInSchema" @submit="onSubmit">
    <AuthInput name="email" type="email" placeholder="gmail@example.com" />
    <AuthInput name="password" type="password" placeholder="******" />

    <button
      type="submit"
      class="w-full rounded-md bg-primary px-3 py-2 font-medium text-black transition-colors hover:bg-gray-100"
    >
      Sign up
    </button>
  </Form>
</template>
