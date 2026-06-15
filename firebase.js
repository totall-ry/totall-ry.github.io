import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDo34O7HPvy_pGFG9faPvsR-sFk0ZUwDwc",
  authDomain: "campus-bulletin-d9573.firebaseapp.com",
  projectId: "campus-bulletin-d9573",
  storageBucket: "campus-bulletin-d9573.firebasestorage.app",
  messagingSenderId: "699840177154",
  appId: "1:699840177154:web:ee6c31b470f4c9cb6cf31b",
  measurementId: "G-ZZ25R5GD8P"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
