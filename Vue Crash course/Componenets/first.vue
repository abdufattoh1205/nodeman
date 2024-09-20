<template>
    <h1 class="m-3"> // Home</h1>
    <div class="w-25 m-auto">
        <h3 class="w-100">Check the guests from list</h3>
        <input class="d-inline mr-3 form-control w-75" type="text" v-model="checkingList" placeholder="CheckTheGuests">
        <button class="btn btn-dark" @click="check">Check</button>
        <h2>Permit: {{ respond[0] }}</h2>
         <h3><b>Status: {{ respect[0] }}</b></h3>
    </div>
</template>

<script setup>

import axios from 'axios';
import { ref, onMounted } from 'vue'

const respond = ref([])
const respect = ref([])
const list = ref([])

onMounted( async() => {

    try {
        const response = await axios.get('http://localhost:3002/guest')
        list.value = response.data
        
    } catch (error) {
        console.error(error)
    }
})

const checkingList = ref('')

const check = () => {
    const allowed = 'Allowed'
    const notAllowed = 'not Allowed'
    const black = 'Black'

    let found = false

    for(let i = 0; i < list.value.length; i++){

        const guestLower = list.value[i].guest.toLowerCase()
        const checkingListLower = checkingList.value.toLowerCase()

        if(guestLower === checkingListLower){
            found = true;
            if(list.value[i].status === 'Black'){
                respond.value.unshift(notAllowed)
                respect.value.unshift(black)
                console.log('Black Swift')
            } else {
                respect.value.unshift(list.value[i].status)
                respond.value.unshift(allowed)
            }
        }
        if(!found){
            respond.value.unshift(notAllowed)
            respect.value.unshift('')
        }
    }


    checkingList.value = ''

}

</script>

<style>
/* 
body{
    background-color: #f1f1f1;
}

button{
    width: 120px;
    border: 2px solid white;
    color: white;
    cursor: pointer;
    margin: 0px 20px;
    height: 35px;
    background-color: #5B99C2;
    border-radius: 10px;
    outline: none;
}

button:hover{
    opacity: 0.7;
}

input{
    height: 35px;
    font-size: 15px;
    outline: none;
} */


</style>
