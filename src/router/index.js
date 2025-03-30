import Vue from "vue";
import VueRouter from 'vue-router';

import LayoutHome from "@/layouts/LayoutHome.vue";
import LandingPage from "@/views/Home.vue";
import UnderConstruction from "@/views/UnderConstruction.vue";

Vue.use(VueRouter)

const routes = [
    { path: '*', redirect: '/' },
    { path: '/', name: 'EmConstrucao',component: UnderConstruction },
    { 
        path: '/home', 
        component: LayoutHome ,
        children: [
            {
                name: 'home',
                path: '',
                component: LandingPage
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router;