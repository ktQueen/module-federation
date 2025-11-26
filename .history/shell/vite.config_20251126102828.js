import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "shell",
      // 严格三级嵌套：shell 只加载 middle，不直接加载 remote
      // remote 组件由 middle 通过路由方式加载
      remotes: {
        middle: "http://localhost:5174/assets/remoteEntry.js",
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
    exclude: ["middle"],
  },
});
