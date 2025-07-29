// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-98b8c.firebaseapp.com",
  projectId: "mern-blog-98b8c",
  storageBucket: "mern-blog-98b8c.firebasestorage.app",
  messagingSenderId: "980102308448",
  appId: "1:980102308448:web:3829c6a5d1792c965c5905",
  measurementId: "G-6NY3ELD283",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
