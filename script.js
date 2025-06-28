// ✅ Konfigurasi Firebase (WAJIB SESUAIKAN DENGAN PUNYAMU)
const firebaseConfig = {
    apiKey: "AIzaSyAZvhSeKEvHTAPLm6twBoDcmeUnJpOL6gE",
    authDomain: "makanyuk-83efd.firebaseapp.com",
    projectId: "makanyuk-83efd",
    storageBucket: "makanyuk-83efd.appspot.com",
    messagingSenderId: "855674928287",
    appId: "1:855674928287:web:d1a61ac04911c7c1ba76aa",
    measurementId: "G-8BC7K2JCEL"
  };
  
  // ✅ Inisialisasi Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  // ✅ Data admin (ganti sesuai kebutuhan)
  const adminAccounts = [
    "admin1@gmail.com",
    "admin2@gmail.com"
  ];
  
  // ✅ Login Form
  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");
  
    if (loginForm) {
      loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
  
        try {
          const userCredential = await auth.signInWithEmailAndPassword(email, password);
          const userEmail = userCredential.user.email;
  
          // ✅ Simpan ke localStorage
          localStorage.setItem("userEmail", userEmail);
  
          if (adminAccounts.includes(userEmail)) {
            window.location.href = "admin.html";
          } else {
            window.location.href = "menu.html";
          }
  
        } catch (error) {
          console.error("Login error:", error);
          errorMessage.textContent = "Login gagal: " + error.message;
      
        }
      });
    }
  });
  