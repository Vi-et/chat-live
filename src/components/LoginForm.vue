<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Email" v-model="email">
    <input type="text" required placeholder="Password" v-model="password">
    <div class="error"> {{ error }}</div>
    <button>Login</button>   
  </form>
</template>

<script>

import {ref} from 'vue'
import useLogin from '../composables/useLogin'

export default {
    setup(props, context){

        const email = ref('')
        const password = ref('')

        const {error, login} = useLogin()

        const handleSubmit = async () => {
            await login(email.value, password.value)

            if(!error.value){
              console.log("User logged in")
              context.emit('login')
            }

        }

        return { email, password, handleSubmit, error}
    }
}
</script>

<style>

</style>