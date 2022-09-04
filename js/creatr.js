// variabls

let productName = document.querySelector("#productName");
let productdisc = document.querySelector("#productdisc");
let productsize = document.querySelector("#productsize");
let producturl = document.querySelector("#producturl");
let submeted = document.querySelector("#submeted");
let createForm = document.querySelector(".createForm");
let sizevalue;
let productimg;

// Events

productsize.addEventListener("change", getsizevalue);
createForm.addEventListener("submit", creatproductfun);
producturl.addEventListener("change", uplodefile);


// functions

function getsizevalue (e)
{
  sizevalue = e.target.value;
}
function creatproductfun (e)
{
  e.preventDefault();
  let allproduct = JSON.parse(localStorage.getItem("products")) || productDB;
  let namevalu = productName.value;
  let discvalue = productdisc.value;
  if (namevalu && discvalue)
  {
    let obj = {
      id: allproduct ? allproduct.length + 1 : 1,
      title: namevalu,
      size: sizevalue,
      imgurl: `imgs/head.jfif`,
      qty: 1,
      imgurl: productimg,
      desc: discvalue,
      isme:"Y",
    };
    let newproducts = allproduct ? [...allproduct, obj] : [obj];
    localStorage.setItem("products", JSON.stringify(newproducts));
    productName.value = "";
    productdisc.value = "";
    productsize.value = "";
    productDB.push(obj);
  }
  else
    alert("Enter Data")
  
  window.location = "index.html";
}

function uplodefile ()
{
  let file = this.files[0];
  getimgBase64(file);
  let types = ["image/jpeg", 'image/png'];
  if (types.indexOf(file.type) == -1)
  {
    alert("type not supported");
    return;
  }
  if (file.size > 2 * 1024 * 1024)
  {
    alert("Image not Execed 2MG");
    return;
  }
}
function getimgBase64 (file)
{
  let render = new FileReader();
  render.readAsDataURL(file);
  render.onload = function () {
    productimg = render.result;
  };
  render.onerror = function () {
    alert("Error !!");
  }
}