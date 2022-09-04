let cardproductdom = document.querySelector(".cardsprodact div");
let cardproduct = document.querySelector(".cardsprodact");
let soppingicon = document.querySelector(".soppingicon");
let badge = document.querySelector(".soppingicon span");




// add to  card
let addeditme = localStorage.getItem("productincard")
  ? JSON.parse(localStorage.getItem("productincard"))
  : [];
if (addeditme)
{
  addeditme.map(
    (itme) => (cardproductdom.innerHTML += `<p>${itme.title}</p>`)
  );
  badge.innerHTML = addeditme.length;
}


soppingicon.addEventListener("click", opencard);
function opencard() {
  if (cardproductdom.innerHTML != "") {
    if (cardproduct.style.display == "block")
      cardproduct.style.display = "none";
    else cardproduct.style.display = "block";
  }
}

function tocard() {
  window.location = "card.html";
}