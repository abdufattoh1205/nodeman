<template>
   <div class="card mt-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title text-3xl">Name: {{ list.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted text-2xl">Position: {{ list.position }}</h6>
        <p class="card-text">
            <h1>Review:</h1> 
            {{ smallDescription }}
            <div>
                <button><u class="text-xl curson-pointer" @click="showFullDescription">{{ isCheck ? 'Hide' : 'Show'  }}</u></button>
                <div>
                    <RouterLink :to="'/information/' + list.id" class="btn btn-dark my-3">See more</RouterLink>
                </div>
            </div>
        </p>
        <h1 class="text-2xl">Salary: {{ list.salary }}</h1>
    </div>
</div>
</template>

<script setup>

import { defineProps, ref, computed } from 'vue'
import { RouterLink } from 'vue-router';
 
const isCheck = ref(false)

const showFullDescription = () => {
    isCheck.value = !isCheck.value
}


const smallDescription = computed(() =>{
    var description = props.list.review

    if (!isCheck.value) {
        description = description.substring(0, 130) + '...'
    }
    return description
})


var props = defineProps({
    list: Object
})

</script>