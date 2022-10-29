import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAg6BfkDuzhL_cjLn-B4wlmVQJTSxlGe34",
    authDomain: "backend-beershop.firebaseapp.com",
    projectId: "backend-beershop",
    storageBucket: "backend-beershop.appspot.com",
    messagingSenderId: "962011552325",
    appId: "1:962011552325:web:ad092b2a2ced93cbf4e12c",
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)