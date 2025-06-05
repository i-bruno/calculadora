const body = document.body;
body.id = "cuerpo";
body.innerHTML = '<header id="encabezado"><nav id="navBar"></nav></header> <section id="sectionForm"></section> <footer id=footer></footer>';

//Encabezado
const encabezado = document.getElementById("encabezado");
encabezado.className = "classEncabezado";

///Menú de navegación
const navegacion = document.getElementById("navBar");
navegacion.className = "classNavegacion";

//Div formulario alta
const sectionForm = document.getElementById("sectionForm");
sectionForm.className = "sectionForm";

//Último pie de página copyright
const footer = document.getElementById("footer");
footer.className = "classFooter";

//Primer Nodo: Título
const titulo = document.createElement("h1");
const subtitulo = document.createElement("h3");
titulo.innerText = "Sistema de Alta, Baja y Modificación de Cargos";
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
const formABM = document.createElement("form");
formABM.className = "formABM";
sectionForm.appendChild(formABM);

///Selector de tipo de incidencia
const etiquetaIncidencia = document.createElement("label");
etiquetaIncidencia.innerText = "Tipo de incidencia";
formABM.appendChild(etiquetaIncidencia);
const selectIncidencia = document.createElement("select");
selectIncidencia.id = "selectIncidencia";
const opcionIncidencia0 = document.createElement("option");
opcionIncidencia0.innerText = "";
const opcionIncidencia1 = document.createElement("option");
opcionIncidencia1.innerText = "Alta";
const opcionIncidencia2 = document.createElement("option");
opcionIncidencia2.innerText = "Baja";
const opcionIncidencia3 = document.createElement("option");
opcionIncidencia3.innerText = "Licencia";
selectIncidencia.appendChild(opcionIncidencia0);
selectIncidencia.appendChild(opcionIncidencia1);
selectIncidencia.appendChild(opcionIncidencia2);
selectIncidencia.appendChild(opcionIncidencia3);

formABM.appendChild(selectIncidencia);

//Selector de órgano de gobierno
const etiquetaOrgano = document.createElement("label");
etiquetaOrgano.innerText = "Órgano de gobierno";
formABM.appendChild(etiquetaOrgano);

const selectOrgano = document.createElement("select");
selectOrgano.id = "selectOrgano";
const opcionOrgano0 = document.createElement("option");
opcionOrgano0.innerText = "";
const opcionOrgano1 = document.createElement("option");
opcionOrgano1.innerText = "Comisión Directiva";
const opcionOrgano2 = document.createElement("option");
opcionOrgano2.innerText = "Comisión Fiscalizadora";
const opcionOrgano3 = document.createElement("option");
opcionOrgano3.innerText = "Asamblea de Representantes";
selectOrgano.appendChild(opcionOrgano0);
selectOrgano.appendChild(opcionOrgano1);
selectOrgano.appendChild(opcionOrgano2);
selectOrgano.appendChild(opcionOrgano3);

formABM.appendChild(selectOrgano);

///Botón para que el usuario envíe la información.
const contenedor = document.createElement("div");
sectionForm.appendChild(contenedor);

//Divisor
const divisor = document.createElement("hr");
formABM.appendChild(divisor);

//Formulario carga Comisión Directiva

//Cargo
///Etiqueta
const etiquetaCargoCD = document.createElement("label");
etiquetaCargoCD.innerText = "Cargo de Comisión Directiva";
formABM.appendChild(etiquetaCargoCD);
///Select
const selectCargoCD = document.createElement("select");
selectCargoCD.id = "selectCargoCD";
///Opciones
const opcionCargoCD0 = document.createElement("option");
opcionCargoCD0.innerText = "";
const opcionCargoCD1 = document.createElement("option");
opcionCargoCD1.innerText = "Presidente";
const opcionCargoCD2 = document.createElement("option");
opcionCargoCD2.innerText = "Vicepresidente Primero";
const opcionCargoCD3 = document.createElement("option");
opcionCargoCD3.innerText = "Vicepresidente Segundo";
const opcionCargoCD4 = document.createElement("option");
opcionCargoCD4.innerText = "Secretario General";
const opcionCargoCD5 = document.createElement("option");
opcionCargoCD5.innerText = "Prosecretario";
const opcionCargoCD6 = document.createElement("option");
opcionCargoCD6.innerText = "Secretario de actas";
const opcionCargoCD7 = document.createElement("option");
opcionCargoCD7.innerText = "Tesorero";
const opcionCargoCD8 = document.createElement("option");
opcionCargoCD8.innerText = "Protesorero";
const opcionCargoCD9 = document.createElement("option");
opcionCargoCD9.innerText = "Intendente";
const opcionCargoCD10 = document.createElement("option");
opcionCargoCD10.innerText = "Subintendente";
const opcionCargoCD11 = document.createElement("option");
opcionCargoCD11.innerText = "Vocal 1";
const opcionCargoCD12 = document.createElement("option");
opcionCargoCD12.innerText = "Vocal 2";
const opcionCargoCD13 = document.createElement("option");
opcionCargoCD13.innerText = "Vocal 3";
const opcionCargoCD14 = document.createElement("option");
opcionCargoCD14.innerText = "Vocal 4";
const opcionCargoCD15 = document.createElement("option");
opcionCargoCD15.innerText = "Vocal 5";
const opcionCargoCD16 = document.createElement("option");
opcionCargoCD16.innerText = "Vocal 6";
const opcionCargoCD17 = document.createElement("option");
opcionCargoCD17.innerText = "Vocal 7";
const opcionCargoCD18 = document.createElement("option");
opcionCargoCD18.innerText = "Vocal 8";
const opcionCargoCD19 = document.createElement("option");
opcionCargoCD19.innerText = "Vocal 9";
const opcionCargoCD20 = document.createElement("option");
opcionCargoCD20.innerText = "Vocal 10";
selectCargoCD.appendChild(opcionCargoCD0);
selectCargoCD.appendChild(opcionCargoCD1);
selectCargoCD.appendChild(opcionCargoCD2);
selectCargoCD.appendChild(opcionCargoCD3);
selectCargoCD.appendChild(opcionCargoCD4);
selectCargoCD.appendChild(opcionCargoCD5);
selectCargoCD.appendChild(opcionCargoCD6);
selectCargoCD.appendChild(opcionCargoCD7);
selectCargoCD.appendChild(opcionCargoCD8);
selectCargoCD.appendChild(opcionCargoCD9);
selectCargoCD.appendChild(opcionCargoCD10);
selectCargoCD.appendChild(opcionCargoCD11);
selectCargoCD.appendChild(opcionCargoCD12);
selectCargoCD.appendChild(opcionCargoCD13);
selectCargoCD.appendChild(opcionCargoCD14);
selectCargoCD.appendChild(opcionCargoCD15);
selectCargoCD.appendChild(opcionCargoCD16);
selectCargoCD.appendChild(opcionCargoCD17);
selectCargoCD.appendChild(opcionCargoCD18);
selectCargoCD.appendChild(opcionCargoCD19);
selectCargoCD.appendChild(opcionCargoCD20);

formABM.appendChild(selectCargoCD);

//Nombre y apellido
const etiquetaNombreCD = document.createElement("label");
etiquetaNombreCD.innerText = "Nombre (Completo)";
formABM.appendChild(etiquetaNombreCD);

const inputNombreCD = document.createElement("input");
inputNombreCD.setAttribute('type', 'text');
formABM.appendChild(inputNombreCD);

const etiquetaApellidoCD = document.createElement("label");
etiquetaApellidoCD.innerText = "Apellido (Completo)";
formABM.appendChild(etiquetaApellidoCD);

const inputApellidoCD = document.createElement("input");
inputApellidoCD.setAttribute('type', 'text');
formABM.appendChild(inputApellidoCD);
//Situación
const fieldSetSitCD = document.createElement("fieldset");
formABM.appendChild(fieldSetSitCD);

const leyendaField = document.createElement("legend");
leyendaField.innerText = "Situación de revista";
fieldSetSitCD.appendChild(leyendaField);

const divField = document.createElement("div");
fieldSetSitCD.appendChild(divField);


const radioActivoCD = document.createElement("input");
radioActivoCD.setAttribute('type', 'radio');
radioActivoCD.setAttribute('name', 'situacion');
const etiquetaActivoCD = document.createElement("label");
etiquetaActivoCD.innerText = "Activo";
const radioPasivoCD = document.createElement("input");
radioPasivoCD.setAttribute('type', 'radio');
radioPasivoCD.setAttribute('name', 'situacion');
const etiquetaPasivoCD = document.createElement("label");
etiquetaPasivoCD.innerText = "Pasivo";

divField.appendChild(radioActivoCD);
divField.appendChild(etiquetaActivoCD);
divField.appendChild(radioPasivoCD);
divField.appendChild(etiquetaPasivoCD);

const etiquetaComentariosSit = document.createElement("label");
etiquetaComentariosSit.innerText = "Comentarios"
const comentariosSit = document.createElement("input");
comentariosSit.setAttribute('type', 'text');

fieldSetSitCD.appendChild(etiquetaComentariosSit);
fieldSetSitCD.appendChild(comentariosSit);

//Agrupación
const etiquetaAgrupacionCD = document.createElement("label");
etiquetaAgrupacionCD.innerText = "Nombre completo de agrupación";
formABM.appendChild(etiquetaAgrupacionCD);

const inputAgrupacionCD = document.createElement("input");
inputAgrupacionCD.setAttribute('type', 'text');
formABM.appendChild(inputAgrupacionCD);
//Alta/baja

const etiquetaFechaAltaCD = document.createElement("label");
etiquetaFechaAltaCD.innerText = "Fecha de alta en el cargo";
formABM.appendChild(etiquetaFechaAltaCD);

const inputFechaAltaCD = document.createElement("input");
inputFechaAltaCD.setAttribute('type', 'date');
formABM.appendChild(inputFechaAltaCD);

const etiquetaComentarioAltaCD = document.createElement("label");
etiquetaComentarioAltaCD.innerText = "Comentarios";
formABM.appendChild(etiquetaComentarioAltaCD);

const inputComentarioAltaCD = document.createElement("input");
inputComentarioAltaCD.setAttribute('type', 'text');
formABM.appendChild(inputComentarioAltaCD);

const etiquetaFechaBajaCD = document.createElement("label");
etiquetaFechaBajaCD.innerText = "Fecha de baja en el cargo";
formABM.appendChild(etiquetaFechaBajaCD);

const inputFechaBajaCD = document.createElement("input");
inputFechaBajaCD.setAttribute('type', 'date');
formABM.appendChild(inputFechaBajaCD);

const etiquetaComentarioBajaCD = document.createElement("label");
etiquetaComentarioBajaCD.innerText = "Comentarios";
formABM.appendChild(etiquetaComentarioBajaCD);

const inputComentarioBajaCD = document.createElement("input");
inputComentarioBajaCD.setAttribute('type', 'text');
formABM.appendChild(inputComentarioBajaCD);
//
//Cambio de color de la web
const btn = document.createElement("button");
btn.id = "btn";
btn.setAttribute('type', 'submit');
btn.className = "boton";
btn.innerText = "Enviar";
btn.addEventListener("click", funListas);
formABM.appendChild(btn);

const btnReset = document.createElement("button");
btnReset.id = "btnReset";
btnReset.setAttribute('type', 'submit');
btnReset.className = "boton";
btnReset.innerText = "Resetear";
btnReset.addEventListener('click', _ => { location.reload(); });
formABM.appendChild(btnReset);

//Octavo Nodo: footercopyright

const derechos = document.createElement("p");
derechos.innerText = "©Biblioteca Popular Sanlorencista Leónidas Barletta - Todos los derechos reservados.";
footer.appendChild(derechos);