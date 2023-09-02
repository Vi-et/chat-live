import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA3ja6GFDxSZj-ZkV9y3EpxLyErr0S078k",
    authDomain: "vuejs-project-83920.firebaseapp.com",
    projectId: "vuejs-project-83920",
    storageBucket: "vuejs-project-83920.appspot.com",
    messagingSenderId: "348849073681",
    appId: "1:348849073681:web:8749929379ec769a3a0bb0"
  };

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFireStore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFireStore, timestamp, projectAuth}
   