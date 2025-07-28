import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAOwiwcslPE0-LpAJkXYmUjU0EDZrmzOYg",
  authDomain: "portfolio-guideline.firebaseapp.com",
  projectId: "portfolio-guideline",
  storageBucket: "portfolio-guideline.firebasestorage.app",
  messagingSenderId: "1011606767481",
  appId: "1:1011606767481:web:323473694486d03438d1a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);