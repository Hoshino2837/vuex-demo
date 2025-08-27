import { createRouter,createWebHashHistory } from "vue-router";
import home from "@/view/home.vue";
const routes = [
    {
        path:'/',
        name:'home',
        component:home
    },
    {
        path:'/about',
        name:'about',
        component:()=>import("../view/about.vue")
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router;