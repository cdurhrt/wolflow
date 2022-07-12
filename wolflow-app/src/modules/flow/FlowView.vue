<script setup lang="ts">
import { mapValues } from "lodash";
import { defineAsyncComponent } from "vue";

const cpDict = {
  PluginA: "./components/plugin-a.vue",
  PluginB: "./components/plugin-b.vue",
};
const asyncComponents = mapValues(cpDict, (item) =>
  defineAsyncComponent(() => import(item))
);
console.log("asyncComponents :>> ", asyncComponents);
</script>

<template>
  <div>
    <template v-for="(item, key, index) in asyncComponents" :key="index">
      <component :is="item"></component>
    </template>
  </div>
</template>
