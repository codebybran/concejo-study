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

/**
 * Trae los datos guardados en Firestore para el usuario actual
 * y los "vuelca" en localStorage con las mismas llaves que ya
 * usa el resto de la app (cs_progress, cs_streak, cs_errores,
 * cs_badges_seen). Así, todo el código existente (app.js,
 * capitulo.html, index.html) sigue funcionando exactamente igual,
 * solo que ahora arranca con los datos reales del usuario en
 * vez de con lo que haya quedado en el navegador local.
 *
 * Se debe llamar SIEMPRE después de que onUsuario confirme que
 * hay sesión activa, y ANTES de pintar la UI que depende de esos
 * datos (progreso de módulos, racha, insignias, banco de errores).
 */
export async function syncFromFirestore() {
  const datos = await getDatos();
  if (!datos) return null;

  if (datos.progreso) {
    localStorage.setItem('cs_progress', JSON.stringify(datos.progreso));
  }
  if (datos.racha) {
    localStorage.setItem('cs_streak', JSON.stringify(datos.racha));
  }
  if (datos.errores) {
    localStorage.setItem('cs_errores', JSON.stringify(datos.errores));
  }
  if (datos.badges_seen) {
    localStorage.setItem('cs_badges_seen', JSON.stringify(datos.badges_seen));
  }
  return datos;
}

export { auth, db };

/**
 * Exposición global para scripts "normales" (no type="module"),
 * como app.js y los <script> inline de index.html / capitulo.html.
 * Esos archivos no pueden usar `import`, así que llaman a estas
 * funciones a través de window.CS_FIREBASE.
 *
 * Todas las llamadas de guardado (saveProgreso, saveRacha, etc.)
 * se hacen "fire and forget" desde el resto de la app: si el
 * usuario está offline o algo falla, el dato sigue quedando bien
 * guardado en localStorage y se reintentará sincronizar la
 * próxima vez que la página cargue con conexión.
 */
window.CS_FIREBASE = {
  auth,
  db,
  onUsuario,
  login,
  registrar,
  logout,
  getDatos,
  saveProgreso,
  saveRacha,
  saveErrores,
  saveBadgesSeen,
  syncFromFirestore
};