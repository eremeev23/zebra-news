<script setup lang="ts">
// Components
import Logo from "~/components/Icons/Logo.vue"
</script>

<template>
  <header class="sticky top-0 py-6 md:py-8 lg:py-10 container shadow bg-transparent-white">
    <router-link to="/">
      <Logo />
    </router-link>
  </header>
</template>
