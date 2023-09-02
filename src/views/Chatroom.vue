<template>
    <div class="container">
        <Navbar/>
        <ChatWindow/>
        <newChatForm/>
    </div>
</template>

<script>
import newChatForm from '@/components/newChatForm.vue'
import ChatWindow from '@/components/ChatWindow.vue'

import Navbar from "../components/Navbar.vue"
export default {
    components:{
        Navbar, newChatForm, ChatWindow
    }
}
</script>

<style>

</style>