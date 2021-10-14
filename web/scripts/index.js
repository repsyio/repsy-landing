"use strict";

const header = document.querySelector(".header");
const logo = document.querySelector(".header__logo");
const links = document.querySelectorAll(".nav__link");
const backToTopButton = document.querySelector(".back-to-top");

const lineTop = document.querySelector(".line-top");
const lineBottom = document.querySelector(".line-bottom");

const pricingCards = document.querySelectorAll(".pricing-card");


const stickyHeader = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.style.padding = ".5rem 2rem";
    header.classList.add("header--on-scroll");
    header.style.transition = "all .5s";
    logo.style.width = "9rem";
    logo.style.height = "3rem";
    logo.style.transition = "all .5s";
    links.forEach((link) => {
      (link.style.fontSize = "1.4rem"), (link.style.transition = "all .5s");
    });
  } else {
    header.classList.remove("header--on-scroll");
    logo.style.width = "12rem";
    logo.style.height = "4rem";
    links.forEach((link) => (link.style.fontSize = "1.6rem"));
  }
};

const headerObserver = new IntersectionObserver(stickyHeader, {
  root: null,
  threshold: 0,
  rootMargin: "-50px",
});

headerObserver.observe(lineTop);


function showBackToTopButton(entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) backToTopButton.style.display = "block";
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



pricingCards.forEach((card,i) => card.addEventListener("mouseover",function(){
  
  if(card.querySelector('h3').textContent.toLowerCase() !== 'popular')
  {
   pricingCards[1].classList.remove('pricing-card--active');
   pricingCards[1].querySelector(".button").classList.remove('button--active');
  }
}));


