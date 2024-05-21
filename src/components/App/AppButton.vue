<script setup lang="ts">
defineProps<{
  isLoading: boolean;
}>()
</script>

<template>
  <button
    class="py-4 px-8 border border-primary text-primary text-xl font-semibold rounded-lg transition-colors hover:bg-primary hover:text-white"
    :class="{ 'border-grey !text-grey pointer-events-none' : isLoading }"
    :disabled="isLoading"
  >
    <slot />
  </button>
</template>
