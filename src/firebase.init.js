// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9UId_la7tYM9ql4nv8HUrFBvQ-D5IdaM",
  authDomain: "ema-john-simple-582e5.firebaseapp.com",
  projectId: "ema-john-simple-582e5",
  storageBucket: "ema-john-simple-582e5.appspot.com",
  messagingSenderId: "381073701611",
  appId: "1:381073701611:web:699188ba1e26d9a49ddcae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;