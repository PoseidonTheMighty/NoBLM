const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

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

const authContainer = document.getElementById('auth-container');
const loginLink = document.getElementById('login-link');
const loginButton = document.getElementById('login-button');
const profileIcon = document.getElementById('profile-icon');

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        loginLink.style.display = 'none';
        profileIcon.style.display = 'block';

        // Optional: Add click event to profile icon for sign out or profile page
        profileIcon.addEventListener('click', () => {
            signOut(auth).then(() => {
                // Sign-out successful
                window.location.reload();
            }).catch((error) => {
                // An error happened
                console.error("Error signing out:", error);
            });
        });
    } else {
        // No user is signed in
        loginLink.style.display = 'block';
        profileIcon.style.display = 'none';

        loginButton.addEventListener('click', () => {
            window.location.href = "Login/login.html";
        });
    }
});
