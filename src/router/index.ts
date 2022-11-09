import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
// 判断是否是移动端
import { isMobile } from "~/utils/isMobile";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: isMobile() ? () => import("~/views/h5/index.vue") : () => import("~/views/pc/index.vue"),
  },
  {
    path: "/404",
    name: "ErrorPage",
    component: () => import("~/views/errorPages/index.vue"),
  },
  {
    path: "/pc",
    name: "Pc",
    component: () => import("~/views/pc/index.vue"),
  },
  {
    path: "/h5",
    name: "H5",
    component: () => import("~/views/h5/index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const index = createRouter({
  history: createWebHistory(),
  routes,
});
index.beforeEach(() => {
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

index.afterEach(() => {
  NProgress.done();
});

export default index;
