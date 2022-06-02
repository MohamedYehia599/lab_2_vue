<template>
    <div class="d-flex justify-content-center mt-5">
        
      
  <div class="card" style="width: 18rem;">
  <div class="card-header">
    ID : {{id}}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">first name : {{first_name }}</li>
    <li class="list-group-item">last name : {{last_name}}</li>
    <li class="list-group-item">email : {{email}}</li>
  </ul>
</div>
</div>
    
</template>

<script>
import axios from 'axios'
    export default {
        name:'getUserApp',
        data(){
            return{
                id:0,
                first_name:'',
                last_name:'',
                email:''
            }
        },
        created(){
            this.getUser()

        },
        methods:{
        async    getUser(){
                this.id=this.$route.params.id
                    await axios
                    .get(`http://localhost:2000/users/${this.id}`)
                    .then((res)=>{
                        // console.log(res.data.email);
                        this.first_name=res.data.first_name
                        this.last_name=res.data.last_name
                        this.email=res.data.email
                    }).catch(err=>{
                        console.log(err.message);
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>