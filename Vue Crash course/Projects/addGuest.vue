<template>
    <div class="w-screen h-60 flex items-center justify-center">
        <form @submit.prevent="submitform">
            <label class="text-2xl" for="">Guest Name:</label>
            <input v-model="addingGuest.guestName" class="form-control" placeholder="Enter Guest name..." type="text">
            <label for="" class="text-2xl mt-2">Guest Status</label>
            <select v-model="addingGuest.guestStatus" class="form-select" aria-label="Default select example">
                <option class="dropdown-item" value="" >Select the Status</option>
                <option class="dropdown-item" value="casual">Casual</option>
                <option class="dropdown-item" value="VIP">VIP</option>
                <option class="dropdown-item" value="Black">Black</option>
                <option value="" disabled>Coming Soon...</option>
            </select> 
            <input type="submit" class="btn btn-dark mt-2" value="submit" >
        </form>
    </div>
</template>

<script setup>

import axios from 'axios';
import {reactive} from 'vue'
import { useToast } from 'vue-toastification';

const addingGuest = reactive({
    guestName: '',
    guestStatus: '',
})

const toast = useToast()

const submitform = async() => {

    const newGuest = {
        guest: addingGuest.guestName,
        status: addingGuest.guestStatus,
    }
    if(newGuest.guest !== '' && newGuest.status !== ''){
        try {
            toast.success('Successfully registered')
            
            const response = await axios.post('http://localhost:3002/guest', newGuest)
            addingGuest.guestName = ''
            addingGuest.guestStatus = ''
        } catch (error) {
            
            console.error(response.data)
        }

    }else{
        toast.error('Please fill all fields')
    }
}



</script>
