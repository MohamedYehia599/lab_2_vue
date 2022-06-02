<template>
    <div>
        delete user
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'deleteUserApp',
        data(){
            return{
                id:0
            }
        },
        created(){
            this.deleteUser()
        },
        methods:{
        async    deleteUser(){
                this.id=this.$route.params.id
                
                await axios
                .delete(`http://localhost:2000/users/${this.id}`)
                .then(()=>{
                    window.location.href = '/users'
                    
                    
                }).catch((err)=>{
                    
                    console.log(err.message);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>