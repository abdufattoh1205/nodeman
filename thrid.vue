<template>
    <div id="app">
        <input v-model="firstNumber" type="number">
        <select v-model="elements" name="elements" id="elements">
            <option value="plus">+</option>
            <option value="substract">-</option>
            <option value="multiplication">*</option>
            <option value="devision">/</option>
        </select>
        <input v-model="secondNumber" id="second" type="number">
        <span>=</span>
        <span>answer: {{ calculateResult() }} </span>
    </div>
</template>
<script setup>

import { ref } from 'vue';

const firstNumber = ref(0);

const secondNumber = ref(0);
const elements = ref('plus');

    const calculateResult = () => {
    switch (elements.value){
        case 'plus':
            return firstNumber.value + secondNumber.value;
        case'substract':
            return firstNumber.value - secondNumber.value;
        case 'devision':
        if (secondNumber.value !== 0) {
                return firstNumber.value / secondNumber.value;
            } else {
                return 'Error: Division by zero';
            }
        case 'multiplication':
            return firstNumber.value * secondNumber.value
    }
}

</script>