"use strict";

import Projects from "/js/projects.js";

Object.entries(Projects).forEach(([project, pval]) => {
  let stackData = "";
  if (typeof pval.stack != "undefined") {
    Object.entries(pval.stack).forEach(([stack, sval]) => {
      if (sval[0] == "true") {
        stackData += sval[1];
        return stackData;
      }
    });
  }

  let article = `
  <div class="card__description">
    <div class="card__header">
        <h2 class="card__title">${pval.name}</h2>
        <span>
          <a href="${pval.live}" class="btn--square btn--live"> live </a>
          <a href="${pval.src}" class="btn--square"> src </a>
        </span>
    </div>
    <p class="card__text">
      ${pval.alt}
    </p>
    <div class="card__stack">
    
      ${stackData}
    </div>
  </div>
  <picture class="image__container portfolio-image__container">
    <source type="image/webp" srcset="${
      pval.webp
    }" class="card__image portfolio-image" />
    <img src="${pval.img}" alt="${
    pval.alt
  }" class="card__image portfolio-image" />
  </picture>`;

  let art = document.createElement("article");
  art.classList.add("card", "portfolio__card");
  art.style.order = pval.order;
  art.innerHTML = article;
  portfolio.appendChild(art);
});

const cards = document.querySelectorAll(".card");

[].forEach.call(cards, card => {
  card.addEventListener("mousedown", () => {
    card.style.backgroundColor = "#fbfbfb";
  });
  card.addEventListener("mouseup", () => {
    card.style.backgroundColor = "#fff";
  });
});

// --- active section
const btnAbout = document.querySelector(".btn--about");
const btnPortfolio = document.querySelector(".btn--portfolio");
const btnContact = document.querySelector(".btn--contact");
const btnGotoContact = document.querySelector(".btn--goto-contact");

const aboutSection = -100,
  portfolioSection = 0,
  contactSection = 100;

btnGotoContact.addEventListener("click", () => {
  activeSection(contactSection);
  sectionHeight(contact);
  btnContact.classList.add("link--active");
  window.innerHeight = "400px";
});

menu.addEventListener("click", function(e) {
  e.preventDefault();

  if (e.target) {
    let offset;
    const sectionTarget = e.target.getAttribute("href");

    if (sectionTarget == "#about") offset = -100;
    if (sectionTarget == "#portfolio") offset = 0;
    if (sectionTarget == "#contact") offset = 100;

    const section = document.querySelector(sectionTarget);

    sectionHeight(section);

    activeSection(offset);
    e.target.classList.add("link--active");
  }
});

let sectionHeight = section => {
  let thisSection = section.offsetHeight || portfolio.offsetHeight;
  html.style.height = thisSection + 50 + "px";
  body.style.height = thisSection + 50 + "px";
};

window.onload = sectionHeight;

let activeSection = offset => {
  about.style.left = aboutSection - offset + "vw";
  portfolio.style.left = portfolioSection - offset + "vw";
  contact.style.left = contactSection - offset + "vw";

  btnAbout.classList.remove("link--active");
  btnPortfolio.classList.remove("link--active");
  btnContact.classList.remove("link--active");
};
