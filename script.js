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
  
  // ✅ Logout dan hapus data lokal saat halaman dimuat
  firebase.auth().signOut().then(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  
  // ✅ Daftar email admin
  const adminAccounts = [
    "admin1@gmail.com",
    "admin2@gmail.com"
  ];
  
  // ✅ Login dan Register Handler
  document.addEventListener("DOMContentLoaded", () => {
    // === LOGIN ===
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
  
          localStorage.setItem("userEmail", userEmail);
  
          if (adminAccounts.includes(userEmail)) {
            window.location.href = "admin.html";
          } else {
            window.location.href = "menu.html";
          }
  
        } catch (error) {
          console.error("Login error:", error);
          if (errorMessage) {
            errorMessage.textContent = "Login gagal: " + error.message;
          } else {
            alert("Login gagal: " + error.message);
          }
        }
      });
    }
  
    // === REGISTER ===
    const registerForm = document.getElementById("registerForm");
    const registerError = document.getElementById("register-error");
  
    if (registerForm) {
      registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("register-email").value.trim();
        const password = document.getElementById("register-password").value;
  
        try {
          // Logout user aktif dulu kalau ada
          await auth.signOut();
  
          const userCredential = await auth.createUserWithEmailAndPassword(email, password);
          const user = userCredential.user;
  
          localStorage.setItem("userEmail", user.email);
  
          // Redirect ke menu.html (default user biasa)
          window.location.href = "menu.html";
  
        } catch (error) {
          console.error("Register error:", error); // Tambahan: tampilkan error di console
          if (registerError) {
            registerError.textContent = "Gagal daftar: " + error.message + " (" + error.code + ")";
          } else {
            alert("Gagal daftar: " + error.message + " (" + error.code + ")");
          }
        }
      });
    }
  });
  