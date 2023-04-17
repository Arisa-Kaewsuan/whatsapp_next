import Firebase from "firebase";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyrzGVEsAETvm33W06jvwbMTJnD5hNmr0",
  authDomain: "whatsapp-next-a3a37.firebaseapp.com",
  projectId: "whatsapp-next-a3a37",
  storageBucket: "whatsapp-next-a3a37.appspot.com",
  messagingSenderId: "72954317533",
  appId: "1:72954317533:web:d9ce6dede3723cece22934",
  measurementId: "G-MG0RN4D8CH",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const analytics = getAnalytics(app);

export { db, auth, provider };
