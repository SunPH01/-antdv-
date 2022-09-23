import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AsyncRoutes from "@/router/routes";

const routes: any[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHashHistory("/"),
  routes,
});

export const buildRoutes = () => {
  console.log(AsyncRoutes);
  AsyncRoutes.forEach((route) => {
    router.addRoute(route as unknown as RouteRecordRaw);
  });
};

buildRoutes();

export default router;
