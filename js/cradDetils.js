let products = JSON.parse(localStorage.getItem("products")) || productDB;
let productid = localStorage.getItem("productid");

let productDetails = products.find((itme) => itme.id == productid);

let itmeDetails = document.querySelector(".itmeDetails");

itmeDetails.innerHTML = `
  <img src="${productDetails.imgurl}" alt="">
  <h2>${productDetails.title}</h2>
  <p>${productDetails.desc}</p>
  <span>Size :  ${productDetails.size}</span>
  <br>
  <span><strong>Quntatity</strong> : ${productDetails.qty}</span>
  <br>
  <button class="edite" onclick="addtocard(${productDetails.id})">Edit</button>
`;
