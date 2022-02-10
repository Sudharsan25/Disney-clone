import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1Zv_SZ-6a7iJp9egJY2jx-AM6z6e_-zs",
  authDomain: "disneyplus-clone-2526a.firebaseapp.com",
  projectId: "disneyplus-clone-2526a",
  storageBucket: "disneyplus-clone-2526a.appspot.com",
  messagingSenderId: "480194670750",
  appId: "1:480194670750:web:3f2e7aa79242d9f91e8b8f",
  measurementId: "G-JLWNVPB7MT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
