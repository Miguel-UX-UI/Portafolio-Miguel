/*
 * Lista de proyectos que aparecen en la página.
 * Para agregar o editar un proyecto, modifica este arreglo.
 *
 *  client : nombre de la empresa/cliente (se muestra arriba del título)
 *  logo   : (opcional) ruta a un logo, ej. "img/logos/empresa.svg". Si existe, reemplaza al texto "client".
 *  title  : frase corta que describe el proyecto
 *  image  : (opcional) imagen de fondo, ej. "img/proyectos/proyecto-1.jpg"
 *  color  : color de fondo mientras no haya imagen
 *  link   : URL del caso de estudio. Si está vacío, el botón muestra "Próximamente".
 */
const PROJECTS = [
  {
    client: "Suintec · Identidad visual",
    title: "Una marca sobria y precisa para el tratamiento de agua",
    image: "img/proyectos/suintec/portada-1800.jpg",
    color: "#2f4ff3",
    link: "suintec",
  },
  {
    client: "Proyecto 02",
    title: "Una frase que resuma el impacto",
    color: "#5b3a29",
    link: "",
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
