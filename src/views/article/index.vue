<script lang='ts' setup>
import { useRoute } from "vue-router";

// Utils
const route = useRoute()
</script>

<template>
  <main class="container py-10">
    <router-link to="/"> < Назад </router-link>

    <h1 class="mt-10">Новость {{ route.params.articleId }}</h1>
  </main>
</template>

<style scoped>

</style>
