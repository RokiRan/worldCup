import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
// 判断是否是移动端
import { isMobile } from "~/utils/isMobile";
const isProduction = process.env.NODE_ENV === "production";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: whereToGo(),
  },
  {
    path: "/404",
    name: "ErrorPage",
    component: () => import("~/views/errorPages/index.vue"),
  },
  {
    path: "/pc",
    name: "Pc",
    component: whereToGo(),
  },
  {
    path: "/h5",
    name: "H5",
    component: whereToGo(),
    redirect: "/h5/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("~/views/h5/pages/home.vue"),
      },
      {
        path: "news",
        name: "News",
        component: () => import("~/views/h5/pages/news.vue"),
      },
      {
        path: "schedule",
        name: "Schedule",
        component: () => import("~/views/h5/pages/schedule.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const index = createRouter({
  history: createWebHistory(isProduction ? "/shangyou_activity/worldCup" : "/worldCup"),
  routes,
});
index.beforeEach(() => {

});

index.afterEach(() => {

});
function whereToGo() {
  return isMobile() ? () => import("~/views/h5/index.vue") : () => import("~/views/pc/index.vue");
}
export default index;
