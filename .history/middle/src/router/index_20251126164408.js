import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";
import Home from "../Home.vue";

// 路由模式：Middle 直接全屏渲染第一级 remote 组件（和 Shell 一样）
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
  // 默认重定向到按钮页（保持和 remote 独立运行时体验类似）
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    redirect: "/button",
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
