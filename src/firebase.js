// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAq3BL8HitZIst15BPQi-KpRYKTv3ZpuoY",
    authDomain: "portfolio-495b2.firebaseapp.com",
    projectId: "portfolio-495b2",
    storageBucket: "portfolio-495b2.appspot.com",
    messagingSenderId: "826573438460",
    appId: "1:826573438460:web:9c17a37b58ad0f6b45c679",
    measurementId: "G-NZC2YPE5C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);