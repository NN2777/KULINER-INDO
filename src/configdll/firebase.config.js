import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhpiltn7DcSNhDP8bHK3RTe9abmuzT49I",
  authDomain: "fir-react-bfd45.firebaseapp.com",
  projectId: "fir-react-bfd45",
  storageBucket: "fir-react-bfd45.appspot.com",
  messagingSenderId: "39452521412",
  appId: "1:39452521412:web:1bb4c7f675ae4c9aca2a91",
  measurementId: "G-KG20W9BEK9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
