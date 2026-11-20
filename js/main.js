// Renderiza las tarjetas de proyectos
const container = document.getElementById("projects");

PROJECTS.forEach((p) => {
  const card = document.createElement("article");
  card.className = "case-study";

  const bg = p.image
    ? `linear-gradient(35deg, rgba(0,0,0,.66), rgba(0,0,0,0) 70%), url("${p.image}") center / cover no-repeat`
    : `linear-gradient(35deg, rgba(0,0,0,.55), rgba(0,0,0,0) 70%), ${p.color || "#444"}`;
  card.style.background = bg;

  const brand = p.logo
    ? `<img class="case-study-logo" src="${p.logo}" alt="${p.client}" loading="lazy" />`
    : `<span class="case-study-client">${p.client}</span>`;

  const button = p.link
    ? `<a href="${p.link}" class="case-study-button">Ver proyecto</a>`
    : `<span class="case-study-button is-disabled" aria-disabled="true">Próximamente</span>`;

  card.innerHTML = `
    <div class="case-study-content">
      <div class="case-study-brand">${brand}</div>
      <div class="case-study-text">
        <h2 class="h3-display">${p.title}</h2>
        ${button}
      </div>
    </div>`;

  container.appendChild(card);
});

// Aparición suave al hacer scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".case-study").forEach((el) => observer.observe(el));

// Menú móvil
const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");
menuButton.addEventListener("click", () => {
  const open = navMenu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", open);
});
navMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navMenu.classList.remove("is-open"))
);

document.getElementById("year").textContent = new Date().getFullYear();
