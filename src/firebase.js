// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8sBs_EVEZKedIcWdhF4JCKZJWcs60-Bo",
  authDomain: "admin-tfa.firebaseapp.com",
  projectId: "admin-tfa",
  storageBucket: "admin-tfa.firebasestorage.app",
  messagingSenderId: "867268746908",
  appId: "1:867268746908:web:89a68fa09ab92a268c9759",
  measurementId: "G-KBFW42WWMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);