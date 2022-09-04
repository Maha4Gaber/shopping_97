let uname = localStorage.getItem("username");
let loguotBtn = document.querySelector(".loguot");
let links = document.querySelector(".links");
let user = document.querySelector(".user");
let userName = document.querySelector("#userName");
let welcom = document.querySelector(".landing .text h1 span");

if (uname) {
  links.remove();
  user.style.display = "flex";
  userName.innerHTML = uname;
}
else
{
  user.style.display = "none";
  }

loguotBtn.addEventListener("click", () => {
  
  localStorage.clear();
  setTimeout(() => {
    window.location = "regester.html";
  }, 1500);
});
