// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvmAXDB3fpKYKkCMEMAWrM12zDwqRf5X8",
  authDomain: "chatty-1282d.firebaseapp.com",
  databaseURL: "https://chatty-1282d-default-rtdb.firebaseio.com",
  projectId: "chatty-1282d",
  storageBucket: "chatty-1282d.appspot.com",
  messagingSenderId: "493758938134",
  appId: "1:493758938134:web:898232da26900dee4bc937",
  measurementId: "G-2X8VD4DRBD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
