let productDom = document.querySelector(".products");
let noproduct = document.querySelector(".noproduct");
let s = "2px solid var(--mcolor)";
let drowproductItme;
(drowproductItme = function (products = []) {
  let myproduct = products.filter((i) => i.isme === "Y");
  if (myproduct.length != 0) {
    let productItme = myproduct.map((itme) => {
      return `
  <div class="productBOx" style="border:${itme.isme === "Y" ? s : ""}">
          <div class="pItme">
            <img src="${itme.imgurl}" alt="_1">
          </div>
          <div class="pDecr">
            <a onclick=saveitme(${itme.id})>${itme.title}</a>
            <p>${itme.desc}</p>
            <span><strong>Size</strong> : ${itme.size}</span>
            
            ${
              itme.isme === "Y" &&
              `<br><button class='edit'onclick="editeproduct(${itme.id})">Edit Product</button>`
            }
            ${
              itme.isme === "Y" &&
              `<br><button class='edit'onclick="deletproduct(${itme.id})">Delet Product</button>`
            }
          </div>
          
        </div>
  `;
    });
    productDom.innerHTML = productItme.join("");
  } 
})(JSON.parse(localStorage.getItem("products")) || productDB);

// Edit product

function editeproduct (id)
{
  
  localStorage.setItem("editeproduct",id);
  window.location = "editeproduct.html";
}

// delet product

function deletproduct (id) {
  products = JSON.parse(localStorage.getItem("products")) || productDB;
  let myproduct = products.filter((i) => i.isme === "Y");
  let filtered = myproduct.filter(i => i.id !== id);
  drowproductItme(filtered);
  let clickeditme = myproduct.find((i) => i.id === id);
  products = products.filter((itme) => itme.id !== clickeditme.id);
  localStorage.setItem("products", JSON.stringify(products));
}