import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebase.config";

function firebaseInitialization() {
  const app = initializeApp(firebaseConfig)
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app)
  return db
}

export default firebaseInitialization;