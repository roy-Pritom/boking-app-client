// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbj81GZZKUDFm46l9BD-9sP6ew8bLnGUg",
  authDomain: "booking-app-cd451.firebaseapp.com",
  projectId: "booking-app-cd451",
  storageBucket: "booking-app-cd451.appspot.com",
  messagingSenderId: "461112597048",
  appId: "1:461112597048:web:101ad87a063f561655e4cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;