<script setup lang="ts">
import { mapValues } from "lodash";
import { computed, defineAsyncComponent, reactive } from "vue";

const cpDict = reactive({
  PluginA: "./components/plugin-a.vue",
  PluginB: "./components/plugin-b.vue",
});

const asyncComponents = computed(() =>
  mapValues(cpDict, (item: string) =>
    defineAsyncComponent(() => import(/* @vite-ignore */ item))
  )
);

function addPluginC() {
  Object.assign(cpDict, { PluginC: "./components/plugin-c.vue" });
}
</script>

<template>
  <div>
    <button classc="primary" @click="addPluginC">add c</button>
    <template v-for="(item, key, index) in asyncComponents" :key="index">
      <component :is="item" :flow-in="{ test: '1' }"></component>
    </template>
  </div>
</template>
