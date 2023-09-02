<template>
  <div class="welcome container">
    <p>Welcome</p>

    <div v-if = "showLogin">
        <LoginForm @login="enterChat"/>
        <p>No account yet? <span @click="showLogin = !showLogin">Sign up</span> here!</p>
    </div>
    <div v-else>
        <SignUpForm @signup="enterChat"/>
        <p>Already registed? <span @click="showLogin = !showLogin">Login</span> here!</p>

    </div>
  </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm.vue'
import LoginForm from '../components/LoginForm.vue'
import {ref} from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { SignUpForm, LoginForm },

    setup(){
        
        const showLogin = ref(true)
        const router = useRouter()

        const enterChat = () => {
            router.push({ name: "Chatroom"})
        }
        return {showLogin, enterChat}
    }
}
</script>

<style>
    .welcome{
        text-align:  center;
        padding: 20px 0 ;
    }

    /*form styles*/

    .welcome form{
        width: 300px;
        margin: 20px auto;

    }

    .welcome label{
        display: block;
        margin: 20px auto
    }

    .welcome input{
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #eee;
        outline: none;
        color: #999;
        margin: 10px auto;
        caret-color: #999;
        outline: none;
 

    }

    .welcome span{
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }

    .welcome button{
        margin: 20px auto
    }

    .welcome input:focus {
    border: 2px solid #4A90E2; /* Change the color as per your preference */
}
</style>