import { auth, db, storage } from "./script.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {
  doc,
  addDoc,
  collection,
  query,
  getDocs,
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

let teacherName = document.getElementById("tname");
let sectionName = document.getElementById("secName");
let courseName = document.getElementById("course-name");
let batchNo = document.getElementById("batch-No");
let schedules = document.getElementById("schedule");
let ttt = document.getElementById("timings");

let submit = document.getElementById("submit");
submit.addEventListener("click", classesAdd);
console.log("ji");
async function classesAdd() {
  let classdetails = collection(db, "ClassMake");

  await addDoc(classdetails, {
    TeacherName: teacherName.value,
    sectionName: sectionName.value,
    courseName: courseName.value,
    batchNo: batchNo.value,
    schedule: schedules.value,
    time: ttt.value,
  });
  console.log("hi");
  window.location.assign("./addStudent.html");
}

let signOutBtn = document.querySelector("#teacherLogOut");
signOutBtn.addEventListener("click", logOut);
async function logOut() {
  console.log("signout called");
  await signOut(auth);
  location = "./index.html";
}
