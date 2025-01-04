// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQMJ0tfRn-dOXFX84Ce3-EOd5uVY6o6pI",
  authDomain: "netflixgpt-d859f.firebaseapp.com",
  projectId: "netflixgpt-d859f",
  storageBucket: "netflixgpt-d859f.firebasestorage.app",
  messagingSenderId: "1017633264998",
  appId: "1:1017633264998:web:1d9ee67ff20e98a692e4a7",
  measurementId: "G-H2W8RM5479",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
