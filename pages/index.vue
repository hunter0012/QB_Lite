<script setup>
    import { provide } from 'vue';
    import userStore from '~/composables/store';
    provide("store", userStore());
</script>

<template>
    <HeaderComp/>
    <NavBarComp>
        <v-tabs-window-item value="editor">
            <EditorView />
        </v-tabs-window-item>
        <v-tabs-window-item value="render">
            <RenderView />
        </v-tabs-window-item>
    </NavBarComp>
    <!-- <OptionsComp/> -->
</template>

<style scoped>
    .container {
        width: 100%;
    }
    
    .tools_div{
        /* background-color: rgb(13, 181, 125); */
        width: 200px;
        height: 100%;
    }
    .render_div{
        /* background-color: aquamarine; */
        width: 400px;
        height: 100%;
    }
    .prop_div{
        /* background-color: rgb(104, 157, 139); */
        width: 400px;
        height: 100%;
    }
    .json_div{
        background-color: aquamarine;
        /* flex: 1; */
        height: 150px;
        width: 150px;
    }
</style>
  