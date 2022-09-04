let profiluser = localStorage.getItem("username");
let profilemail = localStorage.getItem("email");
let products = JSON.parse(localStorage.getItem("products")) || productDB;
let myproduct = products.filter((i) => i.isme === "Y");

// variabls
let userinput = document.querySelector("#profileName");
let emailinput = document.querySelector("#profileemail");
let editform = document.querySelector("#editprfile");
let profileurl = document.querySelector("#profileimg");
let submitBtn = document.querySelector("#editprfileBtn");
let productimg;


userinput.value = profiluser;
emailinput.value = profilemail;

// events

editform.addEventListener("submit", formdata);
profileimg.addEventListener("change", uplodefile);

// functions


function formdata (e)
{
  e.preventDefault();
  localStorage.setItem("username", userinput.value);
  localStorage.setItem("email", emailinput.value);
  localStorage.setItem("imgurl", productimg);
  window.location = "profile.html";
}

function uplodefile() {
  let file = this.files[0];
  getimgBase64(file);
  let types = ["image/jpeg", "image/png"];
  if (types.indexOf(file.type) == -1) {
    alert("type not supported");
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    alert("Image not Execed 2MG");
    return;
  }
}

function getimgBase64(file) {
  let render = new FileReader();
  render.readAsDataURL(file);
  render.onload = function () {
    productimg = render.result;
  };
  render.onerror = function () {
    alert("Error !!");
  };
}