<template>
    <div>
        <h1 v-bind="data" v-show="check">Donat</h1>
        <input type="text" v-model="copy">
        <button @click="move">copy</button>
        <span v-bind="data">{{ nig }}</span>
        <p>{{ nig === 'das' || nig === 'asd' ? 'yes' : 'no' }}</p>
    </div>
</template>

<script setup>

    import { onMounted, ref } from 'vue'

    const copy = ref('')
    var nig = ref('')
    var check = true
    
    const move = () =>{
        return  nig.value = copy.value
    }

    const data = {
                id: 'container',
                class: 'wrapper',
                count: ref(1),
            }
        
            const cunt = data.count;
            
    onMounted(() => {

        console.log(cunt.value)
        cunt.value = 2

    })

</script>

<style>
/* 
.wrapper{
    color: red;
}

#container{
    color: blue;
} */

</style>