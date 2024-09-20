<template>
    <div class="w-screen">

        <div class="card mt-5 m-auto" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title text-3xl">Name: {{ list.information.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted text-2xl">Position: {{ list.information.position }}</h6>
                <p class="card-text">
                    <h1>Review:</h1> 
                    {{ smallDescription }}
                    <div>
                        <button><u class="text-xl curson-pointer" @click="showFullDescription">{{ list.ischeck ? 'hide' : 'show' }}</u></button>
                        <div>
                            <RouterLink :to="'/information/edit/' + jobID" class="btn btn-dark my-3">Edit the Job</RouterLink>
                            <button @click="deletejob" class="btn btn-dark m-2">Delete the Job</button>
                        </div>
                    </div>
                </p>
                <h1 class="text-2xl">Salary: {{ list.information.salary }}</h1>
            </div>
        </div>
    </div>
        
</template>

<script setup>

import { reactive, onMounted, computed } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification';
import axios from 'axios'


const list = reactive({
    information: {},
    ischeck: false
})

const showFullDescription = () => {
    list.ischeck = !list.ischeck
}

const smallDescription = computed(() => {
    var description = list.information.review;
    if(description){

        if(!list.ischeck){
        description = description.substring(0, 130) + '...'
    } return description
    }
})

const route = useRoute();
const router = useRouter();
const toast = useToast();

const jobID = route.params.id

const deletejob = async() =>{

    try {
        await axios.delete(`http://localhost:3001/information/${jobID}`)
        router.push('/listing')
        toast.success('Job is deleted successfully')
    } catch (error) {
        console.error(error)
        toast.error('Job deleting process wasn\'t successfull')
    }

}


onMounted(async () =>{
    try {
        const response = await axios.get(`http://localhost:3001/information/${jobID}`)
        list.information = response.data 
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
})

</script>