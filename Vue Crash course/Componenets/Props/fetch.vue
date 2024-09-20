<template>
    <card bg="redback">
        <h1>{{ title }}</h1>
    </card>
    <card bg="blueback">
        <h1>{{ bottomTitle }}</h1>
    </card>
</template>

<script setup>

import { defineProps } from 'vue';
import card from './card.vue'

defineProps({
    title:{
        type: String,
        default: 'hello world',
    },
    bottomTitle:{
        type: String,
        default: 'how is the world',
    },
})

</script>

<style scoped>

.redback{
    background-color: #800000;
    color: white;
    padding: 20px;
}

.blueback{
    background-color: #1F316F;
    color: white;
    margin-left: 20px;
    padding: 20px;
}

</style>