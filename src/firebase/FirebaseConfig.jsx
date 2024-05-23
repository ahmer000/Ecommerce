// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuAs93bDRA_eoRgkhlaE39f1sKJih3efo",
  authDomain: "myfirstapp-2d998.firebaseapp.com",
  projectId: "myfirstapp-2d998",
  storageBucket: "myfirstapp-2d998.appspot.com",
  messagingSenderId: "286526654502",
  appId: "1:286526654502:web:465e3675cdec23397c3ee7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB, auth}