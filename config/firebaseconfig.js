import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCZ3tDXq-1pmo6LcIIrrCRyq3-CVXz-yQM",
    authDomain: "project-1-2465e.firebaseapp.com",
    projectId: "project-1-2465e",
    storageBucket: "project-1-2465e.appspot.com",
    messagingSenderId: "906693444991",
    appId: "1:906693444991:web:e86f64a0ee52ffc2a9c64a",
    measurementId: "G-QH2GRFKSVL"
};

initializeApp(firebaseConfig);

const auth = getAuth();


export {
    auth,
    createUserWithEmailAndPassword

}