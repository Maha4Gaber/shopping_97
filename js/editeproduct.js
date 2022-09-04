// // variabls
let productid = JSON.parse(localStorage.getItem("editeproduct"));
let productes = JSON.parse(localStorage.getItem("products")) || productDB;
let getproduct = productes.find(i => i.id === productid);

let productName = document.querySelector("#productName");
let productdisc = document.querySelector("#productdisc");
let productsize = document.querySelector("#productsize");
let producturl = document.querySelector("#producturl");
let submeted = document.querySelector("#submeted");
let updatForm = document.querySelector(".updatForm");
let sizevalue;
let productimg;
console.log(getproduct);

productName.value = getproduct.title;
productdisc.value = getproduct.desc;
productsize.value = getproduct.size;
productimg = getproduct.imgurl;
// Events

productsize.addEventListener("change", getsizevalue);
updatForm.addEventListener("submit", updateproductfun);
producturl.addEventListener("change", uplodefile);

// functions

function getsizevalue(e) {
  sizevalue = e.target.value;
}
function updateproductfun(e) {
  e.preventDefault();
  getproduct.title = productName.value;
  getproduct.desc = productdisc.value;
  getproduct.size = productsize.value; 
  getproduct.imgurl = productimg;
  console.log(getproduct);
  localStorage.setItem("products", JSON.stringify(productes));
  window.location = "index.html";
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
