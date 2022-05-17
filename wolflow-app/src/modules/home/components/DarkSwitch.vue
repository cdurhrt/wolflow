<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { NSwitch } from "naive-ui";
import { ref } from "vue";

const themeStore = useThemeStore();

const darkMode = ref(themeStore.darkMode);
</script>

<template>
  <n-switch v-model:value="darkMode" @update-value="themeStore.darken">
    <template #checked> 黑暗模式 </template>
    <template #unchecked> 明亮模式 </template>
  </n-switch>
</template>
