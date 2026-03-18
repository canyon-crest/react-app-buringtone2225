// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDstGqdEwv-2NCHYRcGtGlJISkwAlUyzeY",
  authDomain: "react-firebase-app-5bdaa.firebaseapp.com",
  projectId: "react-firebase-app-5bdaa",
  storageBucket: "react-firebase-app-5bdaa.firebasestorage.app",
  messagingSenderId: "414941725645",
  appId: "1:414941725645:web:880f3bfbf40bda0ccd3a84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();