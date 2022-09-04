let profiluser = localStorage.getItem("username");
let profilemail = localStorage.getItem("email");
let products = JSON.parse(localStorage.getItem("products")) || productDB;
let myproduct = products.filter((i) => i.isme === "Y");
let imgurlp = localStorage.getItem("imgurl");

// variabls 
let userp = document.querySelector(".userP");
let emailP = document.querySelector(".emailP");
let productLp = document.querySelector(".productLp");
let imgsrc = document.querySelector(".img");

userp.innerHTML = profiluser;
emailP.innerHTML = profilemail;
imgsrc.src = imgurlp;
if (myproduct.length != 0)
{
  productLp.innerHTML += myproduct.length;
}
else
{
  productLp.remove();
}