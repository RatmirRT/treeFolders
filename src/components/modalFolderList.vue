<template>
  <modalWindow
    :title="props.title"
    :showModal="showModal"
    @update:showModal="
      (showModal: boolean) => {
        emit('update:showModal', showModal)
      }
    "
  >
    <div class="list">
      <folderList :listData="props.listData" v-model:selected-item="itemId"></folderList>
    </div>
    <div class="button_section">
      <button @click="closeModal">Закрыть</button>
      <button @click="selectItem">OK</button>
    </div>
  </modalWindow>
</template>

<script setup lang="ts">
import modalWindow from '@/components/modalWindow.vue'
import folderList from '@/components/folderList.vue'
import type { FolderList } from '@/components/Interfaces'
import { ref } from 'vue'

interface Props {
  title: string
  listData: FolderList[]
  showModal: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'select', value: number): void
  (e: 'update:showModal', value: boolean): void
}>()

const itemId = ref(0)

const selectItem = () => {
  emit('select', itemId.value)
  emit('update:showModal', false)
}

const closeModal = () => {
  emit('update:showModal', false)
}
</script>

<style scoped>
.list {
  padding: 10px 0;
  max-height: 350px;
  overflow-x: hidden;
}

.button_section {
  padding-top: 10px;
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.button_section button {
  border: none;
  padding: 5px;
  font-size: 14px;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
}

.button_section button:last-child {
  background-color: lime;
  color: white;
}
</style>
