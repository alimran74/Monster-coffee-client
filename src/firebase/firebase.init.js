// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEV8jEPjM6x57RpqLjEEVAYsrYoh-Dkfg",
  authDomain: "coffee-store-app-7bd48.firebaseapp.com",
  projectId: "coffee-store-app-7bd48",
  storageBucket: "coffee-store-app-7bd48.firebasestorage.app",
  messagingSenderId: "426407796131",
  appId: "1:426407796131:web:1f31fe127fe0c753734e16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);