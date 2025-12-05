// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ⭐ Replace with YOUR exact config from Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC25xM49vHiXAj9rvL9mv_Rxz4o4mosjKY",
  authDomain: "memory-match-challenge-45c1f.firebaseapp.com",
  projectId: "memory-match-challenge-45c1f",
  storageBucket: "memory-match-challenge-45c1f.appspot.com",
  messagingSenderId: "221546777698",
  appId: "1:221546777698:web:ea8fc60eda47552065dc63",
};

// Initialize the Firebase app
const app = initializeApp(firebaseConfig);

// Export Firestore DB instance
export const db = getFirestore(app);
