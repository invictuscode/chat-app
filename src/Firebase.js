
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAA5Q7yBef_GggFLsgwGPcIMe9mJY0ertQ",
    authDomain: "transfernowapp.firebaseapp.com",
    projectId: "transfernowapp",
    storageBucket: "transfernowapp.appspot.com",
    messagingSenderId: "111216319973",
    appId: "1:111216319973:web:2016d5a45d2889566fa30c",
    measurementId: "G-M2MLDJYXFR"
  
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };