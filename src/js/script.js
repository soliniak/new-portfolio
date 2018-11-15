let projects = {
  yoga: {
    name: "yoga",
    live: "https://soliniak.github.io/examples/yoga/index.html",
    src: "https://github.com/soliniak/Yoga",
    img: "img/project_icons/yoga.jpg",
    webp: "img/project_icons/yoga.webp",
    alt: "WWW - Weekly WebDev Challenge #16",
    order: "10",
    stack: {
      html5: ["true", '<i class="fab fa-html5 icon--stack"></i>'],
      js: ["true", '<i class="fab fa-js icon--stack"></i>'],
      gulp: ["true", '<i class="fab fa-gulp icon--stack"></i>'],
      photoshop: ["true", ""],
      npm: ["true", '<i class="fab fa-npm icon--stack"></i>'],
      sass: ["true", '<i class="fab fa-sass icon--stack"></i>'],
      react: ["false", '<i class="fab fa-react icon--stack"></i>']
    }
  },
  zest: {
    name: "zest",
    live: "https://soliniak.github.io/examples/zest/",
    src: "https://github.com/soliniak/ZEST",
    img: "img/project_icons/zest.jpg",
    webp: "img/project_icons/zest.webp",
    alt: "WWW - Weekly WebDev Challenge #12",
    order: "20",
    stack: {
      html5: ["true", '<i class="fab fa-html5 icon--stack"></i>'],
      js: ["true", '<i class="fab fa-js icon--stack"></i>'],
      gulp: ["true", '<i class="fab fa-gulp icon--stack"></i>'],
      photoshop: ["true", ""],
      npm: ["true", '<i class="fab fa-npm icon--stack"></i>'],
      sass: ["true", '<i class="fab fa-sass icon--stack"></i>'],
      react: ["false", '<i class="fab fa-react icon--stack"></i>']
    }
  },
  mogo: {
    name: "mogo",
    live: "https://soliniak.github.io/examples/mogo/",
    src: "https://github.com/soliniak/mogo",
    img: "img/project_icons/mogo.jpg",
    webp: "img/project_icons/mogo.webp",
    alt: "WWW - WebDev Challenge #35",
    order: "30",
    stack: {
      html5: ["true", '<i class="fab fa-html5 icon--stack"></i>'],
      js: ["true", '<i class="fab fa-js icon--stack"></i>'],
      gulp: ["true", '<i class="fab fa-gulp icon--stack"></i>'],
      photoshop: ["true", ""],
      npm: ["true", '<i class="fab fa-npm icon--stack"></i>'],
      sass: ["true", '<i class="fab fa-sass icon--stack"></i>'],
      react: ["false", '<i class="fab fa-react icon--stack"></i>']
    }
  },
  lorem: {
    name: "lorem",
    live: "https://soliniak.github.io/examples/landingpage/",
    src: "https://github.com/soliniak/zapakujloremipsum",
    img: "img/project_icons/zapakujlorem.jpg",
    webp: "img/project_icons/zapakujlorem.webp",
    alt: "WWW - zapakujloremipsum - zadanie rekrutacyjne",
    order: "40",
    stack: {
      html5: ["true", '<i class="fab fa-html5 icon--stack"></i>'],
      js: ["true", '<i class="fab fa-js icon--stack"></i>'],
      gulp: ["true", '<i class="fab fa-gulp icon--stack"></i>'],
      photoshop: ["false", ""],
      npm: ["true", '<i class="fab fa-npm icon--stack"></i>'],
      sass: ["true", '<i class="fab fa-sass icon--stack"></i>'],
      react: ["false", '<i class="fab fa-react icon--stack"></i>']
    }
  },
  typer: {
    name: "typer",
    live: "https://soliniak.github.io/examples/typer/",
    src: "https://github.com/soliniak/Word-typing-counter",
    img: "img/project_icons/typer.jpg",
    webp: "img/project_icons/typer.webp",
    alt: "APP - word typing counter",
    order: "25",
    stack: {
      html5: ["true", '<i class="fab fa-html5 icon--stack"></i>'],
      js: ["true", '<i class="fab fa-js icon--stack"></i>'],
      gulp: ["true", '<i class="fab fa-gulp icon--stack"></i>'],
      photoshop: ["false", ""],
      npm: ["true", '<i class="fab fa-npm icon--stack"></i>'],
      sass: ["true", '<i class="fab fa-sass icon--stack"></i>'],
      react: ["false", '<i class="fab fa-react icon--stack"></i>']
    }
  },
  weatherApp: {
    name: "weatherApp",
    live: "https://soliniak.github.io/Weather-App/",
    src: "https://github.com/soliniak/Weather-App",
    img: "img/project_icons/weather-app.jpg",
    webp: "img/project_icons/weather-app.webp",
    alt: "APP - REST API Weather App",
    order: "1",
    stack: {
      html5: ["true", '<i class="fab fa-html5 icon--stack"></i>'],
      js: ["true", '<i class="fab fa-js icon--stack"></i>'],
      gulp: ["true", '<i class="fab fa-gulp icon--stack"></i>'],
      photoshop: ["true", ""],
      npm: ["true", '<i class="fab fa-npm icon--stack"></i>'],
      sass: ["true", '<i class="fab fa-sass icon--stack"></i>'],
      react: ["true", '<i class="fab fa-react icon--stack"></i>']
    }
  }
};

Object.entries(projects).forEach(([key, value]) => {
  let stackData = "";
  if (typeof value.stack != "undefined") {
    Object.entries(value.stack).forEach(([stack, sval]) => {
      if (sval[0] == "true") {
        stackData += sval[1];
        return stackData;
      }
    });
  }

  let article = `
  <div class="card__description">
    <div class="card__header">
        <h2 class="card__title">${value.name}</h2>
        <span>
          <a href="${value.live}" class="btn--square btn--live"> live </a>
          <a href="${value.src}" class="btn--square"> src </a>
        </span>
    </div>
    <p class="card__text">
      ${value.alt}
    </p>
    <div class="card__stack">
      ${stackData}
    </div>
  </div>
  <picture class="image__container">
    <source type="image/webp" srcset="${value.webp}" class="card__image" />
    <img src="${value.img}" alt="${value.alt}" class="card__image" />
  </picture>		`;
  let art = document.createElement("article");
  art.classList.add("card");
  art.style.order = value.order;
  art.innerHTML = article;
  main.appendChild(art);
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
