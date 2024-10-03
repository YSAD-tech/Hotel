import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Rooms from '../components/Rooms.vue'
import Services from '../components/Service.vue'
import Activities from '../components/Activities.vue'
import Contact from '../components/Contact.vue'

const routes =[
    {path:"/", component:Home},
    {path:"/rooms", component:Rooms},
    {path:"/services", component:Services},
    {path:"/activities", component:Activities},
    {path:"/contact", component:Contact}
]
export const router = createRouter({
    history:createWebHashHistory(),
    routes
})