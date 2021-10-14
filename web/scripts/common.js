"use strict";

const header = document.querySelector(".header");
const logo = document.querySelector(".header-logo");
const links = document.querySelectorAll(".nav-link");
const backToTopButton = document.querySelector(".back-to-top");
const lineTop = document.querySelector(".line-top");
const lineBottom = document.querySelector(".line-bottom");
const pricingCards = document.querySelectorAll(".pricingCard");
const navbarButton = document.querySelector(".navbar-button");
const navbarIcon1 = document.querySelector(".navbar-icon1");
const navbarIcon2 = document.querySelector(".navbar-icon2");
const navbarIcon3 = document.querySelector(".navbar-icon3");
const dropDownMenu = document.querySelector(".dropdown-menu");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const formButton = document.querySelector(".messageForm-button");
const formSpan = document.querySelector(".messageForm-span");
const message = document.getElementById("message");
window.addEventListener("load", function () {
  if (this.innerWidth < 992) {
    dropDownMenu.classList.remove("animation", "slideDownIn");
  }
});

const stickyHeader = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.style.padding = ".5rem 2rem";
    header.classList.add("header--on-scroll");
    header.style.transition = "all .5s";
    logo.style.width = "10rem";
    logo.style.height = "4rem";
    logo.style.transition = "all .5s";
    links.forEach((link) => {
      (link.style.fontSize = "1.4rem"), (link.style.transition = "all .5s");
    });
  } else {
    header.classList.remove("header--on-scroll");
    logo.style.width = "12rem";
    logo.style.height = "4rem";
    header.style.padding = "1rem 2rem";
    links.forEach((link) => (link.style.fontSize = "1.6rem"));
  }
};

const headerObserver = new IntersectionObserver(stickyHeader, {
  root: null,
  threshold: 0,
  rootMargin: "-70px",
});

headerObserver.observe(lineTop);

function showBackToTopButton(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting && window.innerWidth > 992)
    backToTopButton.style.display = "block";
  else backToTopButton.style.display = "none";
}

const backToTopButtonObserver = new IntersectionObserver(showBackToTopButton, {
  root: null,
  threshold: 0,
});
backToTopButtonObserver.observe(lineBottom);

const scrollToTop = function () {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
};
backToTopButton.addEventListener("click", scrollToTop);

pricingCards.forEach((card) => {
  card.addEventListener("mouseover", function (e) {
    if (card.querySelector("h3").textContent.toLowerCase() !== "popular") {
      pricingCards[1].classList.remove("pricingCard--active");
      pricingCards[1]
        .querySelector(".button")
        .classList.remove("button--active");
    }
  });
});

let clicked = false;
navbarButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (!clicked) {
    this.style.outline = "none";
    navbarIcon2.style.backgroundColor = "transparent";
    navbarIcon1.classList.add("rotate-right");
    navbarIcon3.classList.add("rotate-left");
    clicked = true;
  } else {
    navbarIcon2.style.backgroundColor = "#9c95ac";
    navbarIcon1.classList.remove("rotate-right");
    navbarIcon3.classList.remove("rotate-left");
    clicked = false;
  }
});

dropdownItems.forEach((item) => {
  item.addEventListener("mousedown", function (e) {
    e.preventDefault();
    item.style.backgroundColor = "#ddd";
    item.style.color = "#110202";
  });
});

window.addEventListener("resize", function () {
  if (this.innerWidth < 992) {
    dropDownMenu.classList.remove("animation", "slideDownIn");
  } else if (this.innerWidth < 1200) backToTopButton.style.display = "none";
  else backToTopButtonObserver.observe(lineBottom);
});
