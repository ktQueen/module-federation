import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

// 严格三级嵌套：shell 使用路由模式加载 middle/Home
// middle/Home 内部使用 router-view 显示当前路由匹配的组件
// 这些路由会在 middle/Home 组件内部通过 router-view 渲染
const HomePage = defineAsyncComponent(() =>
  import("middle/Home").catch((err) => {
    console.error("加载中间层模块失败:", err);
    throw err;
  })
);

// 通过路由模式加载 remote 组件（用于 middle/Home 内部的 router-view）
// 当 middle/Home 内部的 router-view 匹配这些路由时，会显示对应的 remote 组件
const RemoteButtonPage = defineAsyncComponent(() =>
  import("remote/Button").catch((err) => {
    console.error("加载远程按钮组件失败:", err);
    throw err;
  })
);

const RemoteCardPage = defineAsyncComponent(() =>
  import("remote/Card").catch((err) => {
    console.error("加载远程卡片组件失败:", err);
    throw err;
  })
);

const RemoteTablePage = defineAsyncComponent(() =>
  import("remote/Table").catch((err) => {
    console.error("加载远程表格组件失败:", err);
    throw err;
  })
);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  // 这些路由会在 middle/Home 组件内部通过 router-view 渲染
  // 使用路由模式，确保样式和功能完整
  {
    path: "/button",
    name: "Button",
    component: RemoteButtonPage,
  },
  {
    path: "/card",
    name: "Card",
    component: RemoteCardPage,
  },
  {
    path: "/table",
    name: "Table",
    component: RemoteTablePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
