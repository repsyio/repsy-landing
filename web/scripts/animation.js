"use strict";

const npm = document.querySelector(".sectionAbout-npm");
const python = document.querySelector(".sectionAbout-python");
const maven = document.querySelector(".sectionAbout-maven");

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 8000,
  }
});

const motion = function (el1, el2) {
  return function () {
    el1.animate(
      [
        // keyframes
        { transform: "translateY(-15px)", opacity: 1 },
        { transform: "translateY(-60px)", opacity: 0 },
      ],
      {
        duration: 800,
        easing: "ease-out",
        fill: "forwards",
        delay: 4000,
      }
    );

    el2.animate(
      [
        // keyframes
        { transform: "translateY(45px)", opacity: 0 },
        { transform: "translateY(-15px)", opacity: 1 },
      ],
      {
        duration: 800,
        easing: "ease-out",
        fill: "forwards",
        delay: 4000,
      }
    );
  };
};

const motion1 = motion(maven, python);
const motion2 = motion(python, npm);
const motion3 = motion(npm, maven);

const timer = function () {
  motion1();
  setTimeout(motion2, 5000);
  setTimeout(motion3, 10000);
};
timer();
setInterval(timer, 20000);
