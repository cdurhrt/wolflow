<script setup lang="ts">
import LayoutView from "./components/layout/LayoutView.vue";
import { NConfigProvider, darkTheme } from "naive-ui";
import { ref } from "vue";

const isDark = ref(true);
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : undefined">
    <div class="app-container">
      <layout-view>
        <RouterView />
      </layout-view>
    </div>
  </n-config-provider>
</template>

<style>
@import "@/assets/naive-overrides.css";

.app-container {
  max-height: 100vh;
  overflow-y: hidden;
}
</style>
