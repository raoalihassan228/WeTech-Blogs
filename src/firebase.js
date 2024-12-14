// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "wetech-blog.firebaseapp.com",
  projectId: "wetech-blog",
  storageBucket: "wetech-blog.firebasestorage.app",
  messagingSenderId: "556108573382",
  appId: "1:556108573382:web:5cc2dbd8784f5d4b9ac5c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);