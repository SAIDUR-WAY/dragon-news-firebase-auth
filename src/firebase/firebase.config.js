// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvuv_B33L_0mgnUn5WZRLMtr8cC_cmp1U",
  authDomain: "dragon-news-firebase-aut-5a0a5.firebaseapp.com",
  projectId: "dragon-news-firebase-aut-5a0a5",
  storageBucket: "dragon-news-firebase-aut-5a0a5.appspot.com",
  messagingSenderId: "768443262124",
  appId: "1:768443262124:web:28a813c43c9e41fba3eb09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;