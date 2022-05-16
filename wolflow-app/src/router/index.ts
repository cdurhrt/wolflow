import aboutRoutes from "@/modules/about/routes";
import flowRoutes from "@/modules/flow/routes";
import homeRoutes from "@/modules/home/routes";
import type { Component } from "vue";
import { createRouter, createWebHistory } from "vue-router";

export type RouteMeta = {
  label: string;
  icon?: Component;
};

export function meta(m: RouteMeta) {
  return { meta: m };
}

const routes = [...homeRoutes, ...aboutRoutes, ...flowRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
