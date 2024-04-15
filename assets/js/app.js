// import LocomotiveScroll from 'locomotive-scroll';
// import $ from 'jquery';
// window.$ = window.jQuery = $;
// import "slick-carousel/slick/slick";
import TypeIt from "typeit";
// import "../postcss/app.css";
//import LocomotiveScroll from "locomotive-scroll";

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
//   lerp: 0.3,
// });

// $(window).load(function () {
//   locoScroll.update();
//   ScrollTrigger.update;
// });

new TypeIt("#asyncExec", {
  speed: 50,
  waitUntilVisible: true,
  startDelay: 750,
  loop: true,
  cursorChar: "&#10073;",
  breakLines: false,
})
  .type("machine learning tools and services.", { delay: 1500 })
  // .exec(async () => {
  //     //-- Return a promise that resolves after something happens.
  //     await new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //             return resolve();
  //         }, 50);
  //     });
  // })
  .delete(36)

  .type("fintech systems and solutions.", { delay: 1500 })
  .delete(30, { speed: 100 })

  .type("software for recruitment and marketing.", { delay: 1500 })
  .delete(39)

  .type("chatbots for knowledge management.", { delay: 1500 })
  .delete(34)
  .go();

$(".hamburger").click(function (e) {
  $(".menu").toggleClass("is-active");
  $(".hamburger").toggleClass("is-active");
  e.stopPropagation();
});

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     elMobile: document,
//     name: 'scroll',
//     smooth: true, // smooth scroll
// });

/*
$(".slick").slick({
  // normal options...
  infinite: false,

  // the magic
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 300,
      settings: "unslick", // destroys slick
    },
  ],
});
*/
