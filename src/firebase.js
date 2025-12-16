import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLPIPwhSkUzoaISxFZlG9F97zRp1u0o9o",
  authDomain: "financeiro-app-df224.firebaseapp.com",
  projectId: "financeiro-app-df224",
  storageBucket: "financeiro-app-df224.firebasestorage.app",
  messagingSenderId: "1061825731478",
  appId: "1:1061825731478:web:70c2e8c4c5eb13c56b5bb7"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta as ferramentas para usar no App.jsx
export const auth = getAuth(app);
export const db = getFirestore(app);