import { meta } from "@/router";
import { WaterOutline } from "@vicons/ionicons5";
import type { RouteRecordRaw } from "vue-router";

const flowRoutes: RouteRecordRaw[] = [
  {
    path: "/flow",
    name: "flow",
    component: () => import("./FlowView.vue"),
    ...meta({
      label: "流程",
      icon: WaterOutline,
    }),
  },
];

export default flowRoutes;
