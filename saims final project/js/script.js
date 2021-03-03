// some scripts

// jquery ready start
$(document).ready(function () {
  // jQuery code

  /* ///////////////////////////////////////
  
      THESE FOLLOWING SCRIPTS ONLY FOR BASIC USAGE, 
      For sliders, interactions and other
  
      */ ///////////////////////////////////////

  //////////////////////// Prevent closing from click inside dropdown
  $(document).on("click", ".dropdown-menu", function (e) {
    e.stopPropagation();
  });

  $(".js-check :radio").change(function () {
    var check_attr_name = $(this).attr("name");
    if ($(this).is(":checked")) {
      $("input[name=" + check_attr_name + "]")
        .closest(".js-check")
        .removeClass("active");
      $(this).closest(".js-check").addClass("active");
      // item.find('.radio').find('span').text('Add');
    } else {
      item.removeClass("active");
      // item.find('.radio').find('span').text('Unselect');
    }
  });

  $(".js-check :checkbox").change(function () {
    var check_attr_name = $(this).attr("name");
    if ($(this).is(":checked")) {
      $(this).closest(".js-check").addClass("active");
      // item.find('.radio').find('span').text('Add');
    } else {
      $(this).closest(".js-check").removeClass("active");
      // item.find('.radio').find('span').text('Unselect');
    }
  });

  //////////////////////// Bootstrap tooltip
  if ($('[data-toggle="tooltip"]').length > 0) {
    // check if element exists
    $('[data-toggle="tooltip"]').tooltip();
  } // end if
});
// jquery end

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // toggle
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();

$("#OriginalLeather .owl-carousel").owlCarousel({
  loop: true,
  dots: true,
  margin: 30,
  pagination: false,
  autoplay: true,
  rtl: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  nav: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$("#ArtificialLeather .owl-carousel").owlCarousel({
  loop: true,
  dots: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  nav: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$("#fabrics .owl-carousel").owlCarousel({
  loop: true,
  dots: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  rtl: true,
  nav: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$("#cowHides .owl-carousel").owlCarousel({
  loop: true,
  dots: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  nav: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(".testi4").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    1650: {
      items: 1,
    },
  },
});
// GLOBAL

var products = [];
var cartItems = [];

// DIVS

var cartsIcon = document.querySelector("carts");

// DATA

var originalLeatherObj = [
  { name: "original Leather", price: "$25" },
  { name: "original Leather", price: "$25" },
  { name: "original Leather", price: "$25" },
  { name: "original Leather", price: "$25" },
  { name: "original Leather", price: "$25" },
  { name: "original Leather", price: "$25" },
  { name: "original Leather", price: "$25" },
  { name: "original Leather", price: "$25" },
];
var artificialLeatherObj = [
  { name: "Artificial Leather", price: "$25" },
  { name: "Artificial Leather", price: "$25" },
  { name: "Artificial Leather", price: "$25" },
  { name: "Artificial Leather", price: "$25" },
  { name: "Artificial Leather", price: "$25" },
  { name: "Artificial Leather", price: "$25" },
  { name: "Artificial Leather", price: "$25" },
  { name: "Artificial Leather", price: "$25" },
];
var fabricsObj = [
  { name: "fabrics", price: "$25" },
  { name: "fabrics", price: "$25" },
  { name: "fabrics", price: "$25" },
  { name: "fabrics", price: "$25" },
  { name: "fabrics", price: "$25" },
  { name: "fabrics", price: "$25" },
  { name: "fabrics", price: "$25" },
  { name: "fabrics", price: "$25" },
];
var cowHidesObj = [
  { name: "Cow Hides", price: "$25" },
  { name: "Cow Hides", price: "$25" },
  { name: "Cow Hides", price: "$25" },
  { name: "Cow Hides", price: "$25" },
  { name: "Cow Hides", price: "$25" },
  { name: "Cow Hides", price: "$25" },
  { name: "Cow Hides", price: "$25" },
  { name: "Cow Hides", price: "$25" },
];

// HTML

function HTMLLeatherProduct(con) {
  let URL = `../images/originalLeather/prod${con}.jpg`;
  let btn = `btnLeather${con}`;

  return `
  <div class="item py-5">
                    <div class="product product-grid3">
                        <div class="product-image3">
                            <a href="#">
                                <img class="pic-1" src="${URL}">
                                <img class="pic-2" src="${URL}">
                            </a>
                            <ul class="social">
                                <li onclick = "cart2('${
                                  originalLeatherObj[con - 1].name
                                }','${
    originalLeatherObj[con - 1].price
  }','${con}','${btn}')"><a href="#"><i class="fa fa-shopping-bag"></i></a></li>
                                <li onclick = "cart('${
                                  originalLeatherObj[con - 1].name
                                }','${
    originalLeatherObj[con - 1].price
  }','${con}','${btn}')"><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="#">${
                              originalLeatherObj[con - 1].name
                            }</a></h3>
                            <div class="price">
                            ${originalLeatherObj[con - 1].price}.00
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
                </div>
  `;
}

//RENDER

function render() {
  for (let index = 1; index <= 8; index++) {
    originalLeatherRow.innerHTML += `${HTMLLeatherProduct(index)}`;
  }
}

// isotope js

$(document).ready(function () {
  $(".work-filter-list").isotope();

  $(".work-filter li").on("click", function () {
    var selector = $(this).attr("data-filter");
    $(".work-filter-list").isotope({
      filter: selector,
    });
  });
});
var myDIV = document.getElementById("myDIV");
var btns = myDIV.getElementsByClassName("list-inline-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
