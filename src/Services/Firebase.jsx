import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBhesdZtKr7A44zmXm6iw9m-QljGsre_cM",
    authDomain: "chatapp-464b6.firebaseapp.com",
    projectId: "chatapp-464b6",
    storageBucket: "chatapp-464b6.appspot.com",
    messagingSenderId: "792197748178",
    appId: "1:792197748178:web:ce1b27a39c220b418e640b"
  }

firebase.initializeApp(config)
export const auth = firebase.auth
export const db = firebase.database()
  
