<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>email</th>
                    <th>....</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    
                    <td>{{user.id}}</td>
                    <td>{{user.first_name}}</td>
                    <td>{{user.last_name}}</td>
                    <td>{{user.email}}</td>
                    <td>
                        <router-link class="btn btn-danger" :to="`/users/${user.id}/delete`">Delete</router-link>
                        <router-link class="btn btn-primary mx-3" :to="`/users/${user.id}/edit`">update</router-link>
                        <router-link class="btn btn-success" :to="`/users/${user.id}`">show</router-link>
                    </td>
                </tr>
                
            </tbody>
        </table>
        
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'getUsersApp',
        data(){
            return{
                users:[]
            }
            
        },
        created(){
                this.getAllusers()
            },
        methods:{
            async getAllusers(){
                await axios
                .get('http://localhost:2000/users')
                .then(res=>{
                   
                    this.users=res.data
                })
                .catch(err=>{
                    console.log(err);
                })
            }
            
        }

    }
</script>

<style lang="scss" scoped>

</style>