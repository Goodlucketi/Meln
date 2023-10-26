// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiMzJ4Oy9pJD21yephSbDF-vn8RUYs5F8",
  authDomain: "melnapp.firebaseapp.com",
  projectId: "melnapp",
  storageBucket: "melnapp.appspot.com",
  messagingSenderId: "974299475688",
  appId: "1:974299475688:web:c9da2f879851c34d03a35d",
  measurementId: "G-WCJ8VTQ6NG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);