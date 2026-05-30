// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC0keS7m61O00Mdy56ysVneDj1y-4wETXE",
  authDomain: "sampan-2c37b.firebaseapp.com",
  projectId: "sampan-2c37b",
  storageBucket: "sampan-2c37b.firebasestorage.app",
  messagingSenderId: "498237273172",
  appId: "1:498237273172:web:baefb8ea7a0a4e4e9d69c1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
