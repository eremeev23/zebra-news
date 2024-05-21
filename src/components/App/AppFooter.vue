<script setup lang="ts">
import { computed } from "vue";

// Components
import Logo from '~/components/Icons/Logo.vue'

// Layout
const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="py-10 lg:py-16 bg-blue-100">
    <div class="container flex flex-col space-y-4">
      <router-link to="/" class="h-9">
        <Logo />
      </router-link>

      <p class="text-grey">
        © alpha, {{ year }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
svg {
  height: 100%;
  width: auto;
}
</style>
