<script setup lang="ts">
    import { ref, inject } from 'vue';
    const { items } = inject("store");

    const tab = ref("editor")
</script>

<template>
        <v-tabs v-model="tab" bg-color="primary">
            <v-tab value="editor">Editor</v-tab>
            <v-tab value="render">Render</v-tab>
        </v-tabs>
        <v-tabs-window v-model="tab">
            <slot/>
        </v-tabs-window>
</template>

<style scoped>
    .container {
        background-color: rgb(245, 199, 50);
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .nav_div{
        display: flex;
        flex-direction: row;
        gap: 4px;
    }
</style>
  