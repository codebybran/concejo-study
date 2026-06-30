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
    nombre,
    email,
    progreso: {},
    racha: { count: 0, last: null },
    badges_seen: [],
    errores: {},
    creado: new Date().toISOString()
  });
  return cred.user;
}

export async function login(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function logout() {
  await signOut(auth);
}

export function onUsuario(callback) {
  onAuthStateChanged(auth, callback);
}

export async function getDatos() {
  const user = auth.currentUser;
  if (!user) return null;
  const snap = await getDoc(doc(db, "usuarios", user.uid));
  return snap.exists() ? snap.data() : null;
}

export async function saveProgreso(progreso) {
  const user = auth.currentUser;
  if (!user) return;
  await updateDoc(doc(db, "usuarios", user.uid), { progreso });
}

export async function saveRacha(racha) {
  const user = auth.currentUser;
  if (!user) return;
  await updateDoc(doc(db, "usuarios", user.uid), { racha });
}

export async function saveErrores(errores) {
  const user = auth.currentUser;
  if (!user) return;
  await updateDoc(doc(db, "usuarios", user.uid), { errores });
}

export async function saveBadgesSeen(badges) {
  const user = auth.currentUser;
  if (!user) return;
  await updateDoc(doc(db, "usuarios", user.uid), { badges_seen: badges });
}

export { auth, db };