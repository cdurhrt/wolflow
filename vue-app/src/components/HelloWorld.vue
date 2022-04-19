<script setup lang="ts">
import { onMounted, reactive, Ref, ref } from 'vue'
import { NButton } from 'naive-ui'
import { cloneDeep } from 'lodash';

defineProps<{ msg: string }>()

const count = ref(0)

let num = ref(0)
onMounted(() => {
  num.value++
  console.log('cloneDeep', cloneDeep)
  console.log('num.value', num.value)
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>
  <n-button @click="count++">count is: {{ count }}</n-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
