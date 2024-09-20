import { createRouter, createWebHistory } from "vue-router";
import addGuest from "@/projects/addGuest.vue";
import listings from "@/components/listings.vue/listings.vue";
import second from "@/components/second.vue";
import notFoundView from '@/views/notFoundView.vue'
import First from "@/components/first.vue";
import listingSeeMore from "@/components/listings.vue/listingSeeMore.vue";
import ListingAdd from "@/components/listings.vue/listingAdd.vue";
import listingEdit from "@/components/listings.vue/listingEdit.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/listing',
            name: 'list',
            component: listings
        },
        {
            path: '/addguest',
            name: 'addguest',
            component: addGuest
        },
        {
            path: '/addjobs',
            name: 'addJob',
            component: ListingAdd
        },
        {
            path: '/second',
            name: 'second',
            component: second
        },
        {
            path: '/home',
            name: 'home',
            component: First
        },
        {
            path: '/information/:id',
            name: 'control',
            component: listingSeeMore
        },
        {
            path: '/information/edit/:id',
            name: 'listing-edit',
            component: listingEdit
        },
        {
            path: '/:catchAll(.*)',
            name: 'Not-found',
            component: notFoundView
        }
    ]
})

export default router
