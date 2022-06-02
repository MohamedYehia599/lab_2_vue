<template>
   
       <div class="my-5">
    <form action="" class="my-5" @submit.prevent="updateUser">
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Enter your First name </label>
  <input v-model="formValues.first_name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="john">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Enter your Last name </label>
  <input v-model="formValues.last_name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="wick">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Enter your  Email address</label>
  <input v-model="formValues.email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
    <button type="submit" class="btn btn-success my-3">submit</button>
</form>

     </div>
    
    
</template>

<script>
import axios from 'axios'
    export default {
        name:'updateUserApp',
        data(){
            return{
                id:0,
                formValues:{
                    first_name:'',
                    last_name:'',
                    email:''
                }

            }
            
        },
        created(){
                this.getUser()
            },
        methods:{
            updateUser(){
                this.id=this.$route.params.id
                axios.put(`http://localhost:2000/users/${this.id} `,this.formValues)
                .then(()=>{
                    window.location.href = '/users'
                })
                .catch(err=>{
                    console.log(err.message);
                })
            },
           
                async    getUser(){
                this.id=this.$route.params.id
                    await axios
                    .get(`http://localhost:2000/users/${this.id}`)
                    .then((res)=>{
                        // console.log(res.data.email);
                        this.formValues.first_name=res.data.first_name
                        this.formValues.last_name=res.data.last_name
                        this.formValues.email=res.data.email
                    }).catch(err=>{
                        console.log(err.message);
                    })
            }
            }
        }

    
</script>

<style lang="scss" scoped>

</style>