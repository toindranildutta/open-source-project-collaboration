// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey:"AIzaSyDFxw9Oj0MK6f-jCkOCmAZCbxLz3_ZTDNw",
    authDomain: "ospc-81052.firebaseapp.com",
    projectId: "ospc-81052",
    storageBucket: "ospc-81052.appspot.com",
    messagingSenderId: "855069481557",
    appId: "1:855069481557:web:e7f11e15e833e87ca7d2dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);