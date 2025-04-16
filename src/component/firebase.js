// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp3cUJdtfpzs9t7FK_VNy_2XOmd0L5i0o",
  authDomain: "keval-6d25f.firebaseapp.com",
  projectId: "keval-6d25f",
  storageBucket: "keval-6d25f.firebasestorage.app",
  messagingSenderId: "366885323777",
  appId: "1:366885323777:web:4d3671ec54d1c940bbac00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
