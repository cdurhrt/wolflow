<script setup lang="ts">
import { ref } from "vue";
import { NMenu, NLayout, NLayoutSider, NSpace, NScrollbar } from "naive-ui";
import { routeNavs } from "./route-navs";

const activeKey = ref<string | null>(null);
const collapsed = ref(true);
const menuWidth = 240;
const collapsedWidth = 64;
</script>

<template>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider
        class="n-layout-sider"
        bordered
        collapse-mode="width"
        :collapsed-width="collapsedWidth"
        :width="menuWidth"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-scrollbar>
          <n-menu
            v-model:value="activeKey"
            :collapsed="collapsed"
            :collapsed-width="collapsedWidth"
            :options="routeNavs"
          />
        </n-scrollbar>
      </n-layout-sider>
      <n-layout>
        <div>
          <n-scrollbar
            style="max-height: 100vh; padding: 1rem; box-sizing: border-box"
          >
            <slot></slot>
          </n-scrollbar>
        </div>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<style scoped>
.n-layout-sider {
  height: 100vh;
}
</style>
