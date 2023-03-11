import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAroEWXzIN_pFn3tzoEWejrUR57DVqnehM",
  authDomain: "ichatty-93c6c.firebaseapp.com",
  projectId: "ichatty-93c6c",
  storageBucket: "ichatty-93c6c.appspot.com",
  messagingSenderId: "485185990111",
  appId: "1:485185990111:web:0d11e8cd3301a0dc58286a",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
