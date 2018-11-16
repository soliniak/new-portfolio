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
  <picture class="image__container">
    <source type="image/webp" srcset="${pval.webp}" class="card__image" />
    <img src="${pval.img}" alt="${pval.alt}" class="card__image" />
  </picture>`;

  let art = document.createElement("article");
  art.classList.add("card");
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

btnAbout.addEventListener("click", () => {
  activeSection(-100);
  btnAbout.classList.add("link--active");
});
btnPortfolio.addEventListener("click", () => {
  activeSection(0);
  btnPortfolio.classList.add("link--active");
});
btnContact.addEventListener("click", () => {
  activeSection(100);
  btnContact.classList.add("link--active");
});

let activeSection = offset => {
  about.style.left = -100 - offset + "vw";
  portfolio.style.left = 0 - offset + "vw";
  contact.style.left = 100 - offset + "vw";

  btnAbout.classList.remove("link--active");
  btnPortfolio.classList.remove("link--active");
  btnContact.classList.remove("link--active");
};
