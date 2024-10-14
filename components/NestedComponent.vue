<template>
    <VueDraggable class="drag-area pl-2 pb-4" tag="div" v-model="list" group="g1">
      <div v-for="el in modelValue" :key="el.name" class="drag-item">
        <p>item: {{ el.name }}</p>
        <nested-component v-model="el.item"/>
      </div>
    </VueDraggable>
  </template>

  <script setup lang="ts">
    import { VueDraggable } from 'vue-draggable-plus'
    import { computed } from 'vue'
    
    interface IList {
      name: string
      children: IList[]
    }
    
    interface Props {
      modelValue: IList[]
    }
    
    const props = defineProps<Props>()
    
    interface Emits {
      (e: 'update:modelValue', value: IList[]): void
    }
    
    const emits = defineEmits<Emits>()
    const list = computed({
      get: () => props.modelValue,
      set: value => emits('update:modelValue', value)
    })
  </script>

  <style scoped>
    .drag-area {
      background-color: antiquewhite;
      min-height: 50px;
      outline: 2px dashed blue;
      margin-left: 10px

    }
    .drag-item {
      background-color: rgb(178, 147, 85);
      /* min-height: 50px; */
      outline: 1px dashed rgb(207, 1, 25);
      margin-left: 10px
    }
  </style>