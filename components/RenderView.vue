<script setup>
import { ref } from 'vue';
import { useDraggable } from 'vue-draggable-plus';

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

// Main questionnaire list where items will be dropped
const questions = ref([]);

// Droppable working area refs
const types_area = ref();
const items_area = ref();

// Clone the item when dragging from types list
const cloneItem = (item) => {
  return { type: item, children: [] }; // Return a new object to clone instead of move
};

// Drag and drop settings for types (prevent rearranging)
useDraggable(types_area, types, {
  animation: 150,
  ghostClass: 'ghost',
  group: {
    name: 'questions',
    pull: 'clone', // Allow items to be cloned
    put: false     // Prevent putting items back into the types list
  },
  sort: false, // Disable sorting/rearranging in the types list
  clone: cloneItem // Clone the dragged item
});

// Drag and drop settings for questions (allowing nesting and adding children)
useDraggable(items_area, questions, {
  animation: 150,
  ghostClass: 'ghost',
  group: {
    name: 'questions',
    pull: false,   // Prevent pulling from the working list back to the types
    put: true      // Allow putting items into the working list and as children
  },
  onUpdate: () => {
    console.log('Questions updated');
  },
  onAdd: (event) => {
    console.log('Item added to working list', event);
  },
  remove: () => {
    console.log('Question removed');
  }
});

// Function to remove an item from the working list
const removeQuestion = (index) => {
  questions.value.splice(index, 1); // Remove the item by its index
};
</script>

<template>
  <div class="container">
    <!-- Types available to drag -->
    <div class="types">
      <section
        class="flex flex-col gap-1 w-300px h-300px m-auto rounded overflow-auto"
        ref="types_area"
      >
        <div
          v-for="type in types"
          :key="type"
          class="cursor-move h-30 bg-gray-500/5 rounded p-3  hover:bg-gray-300"
        >
          {{ type.title }}
        </div>
      </section>
    </div>

    <!-- Working list of questions -->

    <div class="working-list">
        
    <h2>{{ questions }}</h2>
      <section
        class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto"
        ref="items_area"
      >
        <div
          v-for="(question, index) in questions"
          :key="index"
          class="question-item"
        >
            <div class="item_header">
                <strong>{{ question.type.name }}</strong>
                <button @click="removeQuestion(index)">Remove</button><!-- Remove button -->
            </div>
            
            <section
                class="nested"
                style="border: 1px solid lightgray; padding: 10px; margin-top: 10px;"
                ref="items_area"
            >
            </section>
        </div>
      </section>
    </div>
    
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 20px;
}

.types,
.working-list {
  border: 1px solid #ccc;
  /* padding: 20px; */
  width: 300px;
  min-height: 200px;
}

.question-item {
  padding: 10px;
  border: 1px solid #000;
  margin: 10px 0;
}

.nested {
  /* margin-left: 10px; */
  min-height: 50px;
}

button {
  margin-left: 10px;
  padding: 5px;
  background-color: lightblue;
  border: none;
  cursor: pointer;
}
.item_header{
    display: flex;
    justify-content: space-between;
}
</style>
