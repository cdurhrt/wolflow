<script setup lang="ts">
const props = defineProps(["in"]);

console.log("props.in :>> ", props.in);
</script>

<template>
  <div>{{ props.in }}</div>
  1
</template>

<style scoped></style>
