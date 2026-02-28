// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  //apiKey: import.meta.env.VITE_API_KEY,

const firebaseConfig = {
  apiKey: "AIzaSyAVvpWkeMRp7-ukIRqQfI_ip_j1p6pmi9I",
  authDomain: "coder-flex-81795.firebaseapp.com",
  projectId: "coder-flex-81795",
  storageBucket: "coder-flex-81795.firebasestorage.app",
  messagingSenderId: "1071450573311",
  appId: "1:1071450573311:web:0cc1565c599116992e7fca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);