<!-- <script setup>
    import { provide } from 'vue';
    import userStore from '~/composables/store';
    provide("store", userStore());
</script> -->

<template>
    <div class="container">
        <TypesComp class="types_div" />
        <ItemsComp class="items_div" />
        <PropertiesComp class="prop_div" />
        <JsonComp class="json_div" />
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: row;
        flex: 1;
        /* background-color: aquamarine; */
    }
    
    .types_div{
        /* background-color: rgb(13, 181, 125); */
        /* width: 200px; */
        height: 100%;
    }
    .items_div{
        /* background-color: aquamarine; */
        width: 250px;
        height: 100%;
    }
    .prop_div{
        /* background-color: rgb(104, 157, 139); */
        width: 250px;
        height: 100%;
    }
    .json_div{
        /* background-color: aquamarine; */
        /* flex: 1; */
        /* width: 150px; */
        height: 400px;
    }
</style>
  