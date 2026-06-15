// Import from official CDN URLs so GitHub Pages can load the SDK over the web
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Your exact web app's Firebase configuration credentials
const firebaseConfig = {
  apiKey: "AIzaSyDo34O7HPvy_pGFG9faPvsR-sFk0ZUwDwc",
  authDomain: "campus-bulletin-d9573.firebaseapp.com",
  projectId: "campus-bulletin-d9573",
  storageBucket: "campus-bulletin-d9573.firebasestorage.app",
  messagingSenderId: "699840177154",
  appId: "1:699840177154:web:ee6c31b470f4c9cb6cf31b",
  measurementId: "G-ZZ25R5GD8P"
};

// Initialize Firebase Core
const app = initializeApp(firebaseConfig);

// Bind Firestore directly to window.db so other scripts can access it instantly
window.db = getFirestore(app);