import { auth, db, storage } from "./script.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {
  doc,
  where,
  collection,
  query,
  getDocs,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user found", user);
  } else {
    console.log("user not found", user);
  }
});

let secA = document.getElementById("sec-A");
let secC = document.getElementById("sec-B");
let secB = document.getElementById("sec-C");
let rollNo = document.getElementById("roll-no");
let submit = document.getElementById("sub");
submit.addEventListener("click", attendance);

let option = document.querySelector("option");
let attendanceMark = document.getElementById("attendance");
attendanceMark.addEventListener("click", attendance);
async function studentAdd() {
  let classdetails = collection(db, "attendance");
  await addDoc(classdetails, {
    Name: Name.value,
    rollNo: rollNo.value,
    Attendance: option.value,
    time: Timestamp.fromDate(new Date("2022-11-12")),
  });
  console.log(course);
  window.location.assign("./attendance.html");
}
let signOutBtn = document.querySelector("#teacherLogOut");
signOutBtn.addEventListener("click", logOut);
async function logOut() {
  console.log("signout called");
  await signOut(auth);
  location = "./index.html";
}

async function attendance() {
  let collectionRef = collection(db, "addStudent");
  let condition2 = where("rollNo", "==", rollNo.value);
  const q = query(collectionRef, condition2);
  let usersSnapshot = await getDocs(q);
  usersSnapshot.forEach((doc) => {
    console.log(doc.data());
    if (doc.data()) {
      document.querySelector(".card").innerHTML += `
    
        <img src="${doc.data().url}" class="card-img-top" alt="..." />
  
        <div class="card-body">
          <h3 class="card-title">${doc.data().Name}</h3>
          <h5 class="card-title">${doc.data().fatherName}</h5>
          <h5 class="card-title">${doc.data().rollNo}</h5>
          <h5 class="card-title">${doc.data().contactNo}</h5>
        </div>
  `;
    } else {
      `
      <div class="cardhidden" aria-hidden="true">
        <img
            src="images/dark-gray-color-solid-background-1920x1080.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
            <a
              href="#"
              tabindex="-1"
              class="btn btn-primary disabled placeholder col-6"
            ></a>
          </div>
          <div/>
        `;
    }
  });
  console.log("other User");
}
