<script setup lang="ts">
// Types
import type { Article } from "~/types";

// Enums
import { Routes } from "~/router/routes/routes.enum.ts";

// Components
import AppTag from "~/components/App/AppTag.vue";
import AppDateCard from "~/components/App/AppDateCard.vue";

defineProps<{
  article: Article
}>()
</script>

<template>
  <router-link
    :to="{ name: Routes.ARTICLE, params: { articleId: article.code } }"
    class="min-h-72 h-full flex flex-col rounded-2xl"
  >
    <!-- Article cover -->
    <div
      v-if="article.image?.length"
      class="min-h-60 h-60 bg-center bg-cover bg-no-repeat overflow-hidden rounded-t-xl"
      :style="`background-image: url(${article.image})`"
    />

    <!-- Article info -->
    <div
      class="p-3 md:p-6 lg:p-8 h-full flex flex-col justify-between space-y-5 md:space-y-10 border border-primary"
      :class="article.image?.length ? 'border-t-0 rounded-b-xl' : 'rounded-xl'"
    >
      <!-- Article summary -->
      <div class="flex flex-col space-y-2 md:space-y-4">
        <AppDateCard :date="article.date" />

        <h3 class="text-2xl text-link">
          {{ article.name }}
        </h3>

        <p class="text-lg md:text-xl">
          {{ article.previewText }}
        </p>
      </div>

      <!-- Article type -->
      <AppTag v-if="article.type?.value">{{ article.type.value }}</AppTag>
    </div>
  </router-link>
</template>
