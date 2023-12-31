// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbXEKgPqIa279pwFcHzxnH3o0jutOke_s",
  authDomain: "interior-designer-7d03e.firebaseapp.com",
  projectId: "interior-designer-7d03e",
  storageBucket: "interior-designer-7d03e.appspot.com",
  messagingSenderId: "919088793215",
  appId: "1:919088793215:web:a08c2172c62c30e5f6e14a",
  measurementId: "G-1TSRD1RCD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);