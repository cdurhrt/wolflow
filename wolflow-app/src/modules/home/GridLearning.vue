<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { onMounted, reactive, ref } from "vue";

const colors = new Array(1000).fill(0).reduce((acc) => {
  const color = getColor();
  acc.push(color);
  return acc;
}, []);

const boxs = reactive(colors);
const vw = ref(window.innerWidth);
const vh = ref(window.innerHeight);

const yCnt = ref(20);
const rectSize = computed(() => vh.value / yCnt.value);
const xCnt = computed(() => Math.floor(vw.value / rectSize.value));

const gridTplRows = computed(
  () => `repeat(${yCnt.value}, ${rectSize.value}px)`
);
const gridTplCols = computed(
  () => `repeat(${xCnt.value}, ${rectSize.value}px)`
);

const cssStyle = reactive({
  justifyContent: "center",
});

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
      {{ item }}
    </div>
  </div>
</template>

<style scoped>
.grid-top-parent {
  display: grid;
  height: 100vh;
  grid-template-rows: v-bind(gridTplRows);
  grid-template-columns: v-bind(gridTplCols);
  justify-content: v-bind("cssStyle.justifyContent");
  font-size: 12px;
}
</style>
