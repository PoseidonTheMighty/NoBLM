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

const profile_but = document.getElementById('profile');
const cart_but = document.getElementById('cart');
const login_but = document.getElementById('login');
const login_shop = document.getElementById('login_to_shop');
const login_shop_link = document.getElementById('login_to_shop_link');
const profileDropdown = document.getElementById('profileDropdown');
const logoutButton = document.getElementById('logout');

// Add event listener to the logout button
logoutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        // After sign-out, you may want to redirect the user to a different page or perform any other action.
        console.log("User signed out successfully");
    }).catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
    });
});

profile_but.addEventListener('click', () => {
    profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
});

logoutButton.addEventListener('click', () => {
    profileDropdown.style.display = 'none';
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        cart_but.style.display = 'block';
        profile_but.style.display = 'block';
        login_but.style.display = 'none';
        login_shop.value = "Shop";
        login_shop.textContent = "Shop"; 
        login_shop_link.href = '../shop.html';

    } else {
        // No user is signed in
        cart_but.style.display = 'none';
        profile_but.style.display = 'none';
        login_but.style.display = 'block';;
        login_shop.value = "Login";
        login_shop.textContent = "Login"; 
    }
});


