<template>
    <div>
        <h1>{{ title }}</h1>
        <h1>{{ Subtitle }}</h1>
    </div>
</template>

<script setup>

defineProps({
    title:{
        type: String,
        default: 'Default Title'
    },

    Subtitle:{
        type: String,
        default: 'Dafault Subtitle'
    }
})



</script>