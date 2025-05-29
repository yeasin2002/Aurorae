<script setup lang="ts">
import { AuthInput } from "@/components/ui-custom";
import { Form, type GenericObject } from "vee-validate";
import { toast } from "vue3-toastify";
import { useSupabase } from "~/lib/supabaseClient";
import { signUpSchema, type SignInFormType } from "~/schema/auth.schema";

const emit = defineEmits(["toggle-sign-in-process"]);

const onSubmit = async (values: GenericObject) => {
  const formValues = values as SignInFormType;
  console.log("Submitted", formValues);
  toast.success("Sign In completed");
  emit("toggle-sign-in-process");

  //   try {
  //     const { data, error } = await useSupabase().auth.signUp({
  //       email: formValues.email,
  //       password: formValues.password,
  //     });
  //     // .from("users")
  //     // .insert([{ email: "user@example.com", username: "new_username", bio: "This is my bio." }]);

  //     if (error) {
  //       console.error("Error inserting user data:", error);
  //     } else {
  //       console.log("User registered successfully:", data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
};
</script>

<template>
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
</template>
