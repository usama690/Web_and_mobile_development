var cowObj = [
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-001",
      image2: "images/cowHides/all/PCH-001",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-002",
      image2: "images/cowHides/all/PCH-002",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-003",
      image2: "images/cowHides/all/PCH-003",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-004",
      image2: "images/cowHides/all/PCH-004",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-005",
      image2: "images/cowHides/all/PCH-005",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-006",
      image2: "images/cowHides/all/PCH-006",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-007",
      image2: "images/cowHides/all/PCH-007",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-008",
      image2: "images/cowHides/all/PCH-008",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-009",
      image2: "images/cowHides/all/PCH-009",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-010",
      image2: "images/cowHides/all/PCH-010",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-011",
      image2: "images/cowHides/all/PCH-011",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-012",
      image2: "images/cowHides/all/PCH-012",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-013",
      image2: "images/cowHides/all/PCH-013",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-014",
      image2: "images/cowHides/all/PCH-014",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-015",
      image2: "images/cowHides/all/PCH-015",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-016",
      image2: "images/cowHides/all/PCH-016",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-017",
      image2: "images/cowHides/all/PCH-017",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-018",
      image2: "images/cowHides/all/PCH-018",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-019",
      image2: "images/cowHides/all/PCH-019",
    },
    {
      name: "Origianl Leather",
      price: "$63.5",
      image1: "images/cowHides/all/PCH-020",
      image2: "images/cowHides/all/PCH-020",
    },
  ];
  
  var cowRow = document.getElementById("cowRow");
  function displayProduct() {
      for (var i = 0; i < cowObj.length; i++) {
        cowRow.innerHTML += `<div class="col-md-3 col-sm-6">
          <div class="product-grid3 mb-5">
              <div class="product-image3">
                  <a href="#">
                      <img class="pic-1" src="${cowObj[i].image1}.jpg">
                      <img class="pic-2" src="${cowObj[i].image2}.jpg">
                  </a>
                  <ul class="social">
                      <li><a href="#"><i class="fa fa-shopping-bag"></i></a></li>
                      <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                  </ul>
              </div>
              <div class="product-content">
                  <h3 class="title"><a href="#">${cowObj[i].name}</a></h3>
                  <div class="price">
                  ${cowObj[i].price}
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
    
  