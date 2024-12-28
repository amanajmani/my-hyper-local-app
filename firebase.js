import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBzsgabRWecRk0G318ARl5_iPviv24C2kk",
  authDomain: "hyper-local-app-test.firebaseapp.com",
  projectId: "hyper-local-app-test",
  storageBucket: "hyper-local-app-test.firebasestorage.app",
  messagingSenderId: "906090428565",
  appId: "1:906090428565:web:2da5ae97fa3ad40ff2039c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);