function openNav() {
  document.getElementById("Sidenav").style.width = "100%";
}
function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
}
!(function () {
  var e,
    s = document.documentElement,
    t = window,
    a = t.scrollY || s.scrollTop,
    n = 0,
    r = 0,
    o = document.getElementById("myHeader"),
    l = function () {
      (e = t.scrollY || s.scrollTop) > a ? (n = 2) : e < a && (n = 1),
        n !== r && p(n, e),
        (a = e);
    },
    p = function (e, s) {
      2 === e && s > 52
        ? (o.classList.add("hide"), (r = e))
        : 1 === e && (o.classList.remove("hide"), (r = e));
    };
  window.addEventListener("scroll", l);
})(),
  $(window).scroll(function () {
    console.log($(window).scrollTop()),
      $(window).scrollTop() > 63 && $(".site-header").addClass("navbar-fixed"),
      64 > $(window).scrollTop() &&
        $(".site-header").removeClass("navbar-fixed");
  }),
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      window.scrollY > 52
        ? (document.getElementById("navbar_top").classList.add("fixed-top"),
          (navbar_height = document.querySelector(".navbar").offsetHeight),
          (document.body.style.paddingTop = navbar_height + "px"))
        : (document.getElementById("navbar_top").classList.remove("fixed-top"),
          (document.body.style.paddingTop = "0"));
    });
  });
var i,
  swiper = new Swiper(".bannerSliderWraping", {
    speed: 1e3,
    spaceBetween: -0,
    speed: 3e3,
    autoplay: { delay: 3e3 },
    loop: !0,
  }),
  swiper = new Swiper(".tabSlider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: !0,
  }),
  swiper = new Swiper(".tabNextSliderBox", {
    spaceBetween: 10,
    slidesPerView: 2,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    breakpoints: {
      300: { slidesPerView: 1, spaceBetween: 1, resistanceRatio: 0.85 },
      480: { slidesPerView: 1, spaceBetween: 10, resistanceRatio: 0.85 },
      768: { slidesPerView: 1, spaceBetween: 10, resistanceRatio: 0.85 },
      980: { slidesPerView: 2, spaceBetween: 20, resistanceRatio: 0.85 },
      1024: { slidesPerView: 2, spaceBetween: 30, resistanceRatio: 0.85 },
      1280: {
        slidesPerView: 2,
        resistanceRatio: 0,
        spaceBetween: 30,
        resistanceRatio: 0.85,
      },
      1920: { slidesPerView: 2, spaceBetween: 10, resistanceRatio: 0.85 },
    },
  }),
  swiper = new Swiper(".thumbNav", {
    loop: !1,
    spaceBetween: 0,
    slidesPerView: 9,
    watchSlidesProgress: !0,
    noSwiping: !0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    breakpoints: {
      300: { slidesPerView: 1, spaceBetween: 24, resistanceRatio: 0.85 },
      480: { slidesPerView: 1, spaceBetween: 24, resistanceRatio: 0.85 },
      768: {
        slidesPerView: 5,
        spaceBetween: 28,
        resistanceRatio: 0.85,
        loop: !0,
      },
      980: { slidesPerView: 5, spaceBetween: 28, resistanceRatio: 0.85 },
      1280: {
        slidesPerView: 9,
        resistanceRatio: 0,
        spaceBetween: 1,
        resistanceRatio: 0.85,
      },
    },
  }),
  swiper2 = new Swiper(".thumbNailCust", {
    loop: !0,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: { el: ".swiper-pagination", clickable: !0 },
    thumbs: { swiper: swiper },
  }),
  swiper = new Swiper(".jourNailCust", {
    loop: !1,
    spaceBetween: 0,
    slidesPerView: 9,
    watchSlidesProgress: !0,
    noSwiping: !0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      300: { slidesPerView: 1, spaceBetween: 24, resistanceRatio: 0.85 },
    },
  }),
  swiper2 = new Swiper(".jourNailCust", {
    loop: !0,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: { el: ".swiper-pagination", clickable: !0 },
    thumbs: { swiper: swiper },
  }),
  swiper = new Swiper(".designSlider", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: { delay: 3e3 },
    pagination: { el: ".swiper-pagination", clickable: !0 },
  }),
  swiper = new Swiper(".blogSlider", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: { delay: 3e3 },
    pagination: { el: ".swiper-pagination", clickable: !0 },
    breakpoints: {
      300: { slidesPerView: 1, spaceBetween: 24, resistanceRatio: 0.85 },
      480: { slidesPerView: 1, spaceBetween: 24, resistanceRatio: 0.85 },
      768: {
        slidesPerView: 2,
        spaceBetween: 28,
        resistanceRatio: 0.85,
        loop: !0,
      },
      980: { slidesPerView: 2, spaceBetween: 28, resistanceRatio: 0.85 },
      1280: {
        slidesPerView: 3,
        resistanceRatio: 0,
        spaceBetween: 19,
        resistanceRatio: 0.85,
      },
    },
  }),
  swiper = new Swiper(".about-test", {
    spaceBetween: 50,
    slidesPerView: 4,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    breakpoints: {
      300: { slidesPerView: 1, spaceBetween: 24, resistanceRatio: 0.85 },
      480: { slidesPerView: 1, spaceBetween: 24, resistanceRatio: 0.85 },
      768: { slidesPerView: 2, spaceBetween: 28, resistanceRatio: 0.85 },
      980: { slidesPerView: 2, spaceBetween: 28, resistanceRatio: 0.85 },
      1280: {
        slidesPerView: 3,
        resistanceRatio: 0,
        spaceBetween: 14,
        resistanceRatio: 0.85,
      },
    },
  }),
  swiper = new Swiper(".thumbNav-mob", {
    loop: !1,
    spaceBetween: 0,
    slidesPerView: 9,
    watchSlidesProgress: !0,
    noSwiping: !0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      300: { slidesPerView: 1, spaceBetween: 24, resistanceRatio: 0.85 },
      480: { slidesPerView: 1, spaceBetween: 24, resistanceRatio: 0.85 },
      768: {
        slidesPerView: 5,
        spaceBetween: 28,
        resistanceRatio: 0.85,
        loop: !0,
      },
      980: { slidesPerView: 5, spaceBetween: 28, resistanceRatio: 0.85 },
      1280: {
        slidesPerView: 9,
        resistanceRatio: 0,
        spaceBetween: 1,
        resistanceRatio: 0.85,
      },
    },
  }),
  swiper = new Swiper(".commerProjSlider", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: { delay: 3e3 },
    pagination: { el: ".swiper-pagination", clickable: !0 },
    breakpoints: {
      300: { slidesPerView: 1, spaceBetween: 24, resistanceRatio: 0.85 },
      480: { slidesPerView: 1, spaceBetween: 24, resistanceRatio: 0.85 },
      768: {
        slidesPerView: 1,
        spaceBetween: 28,
        resistanceRatio: 0.85,
        loop: !0,
      },
      980: { slidesPerView: 1, spaceBetween: 28, resistanceRatio: 0.85 },
      1280: {
        slidesPerView: 1,
        resistanceRatio: 0,
        spaceBetween: 19,
        resistanceRatio: 0.85,
      },
    },
  });



 
  $(document).ready(function () {
    // Select the dropdown menu
    const $dropdown = $(".dropdown");

    // Add click event listener to the dropdown
    $dropdown.on("click", function (e) {
        // Toggle the 'active' class on click
        $(this).toggleClass("active");

        // Prevent default behavior to avoid page scrolling or any default actions
        // e.preventDefault();
    });
});

