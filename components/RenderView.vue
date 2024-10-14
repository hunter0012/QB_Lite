
<template>
  <div class="container">
      <TypesComponent v-model="types" class="types-list"/>

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
        item: []
    },{
        icon: "mdi-comment",
        name: "display",
        title: "Display",
        item: []
    },{
        icon: "mdi-file-question",
        name: "question",
        title: "Question",
        item: []
    },{
        icon: "mdi-checkbox-marked",
        name: "boolean",
        title: "Boolean",
        item: []
    },{
        icon: "mdi-decimal",
        name: "decimal",
        title: "Decimal",
        item: []
    },{
        icon: "mdi-numeric",
        name: "integer",
        title: "Integer",
        item: []
    },{
        icon: "mdi-calendar-range",
        name: "date",
        title: "Date",
        item: []
    },{
        icon: "mdi-calendar-clock",
        name: "dateTime",
        title: "Date Time",
        item: []
    },{
        icon: "mdi-clock-outline",
        name: "time",
        title: "Time",
        item: []
    },{
        icon: "mdi-format-text",
        name: "string",
        title: "String",
        item: []
    },{
        icon: "mdi-text-box-outline",
        name: "name",
        title: "Name",
        item: []
    },{
        icon: "mdi-link-variant",
        name: "url",
        title: "Url",
        item: []
    },{
        icon: "mdi-form-select",
        name: "choice",
        title: "Choice",
        item: []
    },{
        icon: "mdi-file-table-box-outline",
        name: "open-choice",
        title: "Open Choice",
        item: []
    },{
        icon: "mdi-attachment",
        name: "attachment",
        title: "Attachment",
        item: []
    },{
        icon: "mdi-link",
        name: "reference",
        title: "Reference",
        item: []
    },{
        icon: "mdi-counter",
        name: "quantity",
        title: "Quantity",
        item: []
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
