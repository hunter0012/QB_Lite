<script setup>
    import { inject } from 'vue';
    const { types, add_item } = inject("store");
</script>

<template>
    <ul class="list">
        <v-btn
            class="item"
            v-for="value in types" 
            :key="value.name" 
            @click="add_item(value.name)"
        >
            {{ value.name }}
        </v-btn>
    </ul>
</template>

<style scoped>
    .list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        gap: 10px;
        background-color: lightblue;
    }
    .item {
        width: 90%;
    }
</style>
