<template>
    <h1 class="m-3"> // Listing</h1>
    <div v-if="state.isLoading" class="text-center">
        <PulseLoader />
    </div>

    <div v-else class="grid grid-cols-3 gap-5">
        <listing v-for="list in state.information.slice(0, limit || state.information.length)" :list="list" />
    </div>
</template>

<script setup>

import { defineProps, reactive, onMounted  } from 'vue'
import listing from './listing.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';


const state = reactive({
    information: [],
    isLoading: true
})


defineProps({
    limit: Number
})

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:3001/information')
        state.information = response.data
    } catch (error) {
        console.error(error)
    }finally{
        state.isLoading = false
    }
})

</script>