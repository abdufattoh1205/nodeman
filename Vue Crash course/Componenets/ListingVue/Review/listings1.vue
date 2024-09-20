<template>
    <div class="grid grid-cols-3 gap-3 my-4"> 
       <listing1 v-for="list in information.slice(0 , limit || information.length)" :list="list" />
    </div>
</template>

<script setup>

import { ref, defineProps } from 'vue'
import info from '../../props/data.json'
import listing1 from './listing1.vue'

const information = ref(info)

defineProps({
    limit: Number
})



</script>