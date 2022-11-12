import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrINwLf2JhGz6GhifCVN5fIRio2_zhwqM",
  authDomain: "hackathon-ab423.firebaseapp.com",
  projectId: "hackathon-ab423",
  storageBucket: "hackathon-ab423.appspot.com",
  messagingSenderId: "295023708121",
  appId: "1:295023708121:web:c172284060523afee43bc8",
  measurementId: "G-Q683J81HZ4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
