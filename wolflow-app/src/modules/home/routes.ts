import { meta } from "@/router";
import { HomeOutline } from "@vicons/ionicons5";
import type { RouteRecordRaw } from "vue-router";
import GridLearningVue from "./GridLearning.vue";
import HomeViewVue from "./HomeView.vue";

const homeRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeViewVue,
    ...meta({
      label: "首页",
      icon: HomeOutline,
    }),
  },
  {
    path: "/grid",
    name: "grid",
    component: GridLearningVue,
    ...meta({
      label: "Grid Layout",
      icon: HomeOutline,
    }),
  },
];

export default homeRoutes;
