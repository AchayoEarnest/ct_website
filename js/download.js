document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const studentEmail = document.getElementById("studentEmail");
  const loginForm = document.getElementById("loginForm");
  const downloadList = document.getElementById("downloadList");

  loginBtn.addEventListener("click", () => {
    const registeredStudents =
      JSON.parse(localStorage.getItem("registeredStudents")) || [];
    const email = studentEmail.value.trim().toLowerCase();

    if (registeredStudents.includes(email)) {
      loginForm.style.display = "none";
      downloadList.style.display = "block";
    } else {
      alert("Access denied! Please register first.");
    }
  });
});
