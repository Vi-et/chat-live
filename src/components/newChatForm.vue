<template>
  <form action="">
    <textarea 
        placeholder='Type a message and hit enter to send... '
        v-model="message"
        @keypress.enter.prevent="handleSubmit"
    >

    </textarea>
    <div class="error"> {{error}} </div>
  </form>
</template>

<script>

import { ref } from 'vue'
import getUser from '@/composables/getUser'
import useCollection from '@/composables/useCollection'
import { timestamp } from '../firebase/config'

export default {
    setup(){
        const message = ref('')
        const user = getUser()
        const {error, addDoc} = useCollection('messages')

        const handleSubmit = async () => {
            const chat = {
                message : message.value,
                name: user.value.displayName,
                createdAt: timestamp()
            }

        await addDoc(chat)

        if(!error.value){
            message.value = ""  
        }

        }
    
    return {message , handleSubmit, error}
    }
}
</script>

<style scoped>
    form{
        margin: 10px
    }

    textarea{
        width: 100%;
        margin-bottom: 10px;
        padding: 10px;
        box-sizing: border-box;
        border: 0px;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }
</style>