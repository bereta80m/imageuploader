// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBqDEEsarGtLGXKoLyQ2fbVYs8AN1nj1Q",
  authDomain: "imageuploader-abaaa.firebaseapp.com",
  projectId: "imageuploader-abaaa",
  storageBucket: "imageuploader-abaaa.appspot.com",
  messagingSenderId: "465258671458",
  appId: "1:465258671458:web:6c654d8f9517689bd0503b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
