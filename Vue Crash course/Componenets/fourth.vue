<template>
    <div>
        <!-- <button @keyup.enter="click" >click</button> -->
        <div>
            <input
                type="checkbox"
                v-model="toggle"
                @change="toggle.value === true" />
            <label v-if="toggle" for="checkit">True</label>
            <label v-else for="checkit">False</label>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const toggle = ref()

    toggle.value = false

    console.log(toggle.value)
    
</script>