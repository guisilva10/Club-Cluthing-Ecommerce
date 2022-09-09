import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAgR_2XLfEqkAqGP_hZwuqFjZr12e5BfWs',
  authDomain: 'club-ecommerce-9cbfa.firebaseapp.com',
  projectId: 'club-ecommerce-9cbfa',
  storageBucket: 'club-ecommerce-9cbfa.appspot.com',
  messagingSenderId: '987103074568',
  appId: '1:987103074568:web:22006aa60afb5d3ce6b4bd'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
