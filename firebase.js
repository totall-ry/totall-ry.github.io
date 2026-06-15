import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDo3407HPVy_pGFG9faPvsR-sFk0ZUwDwc",
    authDomain: "campus-bulletin-d9573.firebaseapp.com",
    projectId: "campus-bulletin-d9573",
    storageBucket: "campus-bulletin-d9573.firebasestorage.app",
    messagingSenderId: "69984017154",
    appId: "1:69984017154:web:ee6c31b470f4c9cb6cf31b",
    measurementId: "G-ZZ25R5GD8P"
};

const app = initializeApp(firebaseConfig);
window.db = getFirestore(app);