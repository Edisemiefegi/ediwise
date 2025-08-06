import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs, updateDoc, orderBy, query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVHMAee-TEZiIGc8FqmDTfgDF3FZJx-Go",
  authDomain: "ediwise.firebaseapp.com",
  projectId: "ediwise",
  storageBucket: "ediwise.firebasestorage.app",
  messagingSenderId: "46867961724",
  appId: "1:46867961724:web:3f11b42ff1ed54909276f9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  app,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  onAuthStateChanged,
  getDocs, updateDoc, orderBy, query,
};
