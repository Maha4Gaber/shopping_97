let productDom = document.querySelector(".products");
let noproduct = document.querySelector(".noproduct");



function drowproductinfavorite (product = []) {
  // if (JSON.parse(localStorage.getItem("productinfavorite")).length == 0) {
  //   console.log(1);
  //   noproduct.style.display = "block";
  // }
  products = JSON.parse(localStorage.getItem("productinfavorite")) || product;
  let productItme = products.map((itme) => {
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
            <button class="addToCard" onclick="removefromfavorite(${itme.id})"
            >Remove From Favorites</button>
          </div>
        </div>
  `;
  });
  
  productDom.innerHTML = productItme.join("");
}
drowproductinfavorite();

// onclick=removefromfavorite(${itme.id})

function removefromfavorite(id) {
  if (localStorage.getItem("productinfavorite")) {
    let itms = JSON.parse(localStorage.getItem("productinfavorite"));
    let filltereditmes = itms.filter((itme) => itme.id !== id);
    drowproductinfavorite(filltereditmes);
    localStorage.setItem("productinfavorite", JSON.stringify(filltereditmes));
  }
}

// function removefromfavorite(id) {
//   if (localStorage.getItem("productinfavorite")) {
//     let itms = JSON.parse(localStorage.getItem("productinfavorite"));
//     let filltereditmes = itms.filter((itme) => itme.id !== id);
//     // let removeitmes = itms.find((itme) => itme.id !== id);
//     // if (removeitmes)
//     // {
//     //   removeitmes.liked = false;
//     // }
//     // .liked = false;
//     drowproductinfavorite(filltereditmes);
//     localStorage.setItem("productinfavorite", JSON.stringify(filltereditmes));
//     // localStorage.setItem("products", JSON.stringify(products));
//   }
// }
