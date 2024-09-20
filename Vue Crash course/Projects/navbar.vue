<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <RouterLink 
      :class="[
        isActiveLink('/listing') 
        ? 'bg-dark text-white rounded-2 px-3 py-1' 
        : 'hover:bg-dark', 
        'navbar-brand', 
        'cursor-pointer']" 
      to="/listing">Listing</RouterLink>
    <RouterLink 
    :class="[
        isActiveLink('/home') 
        ? 'bg-dark text-white rounded-2 px-3 py-1' 
        : 'hover:bg-dark', 
        'navbar-brand', 
        'cursor-pointer']"  
        to="/home">home</RouterLink>
    <RouterLink 
        :class="[
        isActiveLink('/second') 
        ? 'bg-dark text-white rounded-2 px-3 py-1' 
        : 'hover:bg-dark', 
        'navbar-brand', 
        'cursor-pointer']"  to="/second">About</RouterLink>
    <RouterLink to="/addguest" 
    :class="[
        isActiveLink('/addguest') 
        ? 'bg-dark text-white rounded-2 px-3 py-1' 
        : 'hover:bg-dark', 
        'navbar-brand', 
        'cursor-pointer']">add guest</RouterLink>
            <RouterLink to="/addjobs" 
    :class="[
        isActiveLink('/addjobs') 
        ? 'bg-dark text-white rounded-2 px-3 py-1' 
        : 'hover:bg-dark', 
        'navbar-brand', 
        'cursor-pointer']">Add Jobs</RouterLink>
  </div>
</nav>
</template>

<script setup>

import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath
}

</script>
