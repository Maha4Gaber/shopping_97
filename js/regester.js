let username = document.querySelector("#username");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let registerBtn = document.querySelector("#signUp");

registerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value == "" || pass.value == "" || email.value == "") {
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    setTimeout(() => {
      window.location = "login.html";
    }, 500);
  }
});