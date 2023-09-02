import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/main.css"

import { projectAuth } from './firebase/config'

let app

console.log("App là: ", app)

projectAuth.onAuthStateChanged(() =>{
    console.log(
        "Đang ở đây nè"
    )
    if (!app){
        app = createApp(App)
            .use(router)
            .mount('#app')

        console.log("Rơi vào trường hợp không có app")
    } else {
        console.log(app)
    }
})




