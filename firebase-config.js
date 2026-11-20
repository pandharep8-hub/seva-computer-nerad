import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// तुमच्या Firebase प्रोजेक्टची माहिती येथे भरा
const firebaseConfig = {
  apiKey: "AIzaSyBxmhE4xEyQ5IWtOn2j812eIrIPrHnPIIw",
  authDomain: "seva-computer-nerad-48174.firebaseapp.com",
  projectId: "seva-computer-nerad-48174",
  storageBucket: "seva-computer-nerad-48174.firebasestorage.app",
  messagingSenderId: "967389505991",
  appId: "1:967389505991:web:bad6e7f60398867e2b51e2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
