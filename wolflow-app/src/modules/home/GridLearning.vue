<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";

const colors = new Array(50).fill(0).reduce((acc) => {
  const color = getColor();
  acc.push(color);
  return acc;
}, []);

const boxs = reactive(colors);
const vw = ref(window.innerWidth);
const vh = ref(window.innerHeight);

onMounted(() => {
  window.onresize = () => {
    vw.value = window.innerWidth;
    vh.value = window.innerHeight;
  };
});

function getColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}
</script>

<template>
  <div class="grid-top-parent">
    <div
      v-for="(item, index) in boxs"
      :key="index"
      class="box"
      :style="{ background: item }"
    >
      {{ index }}
    </div>
  </div>
</template>

<style scoped>
.grid-top-parent {
  display: grid;
  height: 100vh;
  grid-template-rows: repeat(5, 100px);
  grid-template-columns: repeat(10, 100px);
}
</style>
