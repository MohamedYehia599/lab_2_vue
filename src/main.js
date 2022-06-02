import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'
import helloworld from './components/HelloWorld.vue'
import getUsersApp from './components/pages/getUsers.vue'
import createUserApp from './components/pages/createUser.vue'
import getUserApp from './components/pages/getUser.vue'
import updateUserApp from './components/pages/updateUser.vue'
import deleteUserApp from './components/pages/deleteUser.vue'
const routes=[
    {
        path:'',
        component:helloworld
    },
    {
        path:'/users',
        component:getUsersApp
    },
    {
        path:'/users/:id',
        component:getUserApp
    },
    {
        path:'/users/create',
        component:createUserApp
    },
    {
        path:'/users/:id/edit',
        component:updateUserApp
    },
    {
        path:'/users/:id/delete',
        component:deleteUserApp
    }
        
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
