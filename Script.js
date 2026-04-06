import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const auth = getAuth();

window.uploadPDF = async function() {
  const user = auth.currentUser;

  if (!user || user.email !== "youradmin@gmail.com") {
    alert("Only admin can upload!");
    return;
  }

  // baki upload code same
}