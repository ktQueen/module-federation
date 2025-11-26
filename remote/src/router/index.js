import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

// 路由模式：独立运行时的路由配置
const routes = [
  {
    path: "/",
    redirect: "/button",
  },
  {
    path: "/button",
    name: "Button",
    component: () => import("../components/Button.vue"),
  },
  {
    path: "/card",
    name: "Card",
    component: () => import("../components/Card.vue"),
  },
  {
    path: "/table",
    name: "Table",
    component: () => import("../components/Table.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

