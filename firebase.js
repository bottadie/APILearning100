import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGdJa5XM49FAgCc2y8aQepQVl8nEj1d_I",
  authDomain: "apieucariota.firebaseapp.com",
  projectId: "apieucariota",
  storageBucket: "apieucariota.appspot.com",
  messagingSenderId: "360488425596",
  appId: "1:360488425596:web:76fc8add7f527e111b11f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db
