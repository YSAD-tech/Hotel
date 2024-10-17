import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/home.vue'
import Rooms from '../components/rooms.vue'
import Services from '../components/service.vue'
import Activities from '../components/activities.vue'
import Contact from '../components/contact.vue'

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