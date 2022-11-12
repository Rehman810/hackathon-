import { auth } from "./script.js";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user found", user);
  } else {
    console.log("user not found", user);
  }
});

let email = document.querySelector(".email");
let password = document.querySelector(".password");

let btn = document.querySelector(".login");
btn.addEventListener("click", login);

// login //

async function login() {
  try {
    let { user } = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    window.location.assign("./Home.html");
  } catch (e) {
    swal("Incorrect Email or password!");
  }
}

// forgot password //

let forgot = document.querySelector("#forgot");

forgot.addEventListener("click", () => {
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      swal("Check Your Email or spam for reset your password");
    })
    .catch((error) => {
      swal("Something Went Wrong.");
    });
});
