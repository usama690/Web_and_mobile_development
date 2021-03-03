var originalObj = [
  {
    name: "Origianl Leather",
    price: "$63.5",
    image1: "images/originalLeather/All Products/original1.jpg",
    image2: "images/originalLeather/All Products/original1.jpg",
  },
  {
    name: "Origianl Leather",
    price: "$63.5",
    image1: "images/originalLeather/All Products/original2.jpg",
    image2: "images/originalLeather/All Products/original2.jpg",
  },
  {
    name: "Origianl Leather",
    price: "$63.5",
    image1: "images/originalLeather/All Products/original3.jpg",
    image2: "images/originalLeather/All Products/original3.jpg",
  },
  {
    name: "Origianl Leather",
    price: "$63.5",
    image1: "images/originalLeather/All Products/original4.jpg",
    image2: "images/originalLeather/All Products/original4.jpg",
  },
  {
    name: "Origianl Leather",
    price: "$63.5",
    image1: "images/originalLeather/All Products/original5.jpg",
    image2: "images/originalLeather/All Products/original5.jpg",
  },
  {
    name: "Origianl Leather",
    price: "$63.5",
    image1: "images/originalLeather/All Products/original6.jpg",
    image2: "images/originalLeather/All Products/original6.jpg",
  },
  {
    name: "Origianl Leather",
    price: "$63.5",
    image1: "images/originalLeather/All Products/original7.jpg",
    image2: "images/originalLeather/All Products/original7.jpg",
  },
  {
    name: "Origianl Leather",
    price: "$63.5",
    image1: "images/originalLeather/All Products/original8.jpg",
    image2: "images/originalLeather/All Products/original8.jpg",
  },
  {
    name: "Origianl Leather",
    price: "$63.5",
    image1: "images/originalLeather/All Products/original9.jpg",
    image2: "images/originalLeather/All Products/original9.jpg",
  },
  {
    name: "Origianl Leather",
    price: "$63.5",
    image1: "images/originalLeather/All Products/original10.jpg",
    image2: "images/originalLeather/All Products/original10.jpg",
  },
  {
    name: "Origianl Leather",
    price: "$63.5",
    image1: "images/originalLeather/All Products/original11.jpg",
    image2: "images/originalLeather/All Products/original11.jpg",
  },
  {
    name: "Origianl Leather",
    price: "$63.5",
    image1: "images/originalLeather/All Products/original12.jpg",
    image2: "images/originalLeather/All Products/original12.jpg",
  },
];


var firstRow = document.getElementById("firstRow");

function displayProduct() {
  for (var i = 0; i < originalObj.length; i++) {
    firstRow.innerHTML += `<div class="col-md-3 col-sm-6">
      <div class="product-grid3 mb-5">
          <div class="product-image3">
              <a href="#">
                  <img class="pic-1" src="${originalObj[i].image1}">
                  <img class="pic-2" src="${originalObj[i].image2}">
              </a>
              <ul class="social">
                  <li><a href="#"><i class="fa fa-shopping-bag"></i></a></li>
                  <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
              </ul>
          </div>
          <div class="product-content">
              <h3 class="title"><a href="#">${originalObj[i].name}</a></h3>
              <div class="price">
              ${originalObj[i].price}
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
  }
}
displayProduct();


