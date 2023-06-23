import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWwkeRmq5hea7mRl-2dtBJ-NOCQl3uRnM",
  authDomain: "elec-e2f95.firebaseapp.com",
  projectId: "elec-e2f95",
  storageBucket: "elec-e2f95.appspot.com",
  messagingSenderId: "1011621884012",
  appId: "1:1011621884012:web:1489f07bb513ad32172849",
  measurementId: "G-DC4CWBJWYT"


};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);

