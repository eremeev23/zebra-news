import { Routes } from "~/router/routes/routes.enum.ts";

export const routes = [
  {
    name: Routes.HOME,
    path: '/',
    component: () => import('~/views/index.vue'),
    meta: { title: 'Home' }
  },
  {
    name: Routes.ARTICLE,
    path: '/article/:articleId',
    component: () => import('~/views/article/index.vue'),
    meta: { title: 'Article' }
  },
]
