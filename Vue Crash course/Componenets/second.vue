<template>
    <h1 class="m-3"> // About</h1>
    <div>
        <div class="flex justify-center w-25 m-auto gap-3">
            <input placeholder="Add Product" class="form-control "type="text" id="name" v-model="whoareyou">
            <button @click="submit()" class="btn btn-dark w-32" type="button">add</button>
        </div>
         <h2 v-for="(product, index) in products" :key="index" class="mt-3 w-25 m-auto">
            <span>{{  product }}</span>
            <button @click="deleteTask(index)" class="btn btn-dark ml-3" >remove</button>
         </h2>
    </div>                           
</template>

<script setup>

import {ref} from 'vue'

const whoareyou = ref('')
const products = ref(['olma', 'sut', 'yog', 'lavlagi']);

const submit = () => {
    if(whoareyou.value !== ''){
        products.value.push(whoareyou.value);
        whoareyou.value = '';
    }else if(whoareyou.value === ''){
        products.length = 3;
        console.log(whoareyou.value)
    }  
}

const deleteTask = (index) => {
    products.value.splice(index, 1);
}

</script>

