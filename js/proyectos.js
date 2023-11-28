const body = document.body;
body.id = "cuerpo";
body.innerHTML = '<header id="encabezado"><nav id="navBar"></nav></header> <section id="preSeccion"></section> <div id="divSeccionPrincipal"><section id="seccionPrincipal"></section><aside id="menuLateral"></aside></div> <section id="posSeccion"></section>  <section id="piePagina"></section> <footer id=footer></footer>';

//Encabezado
const encabezado = document.getElementById("encabezado");
encabezado.className = "classEncabezado";
///Menú de navegación
const navegacion = document.getElementById("navBar");
navegacion.className = "classNavegacion";
//Pre sección principal
const preSeccion = document.getElementById("preSeccion");
preSeccion.className = "classPreSeccion";
//Contenedor de sección principal y info secundaria
const divSeccionPrincipal = document.getElementById("divSeccionPrincipal");
divSeccionPrincipal.className = "container";
///Sección principal
const infoPrincipal = document.getElementById("seccionPrincipal");
infoPrincipal.className = "gridListas";
///Información secundaria sobre el estatuto
const infoSecundaria = document.getElementById("menuLateral");
infoSecundaria.className = "gridEstatuto";
//Pos sección principal
const posSeccion = document.getElementById("posSeccion");
posSeccion.className = "classPosSeccion";
//Pie de página con los resultados
const pie = document.getElementById("piePagina"); 
pie.className = "classPie";
//Último pie de página copyright
const footer = document.getElementById("footer");
footer.className = "classFooter";

//Primer Nodo: Título
const titulo = document.createElement("h1");
const subtitulo = document.createElement("h3");
titulo.innerText = "Calculadora de cargos del Club Atlético San Lorenzo de Almagro";
titulo.id = "tituloPrincipal";
subtitulo.innerText = "Versión Beta";
subtitulo.id = "subTitulo";
encabezado.appendChild(titulo);
encabezado.appendChild(subtitulo);

//Segundo Nodo: Menú de navegación
const listaOrdenada = document.createElement("ul");
navegacion.appendChild(listaOrdenada);
listaOrdenada.className = "navBar";

const elementoListaOrdenada1 = document.createElement("li");
listaOrdenada.appendChild(elementoListaOrdenada1);

const elementoListaOrdenada2 = document.createElement("li");
listaOrdenada.appendChild(elementoListaOrdenada2);

const elementoListaOrdenada3 = document.createElement("li");
listaOrdenada.appendChild(elementoListaOrdenada3);

const elementoListaOrdenada4 = document.createElement("li");
listaOrdenada.appendChild(elementoListaOrdenada4);

const linkElementoUno = document.createElement("a");
linkElementoUno.innerText="Inicio";
elementoListaOrdenada1.appendChild(linkElementoUno);
linkElementoUno.setAttribute('href', '#');

const linkElementoDos = document.createElement("a");
linkElementoDos.innerText="Quienes somos";
elementoListaOrdenada2.appendChild(linkElementoDos);
linkElementoDos.setAttribute('href', '#');

const linkElementoTres = document.createElement("a");
linkElementoTres.innerText="Otros proyectos";
elementoListaOrdenada3.appendChild(linkElementoTres);
linkElementoTres.setAttribute('href', '#');

const linkElementoCuatro = document.createElement("a");
linkElementoCuatro.innerText="Contacto";
elementoListaOrdenada4.appendChild(linkElementoCuatro);
linkElementoCuatro.setAttribute('href', '#');

const btnColor = document.createElement("button");
btnColor.id = "btnColor";
btnColor.innerText = "Rojo";
btnColor.className = "boton";
navegacion.appendChild(btnColor);