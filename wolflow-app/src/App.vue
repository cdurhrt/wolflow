<script setup lang="ts">
import router from "./router";

const route = router.options.routes;
console.log("route :>> ", route);
</script>

<template>
  <div>
    menu
    <RouterView />
  </div>
</template>
