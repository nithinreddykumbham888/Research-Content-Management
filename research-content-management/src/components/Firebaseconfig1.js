// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/storage'; 
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB73fjF8BJNYK1ShpcBco6rS4qhjJHDEKw",
  authDomain: "research-content-management.firebaseapp.com",
  projectId: "research-content-management",
  storageBucket: "research-content-management.appspot.com",
  messagingSenderId: "131468755929",
  appId: "1:131468755929:web:51aeba694f121891244fc8",
  measurementId: "G-PC9VQ6VC6H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
//export var storage = firebase.storage().ref();
const db = getFirestore();
export { db };
