// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjpIN5neD5q9hJKYSG_ozOskOldwQN-2A",
  authDomain: "fir-contax-3cc1b.firebaseapp.com",
  projectId: "fir-contax-3cc1b",
  storageBucket: "fir-contax-3cc1b.appspot.com",
  messagingSenderId: "920966541407",
  appId: "1:920966541407:web:8d5ea2be66a53bbab06bea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;