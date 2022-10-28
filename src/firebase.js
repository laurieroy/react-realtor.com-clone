// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl7VpsoRjcRMQcsC_Be5Tlcz3C-DMZ0ec",
  authDomain: "realtor-clone-a8dd7.firebaseapp.com",
  projectId: "realtor-clone-a8dd7",
  storageBucket: "realtor-clone-a8dd7.appspot.com",
  messagingSenderId: "811437165329",
  appId: "1:811437165329:web:5312162e5e622d95ea1ab0",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();