// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBtvrnySJRRJfyWY3V4nDlS9G5CQ8M_7QA",
  authDomain: "signin-e4b59.firebaseapp.com",
  projectId: "signin-e4b59",
  storageBucket: "signin-e4b59.appspot.com",
  messagingSenderId: "761700826271",
  appId: "1:761700826271:web:7e3877ba20adbe275176aa",
  measurementId: "G-MR2QK5M5QH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth()
const provider=new GoogleAuthProvider()
export {auth,provider,db}