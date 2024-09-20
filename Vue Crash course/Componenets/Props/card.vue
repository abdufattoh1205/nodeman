<template>
    <div :class="`${bg}`">
        <slot></slot>
    </div>
</template>

<script setup>

    import { defineProps } from 'vue';

    defineProps({
        bg:{
            type: String,
            default: '#FF8343'
        }
    })

</script>