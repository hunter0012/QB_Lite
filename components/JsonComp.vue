<script setup>
    import { inject } from 'vue';
    const { 
        json_obj 
    } = inject("store");
</script>

<template>
    <div class="json_div">
        {{ json_obj }}
    </div>
</template>

<style scoped>
    .container {
        background-color: aqua;
        flex: 1;
        overflow: scroll;
        border-style: solid;
        border-width: 1px;
    }
    .json_div{
        flex: 1;
        /* width: 400px; */
        border-style: solid;
        border-width: 2px;
        border-color: lightgray;
        font-size: 12px;
        overflow: scroll;
    }
    /* .jsondiv {
        width: 150px;
    } */
</style>
