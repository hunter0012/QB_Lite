<script setup>
    import { provide } from 'vue';
    import userStore from '~/composables/store';
    provide("store", userStore());
</script>

<template>
    <HeaderComp/>
    <NavBarComp>
        <v-tabs-window-item value="editor">
            <EditorView/>
        </v-tabs-window-item>
        <v-tabs-window-item value="render">
            <RenderView class="page"/>
        </v-tabs-window-item>
    </NavBarComp>
</template>

<style scoped>
    /* .boxer {
        width: 100%;
    } */
    .page {
        width: 100%;
        background-color: aquamarine;
        flex: 1;
    }
    /* .tools_div{
        width: 200px;
        height: 100%;
    } */
    /* .render_div{
        width: 400px;
        height: 100%;
    } */
    /* .prop_div{
        width: 400px;
        height: 100%;
    } */
    /* .json_div{
        background-color: aquamarine;
        height: 150px;
        width: 150px;
    } */
</style>
  