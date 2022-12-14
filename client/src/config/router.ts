import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "../views/MainPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
    meta: {
      title: "welcome",
    },
  },
  {
    path: "/404",
    component: () => import("../views/NotFound.vue"),
    meta: {
      title: "404 not found",
    },
  },
  { path: "/:pathMatch(.*)*", redirect: "/404" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to) =>
    to.hash
      ? { el: to.hash, behavior: "smooth" }
      : { top: 0, left: 0, behavior: "smooth" },
});

router.beforeEach((to, _, next) => {
  document.title = `Vue App ${to.meta.title ?? ""}`;
  next();
});

export { router, routes };
