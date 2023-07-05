import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBeQaZE9Zi9Gu6XjHnh5YajSBckIagGKEI",
  authDomain: "chat-6268a.firebaseapp.com",
  projectId: "chat-6268a",
  storageBucket: "chat-6268a.appspot.com",
  messagingSenderId: "945219286985",
  appId: "1:945219286985:web:731a00745e4339042dda18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();