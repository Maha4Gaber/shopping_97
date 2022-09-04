// Define product

let productDom = document.querySelector(".products");
// let cardproductdom = document.querySelector(".cardsprodact div");
// let cardproduct = document.querySelector(".cardsprodact");
// let soppingicon = document.querySelector(".soppingicon");
let menu = document.querySelector(".user");
let products = productDB;
let s = "2px solid var(--mcolor)";

let drowproductItme;
(drowproductItme = function (productes = []) {
  let productItme = productes.map((itme) => {
    return `
  <div class="productBOx" style="border:${itme.isme === "Y" ? s : ""}">
          <div class="pItme">
            <img src="${itme.imgurl}" alt="_1">
          </div>
          <div class="pDecr">
            <a onclick=saveitme(${itme.id})>${itme.title}</a>
            <p>${
              itme.desc
                ? itme.desc
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non ea dolores"
            }</p>
            <span><strong>Size</strong> : ${itme.size}</span>
            
            ${
              itme.isme === "Y" &&
              `<br><button class='edit'onclick="editeproduct(${itme.id})">Edit Product</button>`
                ? ""
                : ""
            }
          </div>
          <div class="pAction">
            <button class="addToCard" onclick="addtocard(${
              itme.id
            })">Add To Card</button>
            
            <i class="${itme.liked === true ? "fa fa-heart" : "fa fa-heart-o"}"
            onclick="addtofavorited(${itme.id})"
            style="color:${
              itme.liked === true ? "rgb(230, 20, 118);" : ""
            }" class="icon" alt=""></i>
            
          </div>
        </div>
  `;
  });
  productDom.innerHTML = productItme.join("");
})(JSON.parse(localStorage.getItem("products")) || productDB);

function addtocard(ide) {
  if (uname) {
    let products = JSON.parse(localStorage.getItem("products")) || productDB;
    let product = products.find((itme) => itme.id === ide);
    let isincard = addeditme.some((i) => i.id == product.id);
    if (isincard) {
      addeditme = addeditme.map((p) => {
        if (p.id === product.id) p.qty += 1;
        return p;
      });
    } else {
      addeditme.push(product);
    }
    cardproductdom.innerHTML = "";
    addeditme.forEach((itme) => {
      cardproductdom.innerHTML += `<p>${itme.title}  <span class="itmeqty">${itme.qty}</span></p>`;
    });
    localStorage.setItem("productincard", JSON.stringify(addeditme));
    let cardproductdomL = document.querySelectorAll(".cardsprodact div p");
    badge.innerHTML = cardproductdomL.length;
  } else {
    window.location = "login.html";
  }
}

function saveitme(id) {
  localStorage.setItem("productid", id);
  window.location = "cardDetils.html";
}

let searchinput = document.getElementById("search");
searchinput.addEventListener("keyup", (e) => {
  search(
    e.target.value,
    JSON.parse(localStorage.getItem("products")) || productDB
  );
  if (e.target.value.trim() === "") drowproductItme(JSON.parse(localStorage.getItem("products")) || productDB);
});

function search(title, myarray) {
  let arr = myarray.filter(
    (itme) => itme.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
  );
  drowproductItme(arr);
}

// // add to  favorite

let favoritems = localStorage.getItem("productinfavorite")
  ? JSON.parse(localStorage.getItem("productinfavorite"))
  : [];
function addtofavorited(ide) {
  if (uname) {
    let products = JSON.parse(localStorage.getItem("products")) || productDB;
    let product = products.find((itme) => itme.id === ide);
    product.liked = true;
    let isinfavorite = favoritems.some((i) => i.id == product.id);
    if (isinfavorite) {
      favoritems = favoritems.map((p) => {
        if (p.id === product.id) product.liked = true;
        return p;
      });
    } else {
      favoritems.push(product);
    }
    localStorage.setItem("productinfavorite", JSON.stringify(favoritems));
    products.map((itme) => {
      if (itme.id === product.id) itme.liked = true;
    });
    localStorage.setItem("productinfavorite", JSON.stringify(favoritems));
    drowproductItme(products);
  } else {
    window.location = "login.html";
  }
}

// filter by size

let sizefilter = document.querySelector("#felterbysize");
sizefilter.addEventListener("change", getfiltersize);

function getfiltersize(e) {
  let val = e.target.value;
  let products = JSON.parse(localStorage.getItem("products")) || productDB;

  if (val === "all") {
    drowproductItme(products);
  } else {
    product = products.filter((i) => i.size === val);
    drowproductItme(product);
  }
}
// Edit product

function editeproduct(id) {
  localStorage.setItem("editeproduct", id);
  window.location = "editeproduct.html";
}

function openbar() {
  menu.classList.toggle("open");
}
