<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Field, Form } from "vee-validate";

const props = defineProps<{
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  class?: string;
  errorMsg?: string;
}>();
</script>

<template>
  <div>
    <Field
      v-bind="props"
      :class="
        cn(
          'w-full rounded-md border border-zinc-800 bg-transparent px-3 py-2 text-sm transition-colors focus:border-zinc-700 focus:outline-none',
          props.errorMsg ? 'border-red-500/60' : 'border-zinc-800',
          props.class,
        )
      "
    />
    <ErrorMessage
      :name="props.name"
      :class="
        props.errorMsg ? 'px-1 text-xs text-red-500/60 opacity-100 transition-colors' : 'opacity-0'
      "
    />

    <!-- <p
      :class="
        props.errorMsg ? 'px-1 text-xs text-red-500/60 opacity-100 transition-colors' : 'opacity-0'
      "
    >
      {{ props.errorMsg }}
    </p> -->
  </div>
</template>
