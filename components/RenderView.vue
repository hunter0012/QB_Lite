
<template>
  <div class="container">
      <nested-draggable v-model="list" class="types-list"/>

      <nested-draggable v-model="list2" class="working-list"/>
      <div class="json-div">
        {{ JSON.stringify(list2, undefined, 2) }}
      </div>
  </div>
</template>

<style lang="css" scoped>
  .container{
    /* background-color: aqua; */
    /* flex: 1; */
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 500px;
    border: 1px dashed;
  }
  .types-list{
    width: 200px;
    /* background-color: aquamarine; */
  }
  .working-list{
    background-color: blanchedalmond;
    width: 400px;
  }
  .cursor-move {
    cursor: move;
  }
  .json-div {
    background-color: darkcyan;
    flex: 1;
  }
</style>

<script setup lang="ts">
import { ref } from 'vue'
import NestedDraggable from '@/components/NestedComponent'
import { VueDraggable } from 'vue-draggable-plus'

// Types available to drag
const types = ref([
    {
        icon: "mdi-group",
        name: "group",
        title: "Group",
    },{
        icon: "mdi-comment",
        name: "display",
        title: "Display",
    },{
        icon: "mdi-file-question",
        name: "question",
        title: "Question",
    },{
        icon: "mdi-checkbox-marked",
        name: "boolean",
        title: "Boolean",
    },{
        icon: "mdi-decimal",
        name: "decimal",
        title: "Decimal",
    },{
        icon: "mdi-numeric",
        name: "integer",
        title: "Integer",
    },{
        icon: "mdi-calendar-range",
        name: "date",
        title: "Date",
    },{
        icon: "mdi-calendar-clock",
        name: "dateTime",
        title: "Date Time",
    },{
        icon: "mdi-clock-outline",
        name: "time",
        title: "Time",
    },{
        icon: "mdi-format-text",
        name: "string",
        title: "String",
    },{
        icon: "mdi-text-box-outline",
        name: "name",
        title: "Name",
    },{
        icon: "mdi-link-variant",
        name: "url",
        title: "Url",
    },{
        icon: "mdi-form-select",
        name: "choice",
        title: "Choice",
    },{
        icon: "mdi-file-table-box-outline",
        name: "open-choice",
        title: "Open Choice",
    },{
        icon: "mdi-attachment",
        name: "attachment",
        title: "Attachment",
    },{
        icon: "mdi-link",
        name: "reference",
        title: "Reference",
    },{
        icon: "mdi-counter",
        name: "quantity",
        title: "Quantity",
    }
]);


const list = ref([
  {
    name: 'item 1',
    item: [
      {
        name: 'item 2',
        item: []
      }
    ]
  },
  {
    name: 'item 3',
    item: [
      {
        name: 'item 4',
        item: []
      }
    ]
  },
  {
    name: 'item 5',
    item: []
  }
])

const list2 =  ref([])

</script>
