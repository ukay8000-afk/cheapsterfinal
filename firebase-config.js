// ============================================================
// FIREBASE CONFIG (Cleaned - No Firestore)
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyAkmyH4pJWH-0MtdZ-RuEQLeSietZKwRTc",
  authDomain: "cheapster-4e4a1.firebaseapp.com",
  projectId: "cheapster-4e4a1",
  storageBucket: "cheapster-4e4a1.firebasestorage.app",
  messagingSenderId: "406157986484",
  appId: "1:406157986484:web:ac118992d67b52d82ce5e1",
  measurementId: "G-69933BBTXY"
};

firebase.initializeApp(firebaseConfig);
window.auth = firebase.auth();
window.googleProvider = new firebase.auth.GoogleAuthProvider();
