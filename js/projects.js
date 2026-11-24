/*
 * Lista de proyectos que aparecen en la página.
 * Para agregar o editar un proyecto, modifica este arreglo.
 *
 *  client : nombre de la empresa/cliente (se muestra arriba del título)
 *  logo   : (opcional) ruta a un logo, ej. "img/logos/empresa.svg". Si existe, reemplaza al texto "client".
 *  logoWidth : (opcional) ancho del logo en px en escritorio (mismo tamaño que en la portada del caso).
 *  title  : frase corta que describe el proyecto
 *  image  : (opcional) imagen de fondo, ej. "img/proyectos/proyecto-1.jpg"
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
    image: "img/proyectos/finnta/portada-1920.jpg",
    color: "#00203f",
    link: "finnta",
  },
  {
    client: "Proyecto 03",
    title: "Otro proyecto que quieras mostrar",
    color: "#1f3b2d",
    link: "",
  },
  {
    client: "Proyecto 04",
    title: "Redefiniendo un proceso clave",
    color: "#3a2f58",
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
