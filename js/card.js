let productDom = document.querySelector(".products");
let noproduct = document.querySelector(".noproduct");
if (localStorage.getItem("productincard"))
{
  drowproductincard(JSON.parse(localStorage.getItem("productincard")));
  
}
function drowproductincard (product = []) {

  if (JSON.parse(localStorage.getItem("productincard")).length !== 0) {
    let productItme = product.map((itme) => {
      return `
  <div class="productBOx">
          <div class="pItme">
            <img src="${itme.imgurl}" alt="_1">
          </div>
          <div class="pDecr">
            <h2>${itme.title}</h2>
            <p>${itme.desc}</p>
            <span><strong>Size</strong> : ${itme.size}</span>
            <br>
            <span><strong>Quntatity</strong> : ${itme.qty}</span>
          </div>
          <div class="pAction">
            <button class="addToCard" onclick=removefromcard(${itme.id})>Remove From Card</button>
          </div>
        </div>
  `;
    });
    productDom.innerHTML = productItme.join("");
  }
  else
  {
    noproduct.style.display = "block";
    }
  
}
function removefromcard (id)
{
  if (localStorage.getItem("productincard")) {
    let itms = JSON.parse(localStorage.getItem("productincard"));
    let filltereditmes = itms.filter((itme) => itme.id !== id);
    drowproductincard(filltereditmes);
    localStorage.setItem("productincard", JSON.stringify(filltereditmes));
    
    
  }
}
