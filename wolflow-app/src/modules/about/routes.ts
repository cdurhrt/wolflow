import { meta } from "@/router";
import { InformationCircleOutline } from "@vicons/ionicons5";
import type { RouteRecordRaw } from "vue-router";

const aboutRoutes: RouteRecordRaw[] = [
  {
    path: "/about",
    name: "about",
    component: () => import("./AboutView.vue"),
    ...meta({
      label: "关于",
      icon: InformationCircleOutline,
    }),
  },
];

export default aboutRoutes;
