import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBy3z4TknmOUGpS2MZr978-0nhpsO85JDM",
  authDomain: "instagram-clone-675d6.firebaseapp.com",
  projectId: "instagram-clone-675d6",
  storageBucket: "instagram-clone-675d6.appspot.com",
  messagingSenderId: "137066095842",
  appId: "1:137066095842:web:86e84b080e33c532de2abb",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
