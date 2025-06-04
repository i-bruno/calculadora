const body = document.body;
body.id = "cuerpo";
body.innerHTML = '<header id="encabezado"><nav id="navBar"></nav></header> <section id="divForm"></section> <footer id=footer></footer>';

//Encabezado
const encabezado = document.getElementById("encabezado");
encabezado.className = "classEncabezado";

///Menú de navegación
const navegacion = document.getElementById("navBar");
navegacion.className = "classNavegacion";

//Div formulario alta
const divForm = document.getElementById("divForm");
divForm.className = "divForm";

///Sección principal
const infoPrincipal = document.getElementById("seccionPrincipal");
infoPrincipal.className = "displayNone";

//Último pie de página copyright
const footer = document.getElementById("footer");
footer.className = "classFooter";

//Primer Nodo: Título
const titulo = document.createElement("h1");
const subtitulo = document.createElement("h3");
titulo.innerText = "Sistema de Ingreso de Cargos";
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
btnColor.id = "btnColor";
btnColor.innerText = "Rojo";
btnColor.className = "boton";
navegacion.appendChild(btnColor);

//Tercer Nodo: Formulario de alta
const etiquetaIncidencia = document.createElement("label");
etiquetaIncidencia.innerText = "Tipo de incidencia";
divForm.appendChild(etiquetaIncidencia);

///Input para que el usuario ingrese la cantidad de listas
const selectIncidencia = document.createElement("select");
selectIncidencia.id = "selectIncidencia";
divForm.appendChild(selectIncidencia);

const opcionIncidencia1 = document.createElement("option");
opcionIncidencia1.innerText = "Alta";
const opcionIncidencia2 = document.createElement("option");
opcionIncidencia2.innerText = "Baja";
const opcionIncidencia3 = document.createElement("option");
opcionIncidencia3.innerText = "Licencia";
selectIncidencia.appendChild(opcionIncidencia1);
selectIncidencia.appendChild(opcionIncidencia2);
selectIncidencia.appendChild(opcionIncidencia3);

///Botón para que el usuario envíe la información.
const contenedor = document.createElement("div");
divForm.appendChild(contenedor);

const btn = document.createElement("button");
btn.id = "btn";
btn.setAttribute('type', 'submit');
btn.className = "boton";
btn.innerText = "Enviar";
btn.addEventListener("click", funListas);
contenedor.appendChild(btn);

const btnReset = document.createElement("button");
btnReset.id = "btnReset";
btnReset.setAttribute('type', 'submit');
btnReset.className = "boton";
btnReset.innerText = "Resetear";
btnReset.addEventListener('click', _ => { location.reload(); });
contenedor.appendChild(btnReset);






//Octavo Nodo: footercopyright

const derechos = document.createElement("p");
derechos.innerText = "©Biblioteca Popular Sanlorencista Leónidas Barletta - Todos los derechos reservados.";
footer.appendChild(derechos);