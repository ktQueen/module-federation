import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      // middle-remote：纯 remote，只暴露给 shell 使用
      name: "middle-remote",
      filename: "remoteEntry.js",
      // 作为 host：加载第一级 remote（路由模式）
      remotes: {
        remote: "http://localhost:5173/assets/remoteEntry.js?v=1",
      },
      // 作为 remote：暴露给第三级 shell
      // 注意：这里直接复用 ../middle/src/Home.vue，middle-remote 自己不再维护一份 src
      exposes: {
        "./Home": "../middle/src/Home.vue",
      },
      shared: {
        vue: {
          singleton: true,
          requiredVersion: "^3.4.0",
        },
        "vue-router": {
          singleton: true,
          requiredVersion: "^4.3.0",
        },
        "element-plus": {
          singleton: true,
          requiredVersion: "^2.6.0",
        },
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5176,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  preview: {
    port: 5176,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  },
  optimizeDeps: {
    exclude: ["remote"],
  },
});
