<script setup lang="ts">
    import { ref } from 'vue';
    // const { items } = inject("store");

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
    .page{
        background-color: aquamarine;
    }
</style>
  