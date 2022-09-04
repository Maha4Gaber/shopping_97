let userName = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#signIn");

let name = localStorage.getItem("username");
let passw = localStorage.getItem("password");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
    if (
      name &&
      username.value.trim() == name.trim() &&
      passw&&
      password.value.trim() == passw
    )
    {
      setTimeout(() => {
        window.location = "index.html";
      }, 500);
      }
    }
);


