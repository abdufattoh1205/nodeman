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
                    <option selected>Select the Position</option>
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
                    <option selected>Select the Salary</option>
                    <option value="office-manager">$100-$120/year</option>
                    <option value="office-manager">$120-$150/year</option>
                    <option value="office-manager">$150-$170/year</option>
                    <option value="office-manager">$170-$200/year</option>
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

import router from '@/router';
import axios from 'axios';

import { reactive } from 'vue'

const fullfill = reactive({
    name: '',
    position: '',
    review: '',
    salary: '',
})

const  submitForm = async () => {
    const newfill = {
        name: fullfill.name,
        position: fullfill.position,
        review: fullfill.review,
        salary: fullfill.salary
    }

    try {
        const response = await axios.post('http://localhost:3001/information/', newfill);

        router.push (`/information/${response.data.id}`)
    } catch (error) {
        console.error(error)

    }
};




</script>