import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOf5GQg_H8lZ1FTBWbYlCIp9A6PKYW6O4",
  authDomain: "concejo-study.firebaseapp.com",
  projectId: "concejo-study",
  storageBucket: "concejo-study.firebasestorage.app",
  messagingSenderId: "706021362315",
  appId: "1:706021362315:web:6cf48b0c40058e2996228e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function registrar(nombre, email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: nombre });
  await setDoc(doc(db, "usuarios", cred.user.uid), {
    nombre, email, progreso: {}, racha: { count: 0, last: null }, badges_seen: [], errores: {}, creado: new Date().toISOString()
  });
  return cred.user;
}

export async function login(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

