import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "house-marketplace-app-e7c7a.firebaseapp.com",
  projectId: "house-marketplace-app-e7c7a",
  storageBucket: "house-marketplace-app-e7c7a.appspot.com",
  messagingSenderId: "192222790052",
  appId: "1:192222790052:web:d471a68d2b4bb7b3aa8131",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
