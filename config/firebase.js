// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3PNCXuy2h0BIP1L7KvRTBXY9t54umBbU",
  authDomain: "react-native-login-d8fc6.firebaseapp.com",
  projectId: "react-native-login-d8fc6",
  storageBucket: "react-native-login-d8fc6.appspot.com",
  messagingSenderId: "90024920386",
  appId: "1:90024920386:web:e38538c39041239c6db4db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
