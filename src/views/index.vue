<script setup lang="ts">
import { ref, watch } from 'vue'
import axios from 'axios'

// Types
import type {
  Article,
  ServerResponse
} from '~/types'

// Components
import ArticleCard from '~/components/Article/ArticleCard.vue'
import AppButton from '~/components/App/AppButton.vue'
import ArticleCardSkeleton from '~/components/Article/ArticleCardSkeleton.vue'

// Layout
const isLoading = ref(false)
const page = ref(1)
const articles = ref<Article[]>([])
const totalPages = ref(0)

watch(page, () => getData())

// Functions
async function getData(isInitial?: boolean) {
  isLoading.value = true

  const { data } = await axios<ServerResponse>(`https://flems.github.io/test/api/news/${page.value}`)

  articles.value.push(...data.items)

  if (isInitial) {
    totalPages.value = data.nav.total
  }

  isLoading.value = false
}

getData(true)
</script>

<template>
  <main class="pb-10 md:pb-16">
    <!-- Hero section -->
    <section class="hero pt-56 pb-12 container">
      <h1>Новости</h1>
    </section>

    <!-- Cards -->
    <section class="container pt-8 md:pt-16 flex flex-col items-center space-y-10 md:space-y-16">
      <ul
        v-if="articles?.length"
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8 md:gap-x-12 md:gap-y-16 items-stretch"
      >
        <li
          v-for="article in articles"
          :key="article.code"
        >
          <ArticleCard :article="article" />
        </li>

        <li
          v-show="isLoading"
          v-for="n in 2"
          :key="n"
        >
          <ArticleCardSkeleton />
        </li>
      </ul>

      <ul
        v-if="isLoading"
        class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8 md:gap-x-12 md:gap-y-16 items-stretch"
      >
        <li
          v-for="n in 3"
          :key="n"
        >
          <ArticleCardSkeleton />
        </li>
      </ul>

      <!-- Show more button -->
      <AppButton
        v-if="page < totalPages"
        class="mx-auto w-full md:w-fit"
        :is-loading="isLoading"
        @click="page++"
      >
        Загрузить ещё
      </AppButton>
    </section>
  </main>
</template>

<style scoped>
.hero {
  background: url("/images/hero.jpg") center no-repeat;
  background-size: cover;
}
</style>
