<template>
    <div>
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
    
    
    
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item active">
                <router-link class="nav-link" to="/users" >Users </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/users/create">create User</router-link>
            </li>
            
        </ul>
        

    </div>
</nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>