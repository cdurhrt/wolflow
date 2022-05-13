<script setup lang="ts">
import { cloneDeep, forEach } from "lodash-es";
import { NButton } from "naive-ui";

const reactvieee = cloneDeep({ reactvieee: "23" });
console.log("reactvieee :>> ", reactvieee);
forEach(reactvieee, (value, key) => {
  console.log("value :>> ", value);
  console.log("key :>> ", key);
});
</script>

<template>
  <div>Home</div>
  <n-button>naive-ui button</n-button>
  <RouterView />
</template>
