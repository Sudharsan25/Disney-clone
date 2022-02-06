import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB1Zv_SZ-6a7iJp9egJY2jx-AM6z6e_-zs",
  authDomain: "disneyplus-clone-2526a.firebaseapp.com",
  projectId: "disneyplus-clone-2526a",
  storageBucket: "disneyplus-clone-2526a.appspot.com",
  messagingSenderId: "480194670750",
  appId: "1:480194670750:web:3f2e7aa79242d9f91e8b8f",
  measurementId: "G-JLWNVPB7MT",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { provider, auth, storage };
export default db;
