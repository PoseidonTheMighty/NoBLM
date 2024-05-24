import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
// Import the functions you need from the SDKs you need
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR_qoESMD-KdXClF2vURe5crAY1CAo15g",
  authDomain: "noblm-7dd76.firebaseapp.com",
  projectId: "noblm-7dd76",
  storageBucket: "noblm-7dd76.appspot.com",
  messagingSenderId: "651741143531",
  appId: "1:651741143531:web:2f3b274db7008b10ccb9ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//input


const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault()

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      window.location.href = "../home.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
})