<template>
    <props bg="title">
        <h1>{{ title }}</h1>
    </props>

    <props bg="name">
        <h1>{{ name }}</h1>
    </props>

</template>

<script setup>

    import { defineProps } from 'vue';

    defineProps({
        title: {
            type: String,
            default: 'hello world'
        },
        name: {
            type: String,
            default: 'world'
        }
    })

</script>

<style scoped>

/* .title{
    color: #3795BD;
}

.name{
    color: #914F1E;
} */



</style>