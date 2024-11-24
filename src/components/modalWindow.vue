<template>
  <div class="modal" v-show="showModal">
    <div class="modal_header">
      <h2>{{ props.title }}</h2>
      <button class="close" @click="hideModal()"></button>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  showModal: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:showModal', value: boolean): void
}>()

const hideModal = () => {
  emit('update:showModal', false)
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  min-width: 350px;
}

.modal_header {
  position: relative;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
}

.modal_header h2 {
  max-width: 80%;
  min-height: 28px;
}

.modal_header .close {
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.close::before,
.close::after {
  content: '';
  display: block;
  position: absolute;
  width: 15px;
  height: 3px;
  background-color: black;
  left: 50%;
  top: 50%;
}

.close::before {
  transform: translate(-50%, -50%) rotate(45deg);
}
.close::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
</style>
