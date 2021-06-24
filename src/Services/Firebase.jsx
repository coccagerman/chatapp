import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCeZ7gLeGTYs61wiQnSXQ8Jrugws23Gy34',
  authDomain: 'chatapp-e77ad.firebaseapp.com',
  projectId: 'chatapp-e77ad',
  storageBucket: 'chatapp-e77ad.appspot.com',
  messagingSenderId: '142369261110',
  appId: '1:142369261110:web:7b938f9f26007afd90ba97'
})

export const auth = firebase.auth()
export const database = firebase.firestore(app).collection('messages')

