<template>
  <nav v-if="user">
    <div>
        <p> {{user.displayName}} </p>
        <p class="email"> {{user.email}} </p>
    </div>
        <button @click="handleLogout">Logout</button>

  </nav>
</template>

<script>

import useLogout from "../composables/useLogout"
import getUser from "../composables/getUser"
import { useRouter} from 'vue-router'
import {ref} from 'vue'

export default {

    setup(){
        const {error, logout} = useLogout()
        const  user  = getUser()
        const router = useRouter()


        const handleLogout = async() =>{
            await logout()
            router.push({name: "Welcome"})
            if(!error.value){
                console.log("User logged out")
            }


        }

        return {handleLogout, user}
    }
}
</script>

<style>
    nav{
        padding:20px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        align-items: center;
    }

    nav p{
        margin: 2px auto;
        font-size: 16px;
        color: #444
    }

    nav p.email{
        font-size: 14px;
        color: #999
    }
</style>