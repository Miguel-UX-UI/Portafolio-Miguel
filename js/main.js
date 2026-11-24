// Renderiza las tarjetas de proyectos
const container = document.getElementById("projects");

if (container && typeof PROJECTS !== "undefined") PROJECTS.forEach((p) => {
  const card = document.createElement("article");
  card.className = "case-study";

  const bg = p.image
    ? `linear-gradient(35deg, rgba(0,0,0,.66), rgba(0,0,0,0) 70%), url("${p.image}") var(--bg-pos, center) / cover no-repeat`
    : `linear-gradient(35deg, rgba(0,0,0,.55), rgba(0,0,0,0) 70%), ${p.color || "#444"}`;
  card.style.background = bg;
  if (p.imagePositionMobile) card.style.setProperty("--bg-pos-m", p.imagePositionMobile);

  const brand = p.logo
    ? `<img class="case-study-logo" src="${p.logo}" alt="${p.client}" loading="lazy"${p.logoWidth ? ` style="--logo-w: ${p.logoWidth}px"` : ""} />`
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
document.querySelectorAll(".case-study, .reveal").forEach((el) => observer.observe(el));

// Videos (en lugar de GIF): se cargan y reproducen solo cuando están en pantalla
const lazyVideos = document.querySelectorAll("video[data-autoplay]");
if (lazyVideos.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.play().catch(() => {});
        else e.target.pause();
      });
    },
    { threshold: 0.25 }
  );
  lazyVideos.forEach((v) => videoObserver.observe(v));
}

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

// Inicio: la foto se inclina siguiendo el cursor
const heroPhoto = document.querySelector(".hero-photo");
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (heroPhoto && canHover && !reduceMotion) {
  const img = heroPhoto.querySelector("img");
  const hero = document.querySelector(".hero");
  hero.addEventListener("pointermove", (e) => {
    const r = heroPhoto.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    const over = Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5;
    const k = over ? 1 : 0.35; // más intenso cuando el cursor está sobre la foto
    const rx = Math.max(-1, Math.min(1, -dy)) * 14 * k;
    const ry = Math.max(-1, Math.min(1, dx)) * 18 * k;
    heroPhoto.classList.add("is-tilting");
    img.style.transform = `rotate(${over ? 0 : -6}deg) rotateX(${rx}deg) rotateY(${ry}deg) scale(${over ? 1.08 : 1})`;
  });
  hero.addEventListener("pointerleave", () => {
    heroPhoto.classList.remove("is-tilting");
    img.style.transform = "";
  });
}
