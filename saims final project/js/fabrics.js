var fabricsObj = [
  {
    name: "Origianl Leather",
    price: "$63.5",
    image1: "images/fabrics/fabric1",
    image2: "images/fabrics/fabric1",
  },
  {
    name: "Origianl Leather",
    price: "$63.5",
    image1: "images/fabrics/fabric1",
    image2: "images/fabrics/fabric1",
  },
  {
    name: "Origianl Leather",
    price: "$63.5",
    image1: "images/fabrics/fabric1",
    image2: "images/fabrics/fabric1",
  },
  {
    name: "Origianl Leather",
    price: "$63.5",
    image1: "images/fabrics/fabric1",
    image2: "images/fabrics/fabric1",
  },
];

function addObj() {}

var fabricRow = document.getElementById("fabricRow");
function displayProduct() {
  for (var i = 0; i < fabricsObj.length; i++) {
    fabricRow.innerHTML += `<div class="col-md-3 col-sm-6">
        <div class="product-grid3 mb-5">
            <div class="product-image3">
                <a href="#">
                    <img class="pic-1" src="${fabricsObj[i].image1}.jpg">
                    <img class="pic-2" src="${fabricsObj[i].image2}.jpg">
                </a>
                <ul class="social">
                    <li onclick="addObj()"><a href="#"><i class="fa fa-shopping-bag"></i></a></li>
                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
            <div class="product-content">
                <h3 class="title"><a href="#">${fabricsObj[i].name}</a></h3>
                <div class="price">
                ${fabricsObj[i].price}
                    <span>$75.00</span>
                </div>
                <ul class="rating">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star disable"></li>
                    <li class="fa fa-star disable"></li>
                </ul>
            </div>
        </div>
    </div>`;
    // localStorage.setItem('fabrics', JSON.stringify(fabrics[i]));
    // var retrieveObj = localStorage.getItem("fabrics");
    // console.log("retrieveObject:", JSON.parse(retrieveObj));
  }
}
displayProduct();
