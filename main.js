//

// Scroll Effect on Navbar Section
// window.addEventListener("scroll", function () {
//   var navbar = document.querySelector("navbar_section");
//   var scrollY = window.scrollY;

//   if (scrollY >= 50) {
//     navbar.classList.add("fixed");
//   } else {
//     navbar.classList.remove("fixed");
//   }
// });

// Owl Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    autoplay: true,
    dots: true,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2.5,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

// End
