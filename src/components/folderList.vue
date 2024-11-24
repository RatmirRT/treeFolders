<template>
  <ul>
    <li
      v-for="item in props.listData"
      :key="item.id"
      @click.stop="openItem($event, item.id)"
      :class="{
        parent: item.children && item.children.length,
      }"
      p
    >
      {{ item.name }}
      <i class="selected" v-if="selectedItem === item.id"></i>
      <FolderList
        v-if="item.children && item.children.length"
        :listData="item.children"
        class="children"
        :selectedItem="selectedItem"
        @update:selectedItem="
          (itemId: number) => {
            emit('update:selectedItem', itemId)
          }
        "
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { FolderList } from '@/components/Interfaces'

interface Props {
  listData: FolderList[]
  selectedItem: number
}

defineOptions({
  name: 'FolderList',
})

const emit = defineEmits<{
  (e: 'update:selectedItem', value: number): void
}>()

const props = defineProps<Props>()

const openItem = (e: Event, itemId: number) => {
  const target = e.target as HTMLElement
  target.classList.toggle('active')
  emit('update:selectedItem', itemId)
}
</script>

<style scoped>
ul {
  list-style-type: none;
  overflow: hidden;
}

.parent:before,
.parent:after {
  content: '';
  display: block;
  position: absolute;
  height: 2px;
  width: 10px;
  background-color: black;
  left: 0;
  top: 8px;
  opacity: 1;
  transition: 0.2s;
}

.parent:after {
  transform: rotate(90deg);
}

.parent.active:before {
  transform: rotate(90deg);
  opacity: 0;
}

.parent.active:after {
  transform: rotate(0deg);
}

li {
  padding-left: 10px;
  position: relative;
  cursor: pointer;
}

li > ul {
  display: none;
}

li.active > ul {
  display: block;
}

.selected {
  position: absolute;
  right: 10px;
  top: 8px;
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: lime;
}
</style>
