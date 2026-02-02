import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA82rRQR3liUvDWIrfcE9IorwJjOUMO5-4",
  authDomain: "personal-3b88f.firebaseapp.com",
  projectId: "personal-3b88f",
  appId: "1:212724523494:web:24fa7417e0c2f087e37627",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
