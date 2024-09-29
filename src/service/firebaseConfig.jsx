// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA66YM1orKWgHHH6vyOclnVurNAS4ouSBQ",
  authDomain: "ai-travel-project-14a2c.firebaseapp.com",
  projectId: "ai-travel-project-14a2c",
  storageBucket: "ai-travel-project-14a2c.appspot.com",
  messagingSenderId: "393626216173",
  appId: "1:393626216173:web:243673be12df8a801fcee4",
  measurementId: "G-HZ56HK6ZR2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
