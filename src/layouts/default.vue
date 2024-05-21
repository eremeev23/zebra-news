<script setup lang="ts">
// Components
import AppHeader from "~/components/App/AppHeader.vue";
import AppFooter from "~/components/App/AppFooter.vue";
</script>

<template>
  <div class="min-h-dvh flex flex-col">
    <!-- Header -->
    <AppHeader />

    <div class="flex-1">
      <!-- Page content -->
      <slot />
    </div>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>
