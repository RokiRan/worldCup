import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
const isProduction = process.env.NODE_ENV === "production";
// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? "/shangyou_activity/worldCup" : "/worldCup",
  server: {
    host: "",
    port: 8888,
    open: true,
    https: false,
    proxy: {
      "/controller": {
        target: "https://testvoteone.cqcb.com/vote/2022project/q4/2022word_cup",
        changeOrigin: true,
        // rewrite: (path: string) => path.replace(/^\/controller.php/, "/controller.php"),
      },
      "/v1": {
        target: "https://goapi.cqcb.com/",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    vue({
      // https://vuejs.org/guide/extras/reactivity-transform.html
      // 开启响应性语法糖 （试验性特性）
      // Reactivity Transform
      reactivityTransform: true,
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "vue/macros",
        "@vueuse/head",
        "@vueuse/core",
      ],
      dts: "types/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/store",
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "types/components.d.ts",
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
  ],
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
      @import "~/styles/variables.scss";
    `,
        javascriptEnabled: true,
      },
    },
  },
});
