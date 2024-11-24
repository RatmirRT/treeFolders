<template>
  <h5>itemId: {{ itemId }}</h5>
  <button @click="showModal = true">Открыть</button>
  <modalFolderList
    :listData="mockData"
    :title="title"
    v-model:showModal="showModal"
    @select="(value) => (itemId = value)"
  ></modalFolderList>
</template>

<script setup lang="ts">
import modalFolderList from './components/modalFolderList.vue'
import { ref } from 'vue'

const title = 'Заголовок'
const showModal = ref(false)
const itemId = ref<number | null>(null)
const mockData = [
  {
    id: 1,
    name: 'Папка 1',
    children: [
      { id: 2, name: 'Папка 1.1', children: [] },
      { id: 3, name: 'Папка 1.2', children: [{ id: 4, name: 'Папка 1.2.1', children: [] }] },
    ],
  },
  { id: 5, name: 'Папка 2', children: [] },
]
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
