import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "middle",
      filename: "remoteEntry.js",
      // 作为 host：加载第一级 remote（路由模式）
      remotes: {
        // 加上查询参数，避免浏览器缓存旧的 remoteEntry.js
        remote: "http://localhost:5173/assets/remoteEntry.js?v=1",
      },
      // 作为 remote：暴露给第三级 shell
      // exposes: {
      //   "./Home": "./src/Home.vue",
      // },
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
    port: 5174,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  preview: {
    port: 5174,
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
