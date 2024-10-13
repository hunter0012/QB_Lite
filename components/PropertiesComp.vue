<script setup>
    import { inject } from 'vue';
    const { 
        selected_idx,
        current_item,
        set_item_title
    } = inject("store");
</script>

<template>
    <div class="container">
        <!-- <div>{{ props.selected_idx }}</div> -->
        <!-- <v-text-field v-model="firstName" :rules="rules"></v-text-field> -->
        <v-text-field v-model="current_item.title" @input="event => set_item_title(selected_idx, event.target.value)" />
    </div>
</template>

<style scoped>
    .container {
        border-radius: 5px;
        border-style: solid;
        border-width: 1px;
    }
</style>
  