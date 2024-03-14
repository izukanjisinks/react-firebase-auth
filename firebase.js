// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-7X0nUGEoaS91M-En69obv79MpLalC74",
  authDomain: "self-checkout-system-d3842.firebaseapp.com",
  projectId: "self-checkout-system-d3842",
  storageBucket: "self-checkout-system-d3842.appspot.com",
  messagingSenderId: "1066081189673",
  appId: "1:1066081189673:web:4b4458f2a96beee85f0138",
  measurementId: "G-Z2L351FBPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);