import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "shell",
      remotes: {
        // 第三级 shell：通过 middle 的 remote 形态加载中间层（统一端口 5174）
        middle: "http://localhost:5174/assets/remoteEntry.js?v=1",
        // 也可以直接加载第一级 remote
        remote: "http://localhost:5173/assets/remoteEntry.js?v=1",
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
