// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCeufPedncVeU9avtQoYKXxCOVSGuqJ90Y",
  authDomain: "online-laundry-c1ec7.firebaseapp.com",
  projectId: "online-laundry-c1ec7",
  storageBucket: "online-laundry-c1ec7.appspot.com",
  messagingSenderId: "873819930667",
  appId: "1:873819930667:web:5f14c85c4aa4143a516a6e"
};

// Initialize Firebase
const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 