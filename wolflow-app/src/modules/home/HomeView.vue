<script setup lang="ts">
import DarkSwitch from "./components/DarkSwitch.vue";
import { NGrid, NGridItem } from "naive-ui";
</script>

<template>
  <n-grid>
    <n-grid-item :span="6"> <DarkSwitch /></n-grid-item>
  </n-grid>
</template>
