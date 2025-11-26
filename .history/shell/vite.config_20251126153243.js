import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "shell",
      remotes: {
        // 加载第二级 middle
        middle: "http://localhost:5174/assets/remoteEntry.js?v=1",
        // 为了在路由模式下直接使用 remote/Button, remote/Card, remote/Table
        // 这里同时声明第一级 remote，便于 shell 解析这些模块标识符
        remote: "http://localhost:5173/assets/remoteEntry.js?v=1",
      },
      exposes: {
        "./Home": "./src/Home.vue",
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
    port: 5175,
    cors: true,
  },
  optimizeDeps: {
    // 避免 Vite 预打包 federation remote
    exclude: ["middle", "remote"],
  },
});
