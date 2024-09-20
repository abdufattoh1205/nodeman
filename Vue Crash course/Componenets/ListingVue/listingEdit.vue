<template>
    <form @submit.prevent="submitForm" class="w-screen ">
        <div class="card m-auto mt-5" style="width:18rem;">
          <div class="card-body">
            <div class="mb-3">
                <label class="form-label" for="">Employee Name</label>
                <input v-model="fullfill.name" type="text" class="form-control" placeholder="Employee Name...">
            </div>
            <div class="mb-3">
                <select v-model="fullfill.position" class="form-select" aria-label="Default select example">
                    <option selected value="">Select the Position</option>
                    <option value="office-manager">Office manager</option>
                    <option value="accountant">Accountant</option>
                    <option value="system-analyst">Systems Analyst</option>
                </select>
            </div>
            <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Review</label>
                    <textarea v-model="fullfill.review" placeholder="Review..." class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="mb-3">
                <select v-model="fullfill.salary" class="form-select" aria-label="Default select example">
                    <option selected value="">Select the Salary</option>
                    <option value="$100-$120/year">$100-$120/year</option>
                    <option value="$120-$150/year">$120-$150/year</option>
                    <option value="$150-$170/year">$150-$170/year</option>
                    <option value="$170-$200/year">$170-$200/year</option>
                </select>
            </div>
            <div class="text-center">
                <input  type="submit" class="btn btn-dark" value="Submit">
            </div>
          </div>
        </div>
    </form>
</template>

<script setup>

import {reactive, onMounted} from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification';
import { useRoute, useRouter } from 'vue-router';

const fullfill = reactive({
    name: '',
    position: '',
    review: '',
    salary: ''
})

const route = useRoute();
const router = useRouter();
const toast = useToast(); 

const jobId = route.params.id

const state = reactive({
    information: {}
})

const submitForm = async () => {
    const updatedFill = {
        name: fullfill.name,
        position: fullfill.position,
        review: fullfill.review,
        salary: fullfill.salary
    }

    try {
        const response = await axios.put(`http://localhost:3001/information/${jobId}`, updatedFill)
        router.push(`/information/${response.data.id}`)
        toast.success('Job successfully Edited')
    } catch (error) {
        console.log(error)
        toast.error('Job Editing was unsuccessfull')
    }
}


onMounted( async() =>{
    try {
        const response = await axios.get(`http://localhost:3001/information/${jobId}`)
        state.information = response.data
        fullfill.name = state.information.name
        fullfill.position = state.information.position
        fullfill.review = state.information.review
        fullfill.salary = state.information.salary
    } catch (error) {
        console.error(error)
    }
})


</script>