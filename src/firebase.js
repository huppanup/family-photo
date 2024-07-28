// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqnitNY3QYElfh2HxPcnzfJq-3KkoL4pQ",
  authDomain: "family-photo-ad61f.firebaseapp.com",
  projectId: "family-photo-ad61f",
  storageBucket: "family-photo-ad61f.appspot.com",
  messagingSenderId: "814692743126",
  appId: "1:814692743126:web:1de28b9e3da34acb335677",
  measurementId: "G-NX58H1NQZV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, storage, firestore} ;

