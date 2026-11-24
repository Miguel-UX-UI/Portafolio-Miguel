/*
 * Lista de proyectos que aparecen en la página.
 * Para agregar o editar un proyecto, modifica este arreglo.
 *
 *  client : nombre de la empresa/cliente (se muestra arriba del título)
 *  logo   : (opcional) ruta a un logo, ej. "img/logos/empresa.svg". Si existe, reemplaza al texto "client".
 *  logoWidth : (opcional) ancho del logo en px en escritorio (mismo tamaño que en la portada del caso).
 *  title  : frase corta que describe el proyecto
 *  image  : (opcional) imagen de fondo, ej. "img/proyectos/proyecto-1.jpg"
 *  video  : (opcional) video de fondo en bucle, ej. { mp4: "...mp4", webm: "...webm", poster: "...jpg" }
 *  imagePositionMobile : (opcional) parte de la imagen que se ve en celular, ej. "30% center"
 *  color  : color de fondo mientras no haya imagen
 *  link   : URL del caso de estudio. Si está vacío, el botón muestra "Próximamente".
 */
const PROJECTS = [
  {
    client: "Suintec",
    logo: "img/logos/suintec-blanco.svg",
    logoWidth: 300,
    title: "Una marca sobria y precisa para el tratamiento de agua",
    image: "img/proyectos/suintec/portada-1800.jpg",
    color: "#2f4ff3",
    link: "suintec",
  },
  {
    client: "Finnta",
    logo: "img/logos/finnta-blanco.svg",
    logoWidth: 248,
    title: "Una marca que guía a invertir con confianza",
    image: "img/proyectos/finnta/tarjeta-1920.jpg",
    imagePositionMobile: "24% center",
    color: "#00203f",
    link: "finnta",
  },
  {
    client: "Discord",
    logo: "img/logos/discord-blanco.svg",
    logoWidth: 240,
    title: "Bienvenida animada para la comunidad Discord Colombia",
    video: {
      webm: "img/proyectos/discord/portada.webm",
      mp4: "img/proyectos/discord/portada.mp4",
      poster: "img/proyectos/discord/portada-poster.jpg",
    },
    color: "#5865f2",
    link: "",
  },
  {
    client: "Bits",
    logo: "img/logos/bits-blanco.svg",
    logoWidth: 170,
    title: "Redefiniendo un proceso clave",
    image: "img/proyectos/bits/portada-1800.jpg",
    color: "#1b1d2a",
    link: "",
  },
  {
    client: "Proyecto 05",
    title: "Donde la estrategia se encuentra con los datos",
    color: "#58302f",
    link: "",
  },
  {
    client: "Proyecto 06",
    title: "Lanzamiento de una nueva iniciativa",
    color: "#2d3e50",
    link: "",
  },
];
