// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7AlXCaIzseZo7qpxKYiGA5Ts0Dv6cEF4",
  authDomain: "entrega-final-react-9dad3.firebaseapp.com",
  projectId: "entrega-final-react-9dad3",
  storageBucket: "entrega-final-react-9dad3.firebasestorage.app",
  messagingSenderId: "34955575453",
  appId: "1:34955575453:web:7251ec910a06137e1b1474"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);