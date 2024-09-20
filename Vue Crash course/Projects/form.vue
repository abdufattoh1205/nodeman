<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons' 
import { reactive, onMounted} from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { RouterLink } from 'vue-router'
import axios from 'axios'


const form = reactive({
    guestName: '',
    guestStatus: '',
})

const state = ({
    guestsList: [],
})

onMounted(async() => {
    const response = await axios.get('http://localhost:3002/guest')
    state.guestsList = response.data
    state.guestsList.forEach(e => {
        console.log(e.guest)
        form.guestName = state.guestsList.guest
    });
}) 



</script>

<template>
    <h1 class="m-3"> // Form</h1>
    <div>
        <form class="border-1 rounded-3xl w-25 m-auto mt-5">
            <div class="title logInform text-center">Login form</div>
            <div class="flex justify-center items-center gap-2 mt-3 px-2">
                <div class="w-10 bg-blue-950 h-8 rounded text-center flex align-items-center justify-center">
                    <FontAwesomeIcon :icon="faUser" class="text-white" />
                </div>
                <input type="text" class="form-control" placeholder="Username">
            </div>
            <div class="password flex justify-center items-center gap-2 mt-2 px-2">
                <div class="w-10 bg-blue-950 h-8 rounded text-center flex align-items-center justify-center">
                    <FontAwesomeIcon :icon="faLock" class="text-white"/>
                </div>
                <input type="password" class="form-control" placeholder="Password">
            </div>
            <p class="forget_password text-end text-blue-500 mt-2 my-2 px-2"><a href="#"><u>Forgot_Password?</u></a></p>
            <div class="text-center mt-2">
                <RouterLink to="/second" class="btn my-2 w-75 login-button text-white">Log in</RouterLink>
            </div>
            <RouterLink to="/listing" class="signup text-blue-500 w-100 text-center my-2"><a href="#"><u>Sign Up</u></a></RouterLink>
        </form>
    </div>
</template>

<style scoped>

.logInform{
    background-color: #6482AD ;
    padding: 20px 30px;
    border-top-left-radius: 20px; 
    border-top-right-radius: 20px; 
}

.login-button{
    background-color: #03346E;
}

form{
    background-color: #F5EDED;
}

</style>