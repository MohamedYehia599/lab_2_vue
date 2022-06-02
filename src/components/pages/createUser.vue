<template>
    <div class="my-5">
    <form action="" class="my-5" @submit.prevent="createUser">
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
        name:'createUserApp',
        data(){
            return{
               formValues: {
                first_name:'',
                last_name:'',
                email:''
                }
            }
        },
       
        methods:{
            createUser(){
                axios.post('http://localhost:2000/users',this.formValue)
                .then(()=>{
                    window.location.href = '/users'
                })
                .catch(err=>{
                    console.log(err.message);
                })
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>