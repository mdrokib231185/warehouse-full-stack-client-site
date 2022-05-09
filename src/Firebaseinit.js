// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZftVk8bQfF7vq5eUyF15ymRyJcaBNJAs",
  authDomain: "assignment-11-90b2a.firebaseapp.com",
  projectId: "assignment-11-90b2a",
  storageBucket: "assignment-11-90b2a.appspot.com",
  messagingSenderId: "236734183032",
  appId: "1:236734183032:web:f24842c65c89c3d7e19f8d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth