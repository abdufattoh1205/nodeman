<template>
    <div class="card my-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-3xl">Name: {{ list.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted text-2xl">Position: {{ list.position }}</h6>
            <p class="card-text">
                <h1 class="text-xl">Review: </h1>
                {{ hideFullReview }}
                <button @click="showFullReview"><u class="text-xl">{{ ischeck ? 'Hide' : 'Show' }}</u></button>
            </p>
            <button class="text-2xl mt-3">Salary {{ list.salary }}</button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, computed  } from 'vue';

const ischeck = ref(false)

const showFullReview = () => {
    ischeck.value = !ischeck.value
}

const hideFullReview = computed(() => {

    var review = props.list.review 

    if (!ischeck.value) {
        review = review.substring(0, 130) + '...'
    }
    return review

})


const props = defineProps({
    list: Object
})


</script>