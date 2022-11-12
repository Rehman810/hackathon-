import { auth, db, storage } from "./script.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {
  doc,
  where,
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
    uploadPic();
    classWork;
  } else {
    console.log("user not found", user);
  }
});
classWork();
let Name = document.getElementById("name");
let fatherName = document.getElementById("fatherName");
let rollNo = document.getElementById("roll-No");
let contactNo = document.getElementById("contact-No");
let CNIC = document.getElementById("CNIC-no");
let url;

let uploadInputEl = document.querySelector("#image");

let addStudent = document.getElementById("submit");
addStudent.addEventListener("click", studentAdd);
let course;
async function studentAdd() {
  let classdetails = collection(db, "addStudent");
  await uploadPic();
  await addDoc(classdetails, {
    Name: Name.value,
    fatherName: fatherName.value,
    rollNo: rollNo.value,
    contactNo: contactNo.value,
    CNIC: CNIC.value,
    courseName: course,
    url: url,
  });
  console.log(course);
  window.location.assign("./attendance.html");
}
async function uploadPic() {
  let file = uploadInputEl.files[0];
  let imageRef = ref(storage, `images/${file}`);
  try {
    let uploaded = await uploadBytes(imageRef, file);
    url = await getDownloadURL(imageRef);
    console.log(url, "downloadable URL");
    url;
  } catch (e) {
    console.log(e);
  }
}

async function classWork() {
  let collectionRef = collection(db, "ClassMake");
  const q = query(collectionRef);
  let usersSnapshot = await getDocs(q);
  usersSnapshot.forEach((doc) => {
    console.log(doc.data());
    let select = document.getElementById("select");
    select.innerHTML =
      select.innerHTML +
      `
          <option value="">${doc.data().courseName}</option>
          `;
    course = doc.data().courseName;
  });
  console.log("class");
}

let signOutBtn = document.querySelector("#teacherLogOut");
signOutBtn.addEventListener("click", logOut);
async function logOut() {
  console.log("signout called");
  await signOut(auth);
  location = "./index.html";
}
