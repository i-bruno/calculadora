const body = document.body;
body.id = "cuerpo";
body.innerHTML = '<header id="encabezado"><nav id="navBar"></nav></header> <div id="divSeccionPrincipal"><section id="seccionPrincipal"></section></div><footer id=footer></footer>';

//Encabezado
const encabezado = document.getElementById("encabezado");
encabezado.className = "classEncabezado";

///Menú de navegación
const navegacion = document.getElementById("navBar");
navegacion.className = "classNavegacion";

//Contenedor de sección principal y info secundaria
const divSeccionPrincipal = document.getElementById("divSeccionPrincipal");
divSeccionPrincipal.className = "divSeccionPrincipal";
//container
///Sección principal
const infoPrincipal = document.getElementById("seccionPrincipal");
infoPrincipal.className = "seccionPrincipal";

//Último pie de página copyright
const footer = document.getElementById("footer");
footer.className = "classFooter";

//Primer Nodo: Título
const titulo = document.createElement("h1");
const subtitulo = document.createElement("h3");
titulo.innerText = "Bienvenidxs al Sistema de Información Política del Club Atlético San Lorenzo de Almagro";
titulo.id = "tituloPrincipal";
subtitulo.innerText = "Versión Beta";
subtitulo.id = "subTitulo";
encabezado.appendChild(titulo);
encabezado.appendChild(subtitulo);

//Segundo Nodo: Menú de navegación
const listaOrdenada = document.createElement("ul");
navegacion.appendChild(listaOrdenada);
listaOrdenada.className = "navBar";

const toggle = document.createElement("div");
toggle.className = "menu-toggle";
toggle.id = "mobile-menu";
navegacion.appendChild(toggle);

const span1 = document.createElement("span");
span1.id = "span1";
toggle.appendChild(span1);

const span2 = document.createElement("span");
span2.id = "span2";
toggle.appendChild(span2);

const span3 = document.createElement("span");
span3.id = "span3";
toggle.appendChild(span3);

const elementoListaOrdenada1 = document.createElement("li");
listaOrdenada.appendChild(elementoListaOrdenada1);

const elementoListaOrdenada2 = document.createElement("li");
listaOrdenada.appendChild(elementoListaOrdenada2);

const elementoListaOrdenada3 = document.createElement("li");
listaOrdenada.appendChild(elementoListaOrdenada3);

const elementoListaOrdenada4 = document.createElement("li");
listaOrdenada.appendChild(elementoListaOrdenada4);

const elementoListaOrdenada5 = document.createElement("li");
listaOrdenada.appendChild(elementoListaOrdenada5);

const elementoListaOrdenada6 = document.createElement("li");
listaOrdenada.appendChild(elementoListaOrdenada6);

const linkElementoUno = document.createElement("a");
linkElementoUno.innerText = "Inicio";
elementoListaOrdenada1.appendChild(linkElementoUno);
linkElementoUno.setAttribute('href', 'index.html');

const linkElementoDos = document.createElement("a");
linkElementoDos.innerText = "Quienes somos";
elementoListaOrdenada2.appendChild(linkElementoDos);
linkElementoDos.setAttribute('href', '#');

const linkElementoTres = document.createElement("a");
linkElementoTres.innerText = "Otros proyectos";
elementoListaOrdenada3.appendChild(linkElementoTres);
linkElementoTres.setAttribute('href', '#');

const linkElementoCuatro = document.createElement("a");
linkElementoCuatro.innerText = "Calculadora";
elementoListaOrdenada4.appendChild(linkElementoCuatro);
linkElementoCuatro.setAttribute('href', 'calculadora.html');

const linkElementoCinco = document.createElement("a");
linkElementoCinco.innerText = "Cargos";
elementoListaOrdenada5.appendChild(linkElementoCinco);
linkElementoCinco.setAttribute('href', 'cargos.html');

const linkElementoSeis = document.createElement("a");
linkElementoSeis.innerText = "Contacto";
elementoListaOrdenada6.appendChild(linkElementoSeis);
linkElementoSeis.setAttribute('href', '#');

const btnColor = document.createElement("button");
btnColor.id = "btnColorIndex";
btnColor.innerText = "Rojo";
btnColor.className = "boton";
navegacion.appendChild(btnColor);

//Tercer Nodo: Menu de sistema
const tituloMenu = document.createElement("h1");
const subtituloMenu = document.createElement("h3");

tituloMenu.innerText = "Menú de sistemas";
subtituloMenu.innerText ="Seleccione un sistema con el cual desee trabajar";
tituloMenu.id = "tituloMenu"
subtituloMenu.id = "subtituloMenu"

seccionPrincipal.appendChild(tituloMenu);
seccionPrincipal.appendChild(subtituloMenu);

//Botonera menú principal
const botonera = document.createElement("div");
botonera.className = "botoneraMenu"
seccionPrincipal.appendChild(botonera);

//Botones
const boton1 = document.createElement("a");
const boton2 = document.createElement("a");
const boton3 = document.createElement("a");
const boton4 = document.createElement("a");

boton1.id = "boton1Menu";
boton2.id = "boton2Menu";
boton3.id = "boton3Menu";
boton4.id = "boton4Menu";

boton1.className = "boton";
boton2.className = "boton";
boton3.className = "boton";
boton4.className = "boton";

boton1.innerText = "Calculadora";
boton2.innerText = "Cargos";
boton3.innerText = "Repositorio";
boton4.innerText = "Indice";

boton1.setAttribute('href', 'calculadora.html');
boton2.setAttribute('href', 'cargos.html');
boton3.setAttribute('href', 'http://repositorio.archivocasla.com.ar/');
boton4.setAttribute('href', 'http://indice.archivocasla.com.ar/vocab/index.php');

boton3.setAttribute('target', '_blank');
boton4.setAttribute('target', '_blank');

botonera.appendChild(boton1);
botonera.appendChild(boton2);
botonera.appendChild(boton3);
botonera.appendChild(boton4);

//Cuarto Nodo: footercopyright

const derechos = document.createElement("p");
derechos.innerText = "©Biblioteca Popular Sanlorencista Leónidas Barletta - Todos los derechos reservados.";
footer.appendChild(derechos);

// class Agrupaciones {
//     constructor(nombre, candidato, votos, porcentaje, color, AR, CD, CF) {
//         this.nombre = nombre;
//         this.candidato = candidato;
//         this.votos = votos;
//         this.porcentaje = porcentaje;
//         this.color = color;
//         this.AR = AR;
//         this.CD = CD;
//         this.CF = CF;
//     }
// }

// const lista1 = new Agrupaciones("sin definir", "sin definir", 0, 0, "green", 0, 0, 0);
// const lista2 = new Agrupaciones("sin definir", "sin definir", 0, 0, "orange", 0, 0, 0);
// const lista3 = new Agrupaciones("sin definir", "sin definir", 0, 0, "deeppink", 0, 0, 0);
// const lista4 = new Agrupaciones("sin definir", "sin definir", 0, 0, "blue", 0, 0, 0);
// const lista5 = new Agrupaciones("sin definir", "sin definir", 0, 0, "red", 0, 0, 0);
// const lista6 = new Agrupaciones("sin definir", "sin definir", 0, 0, "grey", 0, 0, 0);
// const lista7 = new Agrupaciones("sin definir", "sin definir", 0, 0, "black", 0, 0, 0);
// const lista8 = new Agrupaciones("sin definir", "sin definir", 0, 0, "purple", 0, 0, 0);
// const lista9 = new Agrupaciones("sin definir", "sin definir", 0, 0, "cadetblue", 0, 0, 0);
// const lista10 = new Agrupaciones("sin definir", "sin definir", 0, 0, "darkgoldenrod", 0, 0, 0);

// arrayListas = [lista1, lista2, lista3, lista4, lista5, lista6, lista7, lista8, lista9, lista10];