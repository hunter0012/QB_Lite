<script setup>
    import { inject } from 'vue';
    const { 
        items,
        selected_idx,
        select_item,
        set_item_title 
    } = inject("store");
</script>

<template>
    <ul class="list">
        <v-text-field
            v-for="(item, index) in items" 
            :key="item.id"
            class="item"
            v-model="item.title"
            @focus="select_item(index)"
            @input="event => set_item_title(selected_idx, event.target.value)"
        />
    </ul>
</template>

<style scoped>
    .list{
        display: flex;
        flex-direction: column;
        padding: 5px;
        /* gap: 5px; */
        border-style: dotted;
        border-width: 2px;
    }
    .item{
        border-style: solid;
        border-width: 1px;
        height: 70px;
    }
</style>
