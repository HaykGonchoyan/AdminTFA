// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyCte0QfFeajcwnKA6EWGh9MgUUF1A9rfFk",

  authDomain: "tfplusadmin.firebaseapp.com",

  projectId: "tfplusadmin",

  storageBucket: "tfplusadmin.firebasestorage.app",

  messagingSenderId: "462098517210",

  appId: "1:462098517210:web:e114385cb16560b78029e3",

  measurementId: "G-70FLPKC14T"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
