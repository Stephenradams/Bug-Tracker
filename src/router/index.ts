import {createRouter, createWebHistory} from "vue-router";
import WelcomeView from "@/views/WelcomeView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
    {path: '/', component: WelcomeView},
    {path: '/about', component: AboutView}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
