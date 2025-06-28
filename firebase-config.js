// Import Firebase SDK (gunakan CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Konfigurasi Firebase (GANTI SESUAI PROJECT-MU)
const firebaseConfig = {
  apiKey: "ISI_API_KEY_MU",
  authDomain: "ISI_AUTH_DOMAIN_MU",
  projectId: "ISI_PROJECT_ID_MU",
  storageBucket: "ISI_STORAGE_BUCKET_MU",
  messagingSenderId: "ISI_MSG_SENDER_ID",
  appId: "ISI_APP_ID"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Ekspor layanan Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
