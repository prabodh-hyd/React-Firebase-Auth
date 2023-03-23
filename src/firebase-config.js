// import firebase from 'firebase';
import { initializeApp } from "@firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC6tvkVrUx5m6WFA7tzYk3g4YgycQbxIyc",
    authDomain: "react-auth-firebase-64613.firebaseapp.com",
    projectId: "react-auth-firebase-64613",
    storageBucket: "react-auth-firebase-64613.appspot.com",
    messagingSenderId: "14293290466",
    appId: "1:14293290466:web:4758eda93fbb198ab7fdbb",
    measurementId: "G-RMWP08LMR0"
  };

 export const firebasApp = initializeApp(firebaseConfig);
