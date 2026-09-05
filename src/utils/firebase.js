// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD39yxzG9DTK7kurM7Oj3d13yGG07enZuc",
  authDomain: "netflix-gpt-42f33.firebaseapp.com",
  projectId: "netflix-gpt-42f33",
  storageBucket: "netflix-gpt-42f33.firebasestorage.app",
  messagingSenderId: "32730046757",
  appId: "1:32730046757:web:0e874b48f85cbaab9a3acc",
  measurementId: "G-K1WLNH0X4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();