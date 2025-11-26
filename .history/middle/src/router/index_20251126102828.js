import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";
import Home from "../Home.vue";

// 路由模式：通过路由加载 remote 组件
const ButtonPage = defineAsyncComponent(() =>
  import("remote/Button").catch((err) => {
    console.error("加载远程按钮组件失败:", err);
    throw err;
  })
);

const CardPage = defineAsyncComponent(() =>
  import("remote/Card").catch((err) => {
    console.error("加载远程卡片组件失败:", err);
    throw err;
  })
);

const TablePage = defineAsyncComponent(() =>
  import("remote/Table").catch((err) => {
    console.error("加载远程表格组件失败:", err);
    throw err;
  })
);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/button",
    name: "Button",
    component: ButtonPage,
  },
  {
    path: "/card",
    name: "Card",
    component: CardPage,
  },
  {
    path: "/table",
    name: "Table",
    component: TablePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
