// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH-FRmFc2GeUaz62Q66FB3KTjjbIEXqzY",
  authDomain: "ema-john-with-firebase-a-3b0b3.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-3b0b3",
  storageBucket: "ema-john-with-firebase-a-3b0b3.appspot.com",
  messagingSenderId: "828054479744",
  appId: "1:828054479744:web:d8ab0f375b41aa06e91765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;