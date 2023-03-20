const body = document.body;
body.id = "cuerpo";
body.innerHTML = '<header id="encabezado"><nav id="navBar"></nav></header> <section id="preSeccion"></section> <div id="divSeccionPrincipal"><section id="seccionPrincipal"></section><aside id="menuLateral"></aside></div> <section id="posSeccion"></section>  <section id="piePagina"></section>';

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

//Primer Nodo: Título
const titulo = document.createElement("h1");
titulo.innerText = "Calculadora de cargos del Club Atlético San Lorenzo de Almagro";
titulo.id = "tituloPrincipal";
encabezado.appendChild(titulo);

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

//Tercer Nodo: ¿Cuántas agrupaciones son?
const etiquetaPreSeccion = document.createElement("label");
etiquetaPreSeccion.innerText="¿Cuántas listas o agrupaciones participan de la elección?";
preSeccion.appendChild(etiquetaPreSeccion);

///Input para que el usuario ingrese la cantidad de listas
const inputPreSeccion = document.createElement("input");
inputPreSeccion.id = "numListas";
inputPreSeccion.setAttribute('type', 'number');
preSeccion.appendChild(inputPreSeccion);

///Botón para que el usuario envíe la información.
const btn = document.createElement("button");
btn.id = "btn";
btn.setAttribute('type', 'submit');
btn.className = "boton";
btn.innerText = "Enviar";
btn.addEventListener("click", funListas);
preSeccion.appendChild(btn);

const btnReset = document.createElement("button");
btnReset.id = "btnReset";
btnReset.setAttribute('type', 'submit');
btnReset.className = "boton";
btnReset.innerText = "Resetear";
btnReset.addEventListener("click", reset);
preSeccion.appendChild(btnReset);

//Cuarto Nodo: Información/sección Principal
function funListas (){
let cantidadListas = document.getElementById("numListas").value;
let divMensaje

let divListaA
let primerInputA
let segundoInputA
let tercerInputA

let divListaB
let primerInputB
let segundoInputB
let tercerInputB

let divListaC
let primerInputC
let segundoInputC
let tercerInputC

let divListaD
let primerInputD
let segundoInputD
let tercerInputD

let divListaE
let primerInputE
let segundoInputE
let tercerInputE

let divListaF
let primerInputF
let segundoInputF
let tercerInputF

let divListaG
let primerInputG
let segundoInputG
let tercerInputG

let divListaH
let primerInputH
let segundoInputH
let tercerInputH

let divListaI
let primerInputI
let segundoInputI
let tercerInputI

let divListaJ
let primerInputJ
let segundoInputJ
let tercerInputJ

switch(parseInt(cantidadListas)){
    case 1:
        divMensaje = document.createElement("div");
        divMensaje.className = "divMensaje";
        divMensaje.id = "divMensaje";
        divMensaje.innerHTML = "<h3>No se realizan las elecciones</h3>";
        infoPrincipal.appendChild(divMensaje);
    break;

    case 2:
        //Primer lista
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);

            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);

        //Segunda lista
        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
    
            primerInputB = document.createElement("input");
            primerInputB.id = "inputListaB"
            primerInputB.setAttribute('placeholder', 'Agrupación...')
            divListaB.appendChild(primerInputB);
    
            segundoInputB = document.createElement("input");
            segundoInputB.id = "segundoInputListaB";
            segundoInputB.setAttribute('placeholder', 'Candidato...')
            divListaB.appendChild(segundoInputB);
    
            tercerInputB = document.createElement("input");
            tercerInputB.id = "tercerInputListaB"
            tercerInputB.setAttribute('placeholder', 'Votos')
            divListaB.appendChild(tercerInputB);
    break;

    case 3:
        //Primer lista
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);
    
            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);
        
        //Segunda lista
        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
    
        primerInputB = document.createElement("input");
        primerInputB.id = "inputListaB"
        primerInputB.setAttribute('placeholder', 'Agrupación...')
        divListaB.appendChild(primerInputB);

        segundoInputB = document.createElement("input");
        segundoInputB.id = "segundoInputListaB";
        segundoInputB.setAttribute('placeholder', 'Candidato...')
        divListaB.appendChild(segundoInputB);

        tercerInputB = document.createElement("input");
        tercerInputB.id = "tercerInputListaB"
        tercerInputB.setAttribute('placeholder', 'Votos')
        divListaB.appendChild(tercerInputB);

        //Tercer lista
        divListaC = document.createElement("div");
        divListaC.className = "agrupacion";
        divListaC.id = "listaC";
        infoPrincipal.appendChild(divListaC);
            
            primerInputC = document.createElement("input");
            primerInputC.id = "inputListaC";
            primerInputC.setAttribute('placeholder', 'Agrupación...')
            divListaC.appendChild(primerInputC);
                        
            segundoInputC = document.createElement("input");
            segundoInputC.id = "segundoInputListaC"; 
            segundoInputC.setAttribute('placeholder', 'Candidato...')
            divListaC.appendChild(segundoInputC);
                        
            tercerInputC = document.createElement("input");
            tercerInputC.id = "tercerInputListaC";
            tercerInputC.setAttribute('placeholder', 'Votos')
            divListaC.appendChild(tercerInputC);
    break;

    case 4:
        //Primer lista
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);
    
            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);

        //Segunda lista
        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
        
            primerInputB = document.createElement("input");
            primerInputB.id = "inputListaB"
            primerInputB.setAttribute('placeholder', 'Agrupación...')
            divListaB.appendChild(primerInputB);
    
            segundoInputB = document.createElement("input");
            segundoInputB.id = "segundoInputListaB";
            segundoInputB.setAttribute('placeholder', 'Candidato...')
            divListaB.appendChild(segundoInputB);
    
            tercerInputB = document.createElement("input");
            tercerInputB.id = "tercerInputListaB"
            tercerInputB.setAttribute('placeholder', 'Votos')
            divListaB.appendChild(tercerInputB);

        //Tercer lista
        divListaC = document.createElement("div");
        divListaC.className = "agrupacion";
        divListaC.id = "listaC";
        infoPrincipal.appendChild(divListaC);
                    
        primerInputC = document.createElement("input");
        primerInputC.id = "inputListaC";
        primerInputC.setAttribute('placeholder', 'Agrupación...')
        divListaC.appendChild(primerInputC);
                    
        segundoInputC = document.createElement("input");
        segundoInputC.id = "segundoInputListaC"; 
        segundoInputC.setAttribute('placeholder', 'Candidato...')
        divListaC.appendChild(segundoInputC);
                    
        tercerInputC = document.createElement("input");
        tercerInputC.id = "tercerInputListaC";
        tercerInputC.setAttribute('placeholder', 'Votos')
        divListaC.appendChild(tercerInputC);

            //Cuarta lista        
        divListaD = document.createElement("div");
        divListaD.className = "agrupacion";
        divListaD.id = "listaD";
        infoPrincipal.appendChild(divListaD);
        
            primerInputD = document.createElement("input");
            primerInputD.id = "inputListaD"
            primerInputD.setAttribute('placeholder', 'Agrupación...')
            divListaD.appendChild(primerInputD);
            
            segundoInputD = document.createElement("input");
            segundoInputD.id = "segundoInputListaD"
            segundoInputD.setAttribute('placeholder', 'Candidato...')
            divListaD.appendChild(segundoInputD);
            
            tercerInputD = document.createElement("input");
            tercerInputD.id = "tercerInputListaD";
            tercerInputD.setAttribute('placeholder', 'Votos')
            divListaD.appendChild(tercerInputD);
    break;

    case 5:
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);
    
            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);

        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
        
        primerInputB = document.createElement("input");
        primerInputB.id = "inputListaB"
        primerInputB.setAttribute('placeholder', 'Agrupación...')
        divListaB.appendChild(primerInputB);

        segundoInputB = document.createElement("input");
        segundoInputB.id = "segundoInputListaB";
        segundoInputB.setAttribute('placeholder', 'Candidato...')
        divListaB.appendChild(segundoInputB);

        tercerInputB = document.createElement("input");
        tercerInputB.id = "tercerInputListaB"
        tercerInputB.setAttribute('placeholder', 'Votos')
        divListaB.appendChild(tercerInputB);

        //Tercer lista
        divListaC = document.createElement("div");
        divListaC.className = "agrupacion";
        divListaC.id = "listaC";
        infoPrincipal.appendChild(divListaC);
                            
        primerInputC = document.createElement("input");
        primerInputC.id = "inputListaC";
        primerInputC.setAttribute('placeholder', 'Agrupación...')
        divListaC.appendChild(primerInputC);
                    
        segundoInputC = document.createElement("input");
        segundoInputC.id = "segundoInputListaC"; 
        segundoInputC.setAttribute('placeholder', 'Candidato...')
        divListaC.appendChild(segundoInputC);
                    
        tercerInputC = document.createElement("input");
        tercerInputC.id = "tercerInputListaC";
        tercerInputC.setAttribute('placeholder', 'Votos')
        divListaC.appendChild(tercerInputC);

            //Cuarta lista        
        divListaD = document.createElement("div");
        divListaD.className = "agrupacion";
        divListaD.id = "listaD";
        infoPrincipal.appendChild(divListaD);
        
        primerInputD = document.createElement("input");
        primerInputD.id = "inputListaD"
        primerInputD.setAttribute('placeholder', 'Agrupación...')
        divListaD.appendChild(primerInputD);
        
        segundoInputD = document.createElement("input");
        segundoInputD.id = "segundoInputListaD"
        segundoInputD.setAttribute('placeholder', 'Candidato...')
        divListaD.appendChild(segundoInputD);
        
        tercerInputD = document.createElement("input");
        tercerInputD.id = "tercerInputListaD";
        tercerInputD.setAttribute('placeholder', 'Votos')
        divListaD.appendChild(tercerInputD);

            //Quinta lista
        divListaE = document.createElement("div");
        divListaE.className = "agrupacion";
        divListaE.id = "listaE";
        infoPrincipal.appendChild(divListaE);
        
            primerInputE = document.createElement("input");
            primerInputE.id = "inputListaE";
            primerInputE.setAttribute('placeholder', 'Agrupación...')
            divListaE.appendChild(primerInputE);
            
            segundoInputE = document.createElement("input");
            segundoInputE.id = "segundoInputListaE";
            segundoInputE.setAttribute('placeholder', 'Candidato...')
            divListaE.appendChild(segundoInputE);
            
            tercerInputE = document.createElement("input");
            tercerInputE.id = "tercerInputListaE";
            tercerInputE.setAttribute('placeholder', 'Votos')
            divListaE.appendChild(tercerInputE);
    break;

    case 6:
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);
    
            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);

        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
    
        primerInputB = document.createElement("input");
        primerInputB.id = "inputListaB"
        primerInputB.setAttribute('placeholder', 'Agrupación...')
        divListaB.appendChild(primerInputB);

        segundoInputB = document.createElement("input");
        segundoInputB.id = "segundoInputListaB";
        segundoInputB.setAttribute('placeholder', 'Candidato...')
        divListaB.appendChild(segundoInputB);

        tercerInputB = document.createElement("input");
        tercerInputB.id = "tercerInputListaB"
        tercerInputB.setAttribute('placeholder', 'Votos')
        divListaB.appendChild(tercerInputB);

                    //Tercer lista
        divListaC = document.createElement("div");
        divListaC.className = "agrupacion";
        divListaC.id = "listaC";
        infoPrincipal.appendChild(divListaC);
                            
        primerInputC = document.createElement("input");
        primerInputC.id = "inputListaC";
        primerInputC.setAttribute('placeholder', 'Agrupación...')
        divListaC.appendChild(primerInputC);
                    
        segundoInputC = document.createElement("input");
        segundoInputC.id = "segundoInputListaC"; 
        segundoInputC.setAttribute('placeholder', 'Candidato...')
        divListaC.appendChild(segundoInputC);
                    
        tercerInputC = document.createElement("input");
        tercerInputC.id = "tercerInputListaC";
        tercerInputC.setAttribute('placeholder', 'Votos')
        divListaC.appendChild(tercerInputC);

            //Cuarta lista        
        divListaD = document.createElement("div");
        divListaD.className = "agrupacion";
        divListaD.id = "listaD";
        infoPrincipal.appendChild(divListaD);
        
        primerInputD = document.createElement("input");
        primerInputD.id = "inputListaD"
        primerInputD.setAttribute('placeholder', 'Agrupación...')
        divListaD.appendChild(primerInputD);
        
        segundoInputD = document.createElement("input");
        segundoInputD.id = "segundoInputListaD"
        segundoInputD.setAttribute('placeholder', 'Candidato...')
        divListaD.appendChild(segundoInputD);
        
        tercerInputD = document.createElement("input");
        tercerInputD.id = "tercerInputListaD";
        tercerInputD.setAttribute('placeholder', 'Votos')
        divListaD.appendChild(tercerInputD);

            //Quinta lista
        divListaE = document.createElement("div");
        divListaE.className = "agrupacion";
        divListaE.id = "listaE";
        infoPrincipal.appendChild(divListaE);
        
        primerInputE = document.createElement("input");
        primerInputE.id = "inputListaE";
        primerInputE.setAttribute('placeholder', 'Agrupación...')
        divListaE.appendChild(primerInputE);
        
        segundoInputE = document.createElement("input");
        segundoInputE.id = "segundoInputListaE";
        segundoInputE.setAttribute('placeholder', 'Candidato...')
        divListaE.appendChild(segundoInputE);
        
        tercerInputE = document.createElement("input");
        tercerInputE.id = "tercerInputListaE";
        tercerInputE.setAttribute('placeholder', 'Votos')
        divListaE.appendChild(tercerInputE);

            //Sexta lista
        divListaF = document.createElement("div");
        divListaF.className = "agrupacion";
        divListaF.id = "listaF";
        infoPrincipal.appendChild(divListaF);
        
            primerInputF = document.createElement("input");
            primerInputF.id = "inputListaF";
            primerInputF.setAttribute('placeholder', 'Agrupación...')
            divListaF.appendChild(primerInputF);
            
            segundoInputF = document.createElement("input");
            segundoInputF.id = "segundoInputListaF";
            segundoInputF.setAttribute('placeholder', 'Candidato...')
            divListaF.appendChild(segundoInputF);
            
            tercerInputF = document.createElement("input");
            tercerInputF.id = "tercerInputListaF";
            tercerInputF.setAttribute('placeholder', 'Votos')
            divListaF.appendChild(tercerInputF);
    break;

    case 7:
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);
    
            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);

        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
        
        primerInputB = document.createElement("input");
        primerInputB.id = "inputListaB"
        primerInputB.setAttribute('placeholder', 'Agrupación...')
        divListaB.appendChild(primerInputB);

        segundoInputB = document.createElement("input");
        segundoInputB.id = "segundoInputListaB";
        segundoInputB.setAttribute('placeholder', 'Candidato...')
        divListaB.appendChild(segundoInputB);

        tercerInputB = document.createElement("input");
        tercerInputB.id = "tercerInputListaB"
        tercerInputB.setAttribute('placeholder', 'Votos')
        divListaB.appendChild(tercerInputB);

                    //Tercer lista
        divListaC = document.createElement("div");
        divListaC.className = "agrupacion";
        divListaC.id = "listaC";
        infoPrincipal.appendChild(divListaC);
                            
        primerInputC = document.createElement("input");
        primerInputC.id = "inputListaC";
        primerInputC.setAttribute('placeholder', 'Agrupación...')
        divListaC.appendChild(primerInputC);
                    
        segundoInputC = document.createElement("input");
        segundoInputC.id = "segundoInputListaC"; 
        segundoInputC.setAttribute('placeholder', 'Candidato...')
        divListaC.appendChild(segundoInputC);
                    
        tercerInputC = document.createElement("input");
        tercerInputC.id = "tercerInputListaC";
        tercerInputC.setAttribute('placeholder', 'Votos')
        divListaC.appendChild(tercerInputC);

            //Cuarta lista        
        divListaD = document.createElement("div");
        divListaD.className = "agrupacion";
        divListaD.id = "listaD";
        infoPrincipal.appendChild(divListaD);
        
        primerInputD = document.createElement("input");
        primerInputD.id = "inputListaD"
        primerInputD.setAttribute('placeholder', 'Agrupación...')
        divListaD.appendChild(primerInputD);
        
        segundoInputD = document.createElement("input");
        segundoInputD.id = "segundoInputListaD"
        segundoInputD.setAttribute('placeholder', 'Candidato...')
        divListaD.appendChild(segundoInputD);
        
        tercerInputD = document.createElement("input");
        tercerInputD.id = "tercerInputListaD";
        tercerInputD.setAttribute('placeholder', 'Votos')
        divListaD.appendChild(tercerInputD);

            //Quinta lista
        divListaE = document.createElement("div");
        divListaE.className = "agrupacion";
        divListaE.id = "listaE";
        infoPrincipal.appendChild(divListaE);
        
        primerInputE = document.createElement("input");
        primerInputE.id = "inputListaE";
        primerInputE.setAttribute('placeholder', 'Agrupación...')
        divListaE.appendChild(primerInputE);
        
        segundoInputE = document.createElement("input");
        segundoInputE.id = "segundoInputListaE";
        segundoInputE.setAttribute('placeholder', 'Candidato...')
        divListaE.appendChild(segundoInputE);
        
        tercerInputE = document.createElement("input");
        tercerInputE.id = "tercerInputListaE";
        tercerInputE.setAttribute('placeholder', 'Votos')
        divListaE.appendChild(tercerInputE);

            //Sexta lista
        divListaF = document.createElement("div");
        divListaF.className = "agrupacion";
        divListaF.id = "listaF";
        infoPrincipal.appendChild(divListaF);
        
        primerInputF = document.createElement("input");
        primerInputF.id = "inputListaF";
        primerInputF.setAttribute('placeholder', 'Agrupación...')
        divListaF.appendChild(primerInputF);
        
        segundoInputF = document.createElement("input");
        segundoInputF.id = "segundoInputListaF";
        segundoInputF.setAttribute('placeholder', 'Candidato...')
        divListaF.appendChild(segundoInputF);
        
        tercerInputF = document.createElement("input");
        tercerInputF.id = "tercerInputListaF";
        tercerInputF.setAttribute('placeholder', 'Votos')
        divListaF.appendChild(tercerInputF);

            //Septima lista
        divListaG = document.createElement("div");
        divListaG.className = "agrupacion";
        divListaG.id = "listaG";
        infoPrincipal.appendChild(divListaG);
        
            primerInputG = document.createElement("input");
            primerInputG.id = "inputListaG";
            primerInputG.setAttribute('placeholder', 'Agrupación...')
            divListaG.appendChild(primerInputG);
            
            segundoInputG = document.createElement("input");
            segundoInputG.id = "segundoInputListaG";
            segundoInputG.setAttribute('placeholder', 'Candidato...')
            divListaG.appendChild(segundoInputG);
            
            tercerInputG = document.createElement("input");
            tercerInputG.id = "tercerInputListaG";
            tercerInputG.setAttribute('placeholder', 'Votos')
            divListaG.appendChild(tercerInputG);
    break;

    case 8:
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);
    
            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);

        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
        
        primerInputB = document.createElement("input");
        primerInputB.id = "inputListaB"
        primerInputB.setAttribute('placeholder', 'Agrupación...')
        divListaB.appendChild(primerInputB);

        segundoInputB = document.createElement("input");
        segundoInputB.id = "segundoInputListaB";
        segundoInputB.setAttribute('placeholder', 'Candidato...')
        divListaB.appendChild(segundoInputB);

        tercerInputB = document.createElement("input");
        tercerInputB.id = "tercerInputListaB"
        tercerInputB.setAttribute('placeholder', 'Votos')
        divListaB.appendChild(tercerInputB);

                    //Tercer lista
        divListaC = document.createElement("div");
        divListaC.className = "agrupacion";
        divListaC.id = "listaC";
        infoPrincipal.appendChild(divListaC);
                            
        primerInputC = document.createElement("input");
        primerInputC.id = "inputListaC";
        primerInputC.setAttribute('placeholder', 'Agrupación...')
        divListaC.appendChild(primerInputC);
                    
        segundoInputC = document.createElement("input");
        segundoInputC.id = "segundoInputListaC"; 
        segundoInputC.setAttribute('placeholder', 'Candidato...')
        divListaC.appendChild(segundoInputC);
                    
        tercerInputC = document.createElement("input");
        tercerInputC.id = "tercerInputListaC";
        tercerInputC.setAttribute('placeholder', 'Votos')
        divListaC.appendChild(tercerInputC);

            //Cuarta lista        
        divListaD = document.createElement("div");
        divListaD.className = "agrupacion";
        divListaD.id = "listaD";
        infoPrincipal.appendChild(divListaD);
        
        primerInputD = document.createElement("input");
        primerInputD.id = "inputListaD"
        primerInputD.setAttribute('placeholder', 'Agrupación...')
        divListaD.appendChild(primerInputD);
        
        segundoInputD = document.createElement("input");
        segundoInputD.id = "segundoInputListaD"
        segundoInputD.setAttribute('placeholder', 'Candidato...')
        divListaD.appendChild(segundoInputD);
        
        tercerInputD = document.createElement("input");
        tercerInputD.id = "tercerInputListaD";
        tercerInputD.setAttribute('placeholder', 'Votos')
        divListaD.appendChild(tercerInputD);

            //Quinta lista
        divListaE = document.createElement("div");
        divListaE.className = "agrupacion";
        divListaE.id = "listaE";
        infoPrincipal.appendChild(divListaE);
        
        primerInputE = document.createElement("input");
        primerInputE.id = "inputListaE";
        primerInputE.setAttribute('placeholder', 'Agrupación...')
        divListaE.appendChild(primerInputE);
        
        segundoInputE = document.createElement("input");
        segundoInputE.id = "segundoInputListaE";
        segundoInputE.setAttribute('placeholder', 'Candidato...')
        divListaE.appendChild(segundoInputE);
        
        tercerInputE = document.createElement("input");
        tercerInputE.id = "tercerInputListaE";
        tercerInputE.setAttribute('placeholder', 'Votos')
        divListaE.appendChild(tercerInputE);

            //Sexta lista
        divListaF = document.createElement("div");
        divListaF.className = "agrupacion";
        divListaF.id = "listaF";
        infoPrincipal.appendChild(divListaF);
        
        primerInputF = document.createElement("input");
        primerInputF.id = "inputListaF";
        primerInputF.setAttribute('placeholder', 'Agrupación...')
        divListaF.appendChild(primerInputF);
        
        segundoInputF = document.createElement("input");
        segundoInputF.id = "segundoInputListaF";
        segundoInputF.setAttribute('placeholder', 'Candidato...')
        divListaF.appendChild(segundoInputF);
        
        tercerInputF = document.createElement("input");
        tercerInputF.id = "tercerInputListaF";
        tercerInputF.setAttribute('placeholder', 'Votos')
        divListaF.appendChild(tercerInputF);

            //Septima lista
        divListaG = document.createElement("div");
        divListaG.className = "agrupacion";
        divListaG.id = "listaG";
        infoPrincipal.appendChild(divListaG);
        
        primerInputG = document.createElement("input");
        primerInputG.id = "inputListaG";
        primerInputG.setAttribute('placeholder', 'Agrupación...')
        divListaG.appendChild(primerInputG);
        
        segundoInputG = document.createElement("input");
        segundoInputG.id = "segundoInputListaG";
        segundoInputG.setAttribute('placeholder', 'Candidato...')
        divListaG.appendChild(segundoInputG);
        
        tercerInputG = document.createElement("input");
        tercerInputG.id = "tercerInputListaG";
        tercerInputG.setAttribute('placeholder', 'Votos')
        divListaG.appendChild(tercerInputG);

            //Octava lista
        divListaH = document.createElement("div");
        divListaH.className = "agrupacion";
        divListaH.id = "listaH";
        infoPrincipal.appendChild(divListaH);
        
            primerInputH = document.createElement("input");
            primerInputH.id = "inputListaH";
            primerInputH.setAttribute('placeholder', 'Agrupación...')
            divListaH.appendChild(primerInputH);
            
            segundoInputH = document.createElement("input");
            segundoInputH.id = "segundoInputListaH";
            segundoInputH.setAttribute('placeholder', 'Candidato...')
            divListaH.appendChild(segundoInputH);
            
            tercerInputH = document.createElement("input");
            tercerInputH.id = "tercerInputListaH";
            tercerInputH.setAttribute('placeholder', 'Votos')
            divListaH.appendChild(tercerInputH);
    break;

    case 9:
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);
    
            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);

        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
        
        primerInputB = document.createElement("input");
        primerInputB.id = "inputListaB"
        primerInputB.setAttribute('placeholder', 'Agrupación...')
        divListaB.appendChild(primerInputB);

        segundoInputB = document.createElement("input");
        segundoInputB.id = "segundoInputListaB";
        segundoInputB.setAttribute('placeholder', 'Candidato...')
        divListaB.appendChild(segundoInputB);

        tercerInputB = document.createElement("input");
        tercerInputB.id = "tercerInputListaB"
        tercerInputB.setAttribute('placeholder', 'Votos')
        divListaB.appendChild(tercerInputB);

                    //Tercer lista
        divListaC = document.createElement("div");
        divListaC.className = "agrupacion";
        divListaC.id = "listaC";
        infoPrincipal.appendChild(divListaC);
                            
        primerInputC = document.createElement("input");
        primerInputC.id = "inputListaC";
        primerInputC.setAttribute('placeholder', 'Agrupación...')
        divListaC.appendChild(primerInputC);
                    
        segundoInputC = document.createElement("input");
        segundoInputC.id = "segundoInputListaC"; 
        segundoInputC.setAttribute('placeholder', 'Candidato...')
        divListaC.appendChild(segundoInputC);
                    
        tercerInputC = document.createElement("input");
        tercerInputC.id = "tercerInputListaC";
        tercerInputC.setAttribute('placeholder', 'Votos')
        divListaC.appendChild(tercerInputC);

            //Cuarta lista        
        divListaD = document.createElement("div");
        divListaD.className = "agrupacion";
        divListaD.id = "listaD";
        infoPrincipal.appendChild(divListaD);
        
        primerInputD = document.createElement("input");
        primerInputD.id = "inputListaD"
        primerInputD.setAttribute('placeholder', 'Agrupación...')
        divListaD.appendChild(primerInputD);
        
        segundoInputD = document.createElement("input");
        segundoInputD.id = "segundoInputListaD"
        segundoInputD.setAttribute('placeholder', 'Candidato...')
        divListaD.appendChild(segundoInputD);
        
        tercerInputD = document.createElement("input");
        tercerInputD.id = "tercerInputListaD";
        tercerInputD.setAttribute('placeholder', 'Votos')
        divListaD.appendChild(tercerInputD);

            //Quinta lista
        divListaE = document.createElement("div");
        divListaE.className = "agrupacion";
        divListaE.id = "listaE";
        infoPrincipal.appendChild(divListaE);
        
        primerInputE = document.createElement("input");
        primerInputE.id = "inputListaE";
        primerInputE.setAttribute('placeholder', 'Agrupación...')
        divListaE.appendChild(primerInputE);
        
        segundoInputE = document.createElement("input");
        segundoInputE.id = "segundoInputListaE";
        segundoInputE.setAttribute('placeholder', 'Candidato...')
        divListaE.appendChild(segundoInputE);
        
        tercerInputE = document.createElement("input");
        tercerInputE.id = "tercerInputListaE";
        tercerInputE.setAttribute('placeholder', 'Votos')
        divListaE.appendChild(tercerInputE);

            //Sexta lista
        divListaF = document.createElement("div");
        divListaF.className = "agrupacion";
        divListaF.id = "listaF";
        infoPrincipal.appendChild(divListaF);
        
        primerInputF = document.createElement("input");
        primerInputF.id = "inputListaF";
        primerInputF.setAttribute('placeholder', 'Agrupación...')
        divListaF.appendChild(primerInputF);
        
        segundoInputF = document.createElement("input");
        segundoInputF.id = "segundoInputListaF";
        segundoInputF.setAttribute('placeholder', 'Candidato...')
        divListaF.appendChild(segundoInputF);
        
        tercerInputF = document.createElement("input");
        tercerInputF.id = "tercerInputListaF";
        tercerInputF.setAttribute('placeholder', 'Votos')
        divListaF.appendChild(tercerInputF);

            //Septima lista
        divListaG = document.createElement("div");
        divListaG.className = "agrupacion";
        divListaG.id = "listaG";
        infoPrincipal.appendChild(divListaG);
        
        primerInputG = document.createElement("input");
        primerInputG.id = "inputListaG";
        primerInputG.setAttribute('placeholder', 'Agrupación...')
        divListaG.appendChild(primerInputG);
        
        segundoInputG = document.createElement("input");
        segundoInputG.id = "segundoInputListaG";
        segundoInputG.setAttribute('placeholder', 'Candidato...')
        divListaG.appendChild(segundoInputG);
        
        tercerInputG = document.createElement("input");
        tercerInputG.id = "tercerInputListaG";
        tercerInputG.setAttribute('placeholder', 'Votos')
        divListaG.appendChild(tercerInputG);

            //Octava lista
        divListaH = document.createElement("div");
        divListaH.className = "agrupacion";
        divListaH.id = "listaH";
        infoPrincipal.appendChild(divListaH);
        
        primerInputH = document.createElement("input");
        primerInputH.id = "inputListaH";
        primerInputH.setAttribute('placeholder', 'Agrupación...')
        divListaH.appendChild(primerInputH);
        
        segundoInputH = document.createElement("input");
        segundoInputH.id = "segundoInputListaH";
        segundoInputH.setAttribute('placeholder', 'Candidato...')
        divListaH.appendChild(segundoInputH);
        
        tercerInputH = document.createElement("input");
        tercerInputH.id = "tercerInputListaH";
        tercerInputH.setAttribute('placeholder', 'Votos')
        divListaH.appendChild(tercerInputH);

            //Novena lista
        divListaI = document.createElement("div");
        divListaI.className = "agrupacion";
        divListaI.id = "listaI";
        infoPrincipal.appendChild(divListaI);
        
            primerInputI = document.createElement("input");
            primerInputI.id = "inputListaI";
            primerInputI.setAttribute('placeholder', 'Agrupación...')
            divListaI.appendChild(primerInputI);
            
            segundoInputI = document.createElement("input");
            segundoInputI.id = "segundoInputListaI";
            segundoInputI.setAttribute('placeholder', 'Candidato...')
            divListaI.appendChild(segundoInputI);
            
            tercerInputI = document.createElement("input");
            tercerInputI.id = "tercerInputListaI";
            tercerInputI.setAttribute('placeholder', 'Votos')
            divListaI.appendChild(tercerInputI);
    break;

    case 10:
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);
    
            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);

        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
        
        primerInputB = document.createElement("input");
        primerInputB.id = "inputListaB"
        primerInputB.setAttribute('placeholder', 'Agrupación...')
        divListaB.appendChild(primerInputB);

        segundoInputB = document.createElement("input");
        segundoInputB.id = "segundoInputListaB";
        segundoInputB.setAttribute('placeholder', 'Candidato...')
        divListaB.appendChild(segundoInputB);

        tercerInputB = document.createElement("input");
        tercerInputB.id = "tercerInputListaB"
        tercerInputB.setAttribute('placeholder', 'Votos')
        divListaB.appendChild(tercerInputB);
                    
            //Tercer lista
        divListaC = document.createElement("div");
        divListaC.className = "agrupacion";
        divListaC.id = "listaC";
        infoPrincipal.appendChild(divListaC);
                            
        primerInputC = document.createElement("input");
        primerInputC.id = "inputListaC";
        primerInputC.setAttribute('placeholder', 'Agrupación...')
        divListaC.appendChild(primerInputC);
                    
        segundoInputC = document.createElement("input");
        segundoInputC.id = "segundoInputListaC"; 
        segundoInputC.setAttribute('placeholder', 'Candidato...')
        divListaC.appendChild(segundoInputC);
                    
        tercerInputC = document.createElement("input");
        tercerInputC.id = "tercerInputListaC";
        tercerInputC.setAttribute('placeholder', 'Votos')
        divListaC.appendChild(tercerInputC);

            //Cuarta lista        
        divListaD = document.createElement("div");
        divListaD.className = "agrupacion";
        divListaD.id = "listaD";
        infoPrincipal.appendChild(divListaD);
        
        primerInputD = document.createElement("input");
        primerInputD.id = "inputListaD"
        primerInputD.setAttribute('placeholder', 'Agrupación...')
        divListaD.appendChild(primerInputD);
        
        segundoInputD = document.createElement("input");
        segundoInputD.id = "segundoInputListaD"
        segundoInputD.setAttribute('placeholder', 'Candidato...')
        divListaD.appendChild(segundoInputD);
        
        tercerInputD = document.createElement("input");
        tercerInputD.id = "tercerInputListaD";
        tercerInputD.setAttribute('placeholder', 'Votos')
        divListaD.appendChild(tercerInputD);

            //Quinta lista
        divListaE = document.createElement("div");
        divListaE.className = "agrupacion";
        divListaE.id = "listaE";
        infoPrincipal.appendChild(divListaE);
        
        primerInputE = document.createElement("input");
        primerInputE.id = "inputListaE";
        primerInputE.setAttribute('placeholder', 'Agrupación...')
        divListaE.appendChild(primerInputE);
        
        segundoInputE = document.createElement("input");
        segundoInputE.id = "segundoInputListaE";
        segundoInputE.setAttribute('placeholder', 'Candidato...')
        divListaE.appendChild(segundoInputE);
        
        tercerInputE = document.createElement("input");
        tercerInputE.id = "tercerInputListaE";
        tercerInputE.setAttribute('placeholder', 'Votos')
        divListaE.appendChild(tercerInputE);

            //Sexta lista
        divListaF = document.createElement("div");
        divListaF.className = "agrupacion";
        divListaF.id = "listaF";
        infoPrincipal.appendChild(divListaF);
        
        primerInputF = document.createElement("input");
        primerInputF.id = "inputListaF";
        primerInputF.setAttribute('placeholder', 'Agrupación...')
        divListaF.appendChild(primerInputF);
        
        segundoInputF = document.createElement("input");
        segundoInputF.id = "segundoInputListaF";
        segundoInputF.setAttribute('placeholder', 'Candidato...')
        divListaF.appendChild(segundoInputF);
        
        tercerInputF = document.createElement("input");
        tercerInputF.id = "tercerInputListaF";
        tercerInputF.setAttribute('placeholder', 'Votos')
        divListaF.appendChild(tercerInputF);

            //Septima lista
        divListaG = document.createElement("div");
        divListaG.className = "agrupacion";
        divListaG.id = "listaG";
        infoPrincipal.appendChild(divListaG);
        
        primerInputG = document.createElement("input");
        primerInputG.id = "inputListaG";
        primerInputG.setAttribute('placeholder', 'Agrupación...')
        divListaG.appendChild(primerInputG);
        
        segundoInputG = document.createElement("input");
        segundoInputG.id = "segundoInputListaG";
        segundoInputG.setAttribute('placeholder', 'Candidato...')
        divListaG.appendChild(segundoInputG);
        
        tercerInputG = document.createElement("input");
        tercerInputG.id = "tercerInputListaG";
        tercerInputG.setAttribute('placeholder', 'Votos')
        divListaG.appendChild(tercerInputG);

            //Octava lista
        divListaH = document.createElement("div");
        divListaH.className = "agrupacion";
        divListaH.id = "listaH";
        infoPrincipal.appendChild(divListaH);
        
        primerInputH = document.createElement("input");
        primerInputH.id = "inputListaH";
        primerInputH.setAttribute('placeholder', 'Agrupación...')
        divListaH.appendChild(primerInputH);
        
        segundoInputH = document.createElement("input");
        segundoInputH.id = "segundoInputListaH";
        segundoInputH.setAttribute('placeholder', 'Candidato...')
        divListaH.appendChild(segundoInputH);
        
        tercerInputH = document.createElement("input");
        tercerInputH.id = "tercerInputListaH";
        tercerInputH.setAttribute('placeholder', 'Votos')
        divListaH.appendChild(tercerInputH);

            //Novena lista
        divListaI = document.createElement("div");
        divListaI.className = "agrupacion";
        divListaI.id = "listaI";
        infoPrincipal.appendChild(divListaI);
        
        primerInputI = document.createElement("input");
        primerInputI.id = "inputListaI";
        primerInputI.setAttribute('placeholder', 'Agrupación...')
        divListaI.appendChild(primerInputI);
        
        segundoInputI = document.createElement("input");
        segundoInputI.id = "segundoInputListaI";
        segundoInputI.setAttribute('placeholder', 'Candidato...')
        divListaI.appendChild(segundoInputI);
        
        tercerInputI = document.createElement("input");
        tercerInputI.id = "tercerInputListaI";
        tercerInputI.setAttribute('placeholder', 'Votos')
        divListaI.appendChild(tercerInputI);

            //Decima lista
        divListaJ = document.createElement("div");
        divListaJ.className = "agrupacion";
        divListaJ.id = "listaJ";
        infoPrincipal.appendChild(divListaJ);
        
            primerInputJ = document.createElement("input");
            primerInputJ.id = "inputListaJ";
            primerInputJ.setAttribute('placeholder', 'Agrupación...')
            divListaJ.appendChild(primerInputJ);
            
            segundoInputJ = document.createElement("input");
            segundoInputJ.id = "segundoInputListaJ";
            segundoInputJ.setAttribute('placeholder', 'Candidato...')
            divListaJ.appendChild(segundoInputJ);
            
            tercerInputJ = document.createElement("input");
            tercerInputJ.id = "tercerInputListaJ";
            tercerInputJ.setAttribute('placeholder', 'Votos')
            divListaJ.appendChild(tercerInputJ);
    break;
}       
    }

//Quinto Nodo: Post sección principal
const etiqVotosBlancos = document.createElement("label");
etiqVotosBlancos.innerText = "Votos blancos"
posSeccion.appendChild(etiqVotosBlancos);

let votosBlancos = document.createElement("input");
votosBlancos.setAttribute ('type', 'number');
votosBlancos.setAttribute ('value', 0);
votosBlancos.id = "votosBlancos";
posSeccion.appendChild(votosBlancos);

const etiqVotosNulos = document.createElement("label");
etiqVotosNulos.innerText = "Votos nulos"
posSeccion.appendChild(etiqVotosNulos);

const votosNulos = document.createElement("input");
posSeccion.appendChild(votosNulos);

const etiqVotosImpugnados = document.createElement("label");
etiqVotosImpugnados.innerText = "Votos impugnados";
posSeccion.appendChild(etiqVotosImpugnados);

const votosImpugnados = document.createElement("input");
posSeccion.appendChild(votosImpugnados);

const boton = document.createElement("button");
boton.setAttribute('type', 'submit');
boton.className = "boton";
boton.innerText = "Enviar consulta";
boton.addEventListener("click", calculo);
posSeccion.appendChild(boton);

//Sexto Nodo: Información secundaria(aside)
menuLateral.className = "aside";

const tituloEstatuto = document.createElement("h3");
tituloEstatuto.innerText = "Estatuto del Club Atlético San Lorenzo de Almagro";
infoSecundaria.appendChild(tituloEstatuto);

const subArt46 = document.createElement("h4");
subArt46.innerText = "Artículo 46";
infoSecundaria.appendChild(subArt46);

const parrafoArt46 = document.createElement("p");
parrafoArt46.innerText = "La Asamblea de representantes es la autoridad suprema de la institución. Se integra con noventa asociados y asociadas, con una integración de mujeres que asegure la representatividad de las asociadas, en proporción siempre a la composición por género del total de la masa societaria vigente al 30 de junio del año en que se celebren las elecciones, en concordancia con el objeto de la Institución, distribuidos en grupos de dos tercios para la mayoria y un tercio para la o las minorías. Los miembros correspondientes a la minoría serán elegidos según el sistema de representación proporcional por cociente. Este cociente será el resultado de dividir la suma de los votos obtenidos por las listas minoritarias por el número de miembros que corresponden a la minoría, siempre que dichos votos sean superiores al cincuenta por ciento (50%) de los votos obtenidos por la mayoría. Si las minorías obtuvieran en total menos del cincuenta por ciento (50%) de los votos obtenidos por la mayoría, ésta participará del cociente para distribuir cargos con la minoría. Obtenido el número definitivo de los representantes para la mayoría, el resto de los cargos a ocupar se distribuirá entre la o las minorías según la relación entre votos obtenidos y y el cociente. En ningún caso las minorías, en conjunto, podrán tener menos de quince (15) representantes, cualesquiera fuera el número de votos obtenidos. En este caso, la mayoría cederá las diferencias en representantes a las fracciones según el número de votos de las minorías.";
infoSecundaria.appendChild(parrafoArt46);

const subArt103 = document.createElement("h4");
subArt103.innerText = "Artículo 103";
infoSecundaria.appendChild(subArt103);

const parrafoArt103 = document.createElement("p");
parrafoArt103.innerText = "Realizado el cómputo final en lo que hace a los asambleístas, la Junta Electoral proclamará electos a los que ocupen los primeros puestos de la lista que hubiese obtenido el mayor número de votos hasta completar el total de sesenta (60) cargos del total de los cargos a elegir, salvo que hubiese obtenido un porcentaje mayor al cincuenta por ciento de los votos, en cuyo caso se le adjudicará el número de asambleístas que corresponda porcentualmente a esa demasía. El cupo restante -o el menor que corresponda si la lista que salió primera en los comicios obtuviera más del cincuenta por ciento de los votos escrutados, se adjudicará a las restantes listas en proporción al número de votos obtenidos por cada una, a cuyo efecto se observarán las reglas consignadas en el artículo 46.";
infoSecundaria.appendChild(parrafoArt103);

const subArt104 = document.createElement("h4");
subArt104.innerText = "Artículo 104";
infoSecundaria.appendChild(subArt104);

const parrafoArt104 = document.createElement("p");
parrafoArt104.innerText = "Igual procedimiento se seguirá para designar a los que habrán de integrar la Comisión Directiva, adjudicandose los quince primeros lugares del total de sus componentes a la lista que obtenga el mayor número de votos, salvo que hubiese que hubiese obtenido un porcentaje al cincuenta por ciento de los votos, en cuyo caso se adjudicará el número de miembras que corresponda a esa demasía, observándose para este caso la regla consignada en el artículo 46. Los otros cinco (5) cargos -o los que resten en su caso- se adjudicarán a las demás listas, siempre que hubieran obtenido un número superior al cuatro (4) porciento de los votos emitidos, que es el piso mínimo establecido para obtener al menos un cargo en Comisión Directiva.";
infoSecundaria.appendChild(parrafoArt104);

const subArt105 = document.createElement("h4");
subArt105.innerText = "Artículo 105";
infoSecundaria.appendChild(subArt105);

const parrafoArt105 = document.createElement("p");
parrafoArt105.innerText = "Si dos o mas listas empataran en la mayor cantidad de votos obtenidos para cada una, se aplicará el siguiente procedimiento:";
infoSecundaria.appendChild(parrafoArt105);

const listaArt105 = document.createElement("ol");
infoSecundaria.appendChild(listaArt105);

const primerElementoArt105 = document.createElement("li");
primerElementoArt105.innerText = "Los dos tercios o el setenta y cinco porciento de los cargos se distribuirá entre las empatadas en partes iguales.";
listaArt105.appendChild(primerElementoArt105);

const segundoElementoArt105 = document.createElement("li");
segundoElementoArt105.innerText = "El cincuenta por ciento de los votos obtenidos por cada una de las listas que hubieran empatado y el total de los obtenidos por las demás listas, será sumado.";
listaArt105.appendChild(segundoElementoArt105);

const tercerElementoArt105 = document.createElement("li");
tercerElementoArt105.innerText = "El resultado de la suma anterior se dividirá por el remanente de puestos a adjudicar.";
listaArt105.appendChild(tercerElementoArt105);

const cuartoElementoArt105 = document.createElement("li");
cuartoElementoArt105.innerText = "El cincuenta por ciento de los votos obtenidos por cada una de las listas que hubieran empatado y el total de los obtenidos por cada una de las demás listas, se dividirá individualmente por el cociente obtenido con anterioridad. El nuevo cociente que se obtenga dará el número de miembros con que se incrementará el obtenido por las listas mayoritarias y el que corresponda a cada una de las demás.";
listaArt105.appendChild(cuartoElementoArt105);

const quintoElementoArt105 = document.createElement("li");
quintoElementoArt105.innerText = "Si se tratar de elección de miembros de Comisión Directiva, los cargos de presidente, vicepresidente 1º, vicepresidente 2º, secretario general, tesorero, intendente, secretario de actas, prosecretario general, protesorero y subintendente, y de los diez miembros que se desempeñarán como vocales, en ese orden y en forma alternada, serán adjudicados a las distintas listas empatadas, comenzándose por adjudicar la presidencia al socio con mayor antigüedad que encabece una de ellas.";
listaArt105.appendChild(quintoElementoArt105);

const subArt106 = document.createElement("h4");
subArt106.innerText = "Artículo 106";
infoSecundaria.appendChild(subArt106);

const parrafoArt106 = document.createElement("p");
parrafoArt106.innerText = "Los cargos de la Comisión Fiscalizadora se adjudicarán dividiendo el total de los votos emitidos por siete. El número de votos obtenidos por cada lista se dividirá luego por este cociente y el nuevo que resulte dará el número que corresponda a cada una, adjudicándose a los mayores residuos los que falten. la Junta Electoral procederá de inmediato a proclamar electos y hasta completar el número asignado, a los candidatos que ocupan los puestos en cada lista. Acto continuo, extenderá sus nombramientos y los convocará para que celebren sesión constitutiva dentro de los plazos establecidos. Los restantes integrantes de las listas quedarán como miembros reemplazantes de los electos por cada una, para el caso de vacancia.";
infoSecundaria.appendChild(parrafoArt106);




//Séptimo Nodo: Pie de página

class Agrupaciones {
    constructor (nombre, candidato, votos, porcentaje, color, AR, CD, CF){
        this.nombre = nombre;
        this.candidato = candidato;
        this.votos = votos;
        this.porcentaje = porcentaje;
        this.color = color;
        this.AR = AR;
        this.CD = CD;
        this.CF = CF;
    }
}

const lista1 = new Agrupaciones ("sin definir", "sin definir", 0, 0, "green", 0, 0, 0);
const lista2 = new Agrupaciones ("sin definir", "sin definir", 0, 0, "orange", 0, 0, 0);
const lista3 = new Agrupaciones ("sin definir", "sin definir", 0, 0, "deeppink", 0, 0, 0);
const lista4 = new Agrupaciones ("sin definir", "sin definir", 0, 0, "blue", 0, 0, 0);
const lista5 = new Agrupaciones ("sin definir", "sin definir", 0, 0, "red", 0, 0, 0);
const lista6 = new Agrupaciones ("sin definir", "sin definir", 0, 0, "grey", 0, 0, 0);
const lista7 = new Agrupaciones ("sin definir", "sin definir", 0, 0, "black", 0, 0, 0);
const lista8 = new Agrupaciones ("sin definir", "sin definir", 0, 0, "purple", 0, 0, 0);
const lista9 = new Agrupaciones ("sin definir", "sin definir", 0, 0, "cadetblue", 0, 0, 0);
const lista10 = new Agrupaciones ("sin definir", "sin definir", 0, 0, "darkgoldenrod", 0, 0, 0);

function calculo(){
    let cantidadListas = document.getElementById("numListas").value;

    switch(parseInt(cantidadListas)){
    case 2:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);

        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);
    break;
    
    case 3:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);
    
        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);

        lista3.nombre = document.getElementById("inputListaC").value;
        lista3.candidato = document.getElementById("segundoInputListaC").value;
        lista3.votos = document.getElementById("tercerInputListaC").value;
        lista3.votos = parseInt(lista3.votos);
    break;

    case 4:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);
    
        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);

        lista3.nombre = document.getElementById("inputListaC").value;
        lista3.candidato = document.getElementById("segundoInputListaC").value;
        lista3.votos = document.getElementById("tercerInputListaC").value;
        lista3.votos = parseInt(lista3.votos);
    
        lista4.nombre = document.getElementById("inputListaD").value;
        lista4.candidato = document.getElementById("segundoInputListaD").value;
        lista4.votos = document.getElementById("tercerInputListaD").value;
        lista4.votos = parseInt(lista4.votos);
    break;

    case 5:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);
    
        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);

        lista3.nombre = document.getElementById("inputListaC").value;
        lista3.candidato = document.getElementById("segundoInputListaC").value;
        lista3.votos = document.getElementById("tercerInputListaC").value;
        lista3.votos = parseInt(lista3.votos);
    
        lista4.nombre = document.getElementById("inputListaD").value;
        lista4.candidato = document.getElementById("segundoInputListaD").value;
        lista4.votos = document.getElementById("tercerInputListaD").value;
        lista4.votos = parseInt(lista4.votos);
    
        lista5.nombre = document.getElementById("inputListaE").value;
        lista5.candidato = document.getElementById("segundoInputListaE").value;
        lista5.votos = document.getElementById("tercerInputListaE").value;
        lista5.votos = parseInt(lista5.votos);
    break;

    case 6:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);
    
        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);

        lista3.nombre = document.getElementById("inputListaC").value;
        lista3.candidato = document.getElementById("segundoInputListaC").value;
        lista3.votos = document.getElementById("tercerInputListaC").value;
        lista3.votos = parseInt(lista3.votos);
    
        lista4.nombre = document.getElementById("inputListaD").value;
        lista4.candidato = document.getElementById("segundoInputListaD").value;
        lista4.votos = document.getElementById("tercerInputListaD").value;
        lista4.votos = parseInt(lista4.votos);
    
        lista5.nombre = document.getElementById("inputListaE").value;
        lista5.candidato = document.getElementById("segundoInputListaE").value;
        lista5.votos = document.getElementById("tercerInputListaE").value;
        lista5.votos = parseInt(lista5.votos);
    
        lista6.nombre = document.getElementById("inputListaF").value;
        lista6.candidato = document.getElementById("segundoInputListaF").value;
        lista6.votos = document.getElementById("tercerInputListaF").value;
        lista6.votos = parseInt(lista6.votos);
    break;

    case 7:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);
    
        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);

        lista3.nombre = document.getElementById("inputListaC").value;
        lista3.candidato = document.getElementById("segundoInputListaC").value;
        lista3.votos = document.getElementById("tercerInputListaC").value;
        lista3.votos = parseInt(lista3.votos);
    
        lista4.nombre = document.getElementById("inputListaD").value;
        lista4.candidato = document.getElementById("segundoInputListaD").value;
        lista4.votos = document.getElementById("tercerInputListaD").value;
        lista4.votos = parseInt(lista4.votos);
    
        lista5.nombre = document.getElementById("inputListaE").value;
        lista5.candidato = document.getElementById("segundoInputListaE").value;
        lista5.votos = document.getElementById("tercerInputListaE").value;
        lista5.votos = parseInt(lista5.votos);
    
        lista6.nombre = document.getElementById("inputListaF").value;
        lista6.candidato = document.getElementById("segundoInputListaF").value;
        lista6.votos = document.getElementById("tercerInputListaF").value;
        lista6.votos = parseInt(lista6.votos);
    
        lista7.nombre = document.getElementById("inputListaG").value;
        lista7.candidato = document.getElementById("segundoInputListaG").value;
        lista7.votos = document.getElementById("tercerInputListaG").value;
        lista7.votos = parseInt(lista7.votos);
    break;

    case 8:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);
    
        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);

        lista3.nombre = document.getElementById("inputListaC").value;
        lista3.candidato = document.getElementById("segundoInputListaC").value;
        lista3.votos = document.getElementById("tercerInputListaC").value;
        lista3.votos = parseInt(lista3.votos);
    
        lista4.nombre = document.getElementById("inputListaD").value;
        lista4.candidato = document.getElementById("segundoInputListaD").value;
        lista4.votos = document.getElementById("tercerInputListaD").value;
        lista4.votos = parseInt(lista4.votos);
    
        lista5.nombre = document.getElementById("inputListaE").value;
        lista5.candidato = document.getElementById("segundoInputListaE").value;
        lista5.votos = document.getElementById("tercerInputListaE").value;
        lista5.votos = parseInt(lista5.votos);
    
        lista6.nombre = document.getElementById("inputListaF").value;
        lista6.candidato = document.getElementById("segundoInputListaF").value;
        lista6.votos = document.getElementById("tercerInputListaF").value;
        lista6.votos = parseInt(lista6.votos);
    
        lista7.nombre = document.getElementById("inputListaG").value;
        lista7.candidato = document.getElementById("segundoInputListaG").value;
        lista7.votos = document.getElementById("tercerInputListaG").value;
        lista7.votos = parseInt(lista7.votos);
    
        lista8.nombre = document.getElementById("inputListaH").value;
        lista8.candidato = document.getElementById("segundoInputListaH").value;
        lista8.votos = document.getElementById("tercerInputListaH").value;
        lista8.votos = parseInt(lista8.votos);
    break;

    case 9:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);
    
        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);

        lista3.nombre = document.getElementById("inputListaC").value;
        lista3.candidato = document.getElementById("segundoInputListaC").value;
        lista3.votos = document.getElementById("tercerInputListaC").value;
        lista3.votos = parseInt(lista3.votos);
    
        lista4.nombre = document.getElementById("inputListaD").value;
        lista4.candidato = document.getElementById("segundoInputListaD").value;
        lista4.votos = document.getElementById("tercerInputListaD").value;
        lista4.votos = parseInt(lista4.votos);
    
        lista5.nombre = document.getElementById("inputListaE").value;
        lista5.candidato = document.getElementById("segundoInputListaE").value;
        lista5.votos = document.getElementById("tercerInputListaE").value;
        lista5.votos = parseInt(lista5.votos);
    
        lista6.nombre = document.getElementById("inputListaF").value;
        lista6.candidato = document.getElementById("segundoInputListaF").value;
        lista6.votos = document.getElementById("tercerInputListaF").value;
        lista6.votos = parseInt(lista6.votos);
    
        lista7.nombre = document.getElementById("inputListaG").value;
        lista7.candidato = document.getElementById("segundoInputListaG").value;
        lista7.votos = document.getElementById("tercerInputListaG").value;
        lista7.votos = parseInt(lista7.votos);
    
        lista8.nombre = document.getElementById("inputListaH").value;
        lista8.candidato = document.getElementById("segundoInputListaH").value;
        lista8.votos = document.getElementById("tercerInputListaH").value;
        lista8.votos = parseInt(lista8.votos);
    
        lista9.nombre = document.getElementById("inputListaI").value;
        lista9.candidato = document.getElementById("segundoInputListaI").value;
        lista9.votos = document.getElementById("tercerInputListaI").value;
        lista9.votos = parseInt(lista9.votos);
    break;

    case 10:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);
    
        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);

        lista3.nombre = document.getElementById("inputListaC").value;
        lista3.candidato = document.getElementById("segundoInputListaC").value;
        lista3.votos = document.getElementById("tercerInputListaC").value;
        lista3.votos = parseInt(lista3.votos);
    
        lista4.nombre = document.getElementById("inputListaD").value;
        lista4.candidato = document.getElementById("segundoInputListaD").value;
        lista4.votos = document.getElementById("tercerInputListaD").value;
        lista4.votos = parseInt(lista4.votos);
    
        lista5.nombre = document.getElementById("inputListaE").value;
        lista5.candidato = document.getElementById("segundoInputListaE").value;
        lista5.votos = document.getElementById("tercerInputListaE").value;
        lista5.votos = parseInt(lista5.votos);
    
        lista6.nombre = document.getElementById("inputListaF").value;
        lista6.candidato = document.getElementById("segundoInputListaF").value;
        lista6.votos = document.getElementById("tercerInputListaF").value;
        lista6.votos = parseInt(lista6.votos);
    
        lista7.nombre = document.getElementById("inputListaG").value;
        lista7.candidato = document.getElementById("segundoInputListaG").value;
        lista7.votos = document.getElementById("tercerInputListaG").value;
        lista7.votos = parseInt(lista7.votos);
    
        lista8.nombre = document.getElementById("inputListaH").value;
        lista8.candidato = document.getElementById("segundoInputListaH").value;
        lista8.votos = document.getElementById("tercerInputListaH").value;
        lista8.votos = parseInt(lista8.votos);
    
        lista9.nombre = document.getElementById("inputListaI").value;
        lista9.candidato = document.getElementById("segundoInputListaI").value;
        lista9.votos = document.getElementById("tercerInputListaI").value;
        lista9.votos = parseInt(lista9.votos);
    
        lista10.nombre = document.getElementById("inputListaJ").value;
        lista10.candidato = document.getElementById("segundoInputListaJ").value;
        lista10.votos = document.getElementById("tercerInputListaJ").value;
        lista10.votos = parseInt(lista10.votos);
    break;
    }
    
    let totBlancos = document.getElementById("votosBlancos").value;
    totBlancos = parseInt(totBlancos);

    let votosTotales = lista1.votos + lista2.votos + lista3.votos + lista4.votos + lista5.votos + lista6.votos + lista7.votos + lista8.votos + lista9.votos + lista10.votos + totBlancos;
    votosTotales = parseInt(votosTotales);
    
    //Calcular porcentajes de listas
    lista1.porcentaje = ((lista1.votos*100)/votosTotales).toFixed(3);
    lista2.porcentaje = ((lista2.votos*100)/votosTotales).toFixed(3);
    lista3.porcentaje = ((lista3.votos*100)/votosTotales).toFixed(3);
    lista4.porcentaje = ((lista4.votos*100)/votosTotales).toFixed(3);
    lista5.porcentaje = ((lista5.votos*100)/votosTotales).toFixed(3);
    lista6.porcentaje = ((lista6.votos*100)/votosTotales).toFixed(3);
    lista7.porcentaje = ((lista7.votos*100)/votosTotales).toFixed(3);
    lista8.porcentaje = ((lista8.votos*100)/votosTotales).toFixed(3);
    lista9.porcentaje = ((lista9.votos*100)/votosTotales).toFixed(3);
    lista10.porcentaje = ((lista10.votos*100)/votosTotales).toFixed(3);
    
    const arrayListas = [lista1, lista2, lista3, lista4, lista5, lista6, lista7, lista8, lista9, lista10];
    
    //Busca cual es la lista que sacó mayores votos.
    let votosMayor = Math.max(lista1.votos, lista2.votos, lista3.votos, lista4.votos, lista5.votos, lista5.votos, lista6.votos, lista7.votos, lista8.votos, lista9.votos, lista10.votos);
    
    let listaGanadora = arrayListas.find (function (arrayListas){
        return arrayListas.votos == votosMayor;
    });
    
    //Porcentaje de la mayoría
    let porcentajeMayoria = parseFloat((votosMayor*100)/votosTotales).toFixed(3);
    
    //Porcentaje de la minoría
    let votosMinoria = (votosTotales-votosMayor)-totBlancos;
    
    let porcentajeMinoria = parseFloat((votosMinoria*100)/votosTotales).toFixed(3);
    
    //4 - Se calculan los cargos en Asamblea de Representantes y Comisión Directiva que ocupa la mayoría.
    
    let miembrosMayoriaAR = 0;
    let miembrosMayoriaCD = 0; 
    
    if (porcentajeMayoria < 50) {
        miembrosMayoriaAR = 60;
        miembrosMayoriaCD = 15;
    } else {
        miembrosMayoriaAR = parseFloat((((porcentajeMayoria-50)/100)*60)+60).toFixed(3);
        miembrosMayoriaCD = parseFloat((((porcentajeMayoria-50)/100)*15)+15).toFixed(3);
    }
    console.log(miembrosMayoriaCD);
    lista1.AR = Math.round(miembrosMayoriaAR);  
    lista1.CD = Math.round(miembrosMayoriaCD);
    console.log(lista1.CD);
    
    //Definición de los miembros por la minoría.
    
    //Primero se definen cuantos miembros tiene la minoría.
    
    let miembrosMinoriaAR = parseFloat(90 - miembrosMayoriaAR).toFixed(3);
    let miembrosMinoriaCD = parseFloat(20 - miembrosMayoriaCD).toFixed(3);

    console.log(miembrosMinoriaCD);
    
    //Segundo: se define el cociente para la distribución de los cargos entre la minoría.
    let cocienteMinoriaAR
    let cocienteMinoriaCD
    
    if (porcentajeMinoria > 50) {
        cocienteMinoriaAR = Math.round(votosMinoria/miembrosMinoriaAR);
        cocienteMinoriaCD = Math.round(votosMinoria/miembrosMinoriaCD);
    } else {
        cocienteMinoriaAR = Math.round((listaGanadora.votos+votosMinoria)/miembrosMinoriaAR);
        cocienteMinoriaCD = Math.round((listaGanadora.votos+votosMinoria)/miembrosMinoriaCD);
    }    
    
    //Tercero: Se calculan los cargos para cada agrupación minoritaria a partir de la relación entre votos obtenidos y el cociente.
    
    //ASAMBLEA DE REPRESENTANTES
    
    let miembrosLista2AR = parseFloat(lista2.votos/cocienteMinoriaAR).toFixed(3);
    lista2.AR = miembrosLista2AR;
    
    let miembrosLista3AR = parseFloat(lista3.votos/cocienteMinoriaAR).toFixed(3);
    lista3.AR = miembrosLista3AR;
    
    let miembrosLista4AR = parseFloat(lista4.votos/cocienteMinoriaAR).toFixed(3);
    lista4.AR = miembrosLista4AR;
    
    let miembrosLista5AR = parseFloat(lista5.votos/cocienteMinoriaAR).toFixed(3);
    lista5.AR = miembrosLista5AR;
    
    let miembrosLista6AR = parseFloat(lista6.votos/cocienteMinoriaAR).toFixed(3);
    lista6.AR = miembrosLista6AR;
    
    let miembrosLista7AR = parseFloat(lista7.votos/cocienteMinoriaAR).toFixed(3);
    lista7.AR = miembrosLista7AR;
    
    let miembrosLista8AR = parseFloat(lista8.votos/cocienteMinoriaAR).toFixed(3);
    lista8.AR = miembrosLista8AR;
    
    let miembrosLista9AR = parseFloat(lista9.votos/cocienteMinoriaAR).toFixed(3);
    lista9.AR = miembrosLista9AR;
    
    let miembrosLista10AR = parseFloat(lista10.votos/cocienteMinoriaAR).toFixed(3);
    lista10.AR = miembrosLista10AR;
    
    //COMISIÓN DIRECTIVA
    
    let miembrosLista2CD = parseFloat(lista2.votos/cocienteMinoriaCD).toFixed(3);
    console.log(miembrosLista2CD);
    lista2.CD = Math.round(miembrosLista2CD);
    console.log(lista2.CD);
    
    let miembrosLista3CD = parseFloat(lista3.votos/cocienteMinoriaCD).toFixed(3);
    lista3.CD = Math.round(miembrosLista3CD);
    
    let miembrosLista4CD = parseFloat(lista4.votos/cocienteMinoriaCD).toFixed(3);
    lista4.CD = Math.round(miembrosLista4CD);
    
    let miembrosLista5CD = parseFloat(lista5.votos/cocienteMinoriaCD).toFixed(3);
    lista5.CD = Math.round(miembrosLista5CD);
    
    let miembrosLista6CD = parseFloat(lista6.votos/cocienteMinoriaCD).toFixed(3);
    lista6.CD = Math.round(miembrosLista6CD);
    
    let miembrosLista7CD = parseFloat(lista7.votos/cocienteMinoriaCD).toFixed(3);
    lista7.CD = Math.round(miembrosLista7CD);
    
    let miembrosLista8CD = parseFloat(lista8.votos/cocienteMinoriaCD).toFixed(3);
    lista8.CD = Math.round(miembrosLista8CD);
    
    let miembrosLista9CD = parseFloat(lista9.votos/cocienteMinoriaCD).toFixed(3);
    lista9.CD = Math.round(miembrosLista9CD);
    
    let miembrosLista10CD = parseFloat(lista10.votos/cocienteMinoriaCD).toFixed(3);
    lista10.CD = Math.round(miembrosLista10CD);

//Se calcula los miembros para comisión fiscalizadora

let cocienteCF = votosTotales/7;
lista1.CF = Math.round(lista1.votos/cocienteCF);
lista2.CF = Math.round(lista2.votos/cocienteCF);
lista3.CF = Math.round(lista3.votos/cocienteCF);
lista4.CF = Math.round(lista4.votos/cocienteCF);
lista5.CF = Math.round(lista5.votos/cocienteCF);
lista6.CF = Math.round(lista6.votos/cocienteCF);
lista7.CF = Math.round(lista7.votos/cocienteCF);
lista8.CF = Math.round(lista8.votos/cocienteCF);
lista9.CF = Math.round(lista9.votos/cocienteCF);
lista10.CF = Math.round(lista10.votos/cocienteCF);

let divEnunciado
let fichaListas

    switch(parseInt(cantidadListas)){
        case 2:
            divEnunciado = document.createElement("div");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = `<h2>Las elecciones las ganó: ${listaGanadora.candidato} (${listaGanadora.nombre})</h2>`; 
            pie.appendChild(divEnunciado);

            fichaListas = document.createElement("section");
            fichaListas.id = "fichaListas";
            fichaListas.className = "fichaListas";
            fichaListas.innerHTML = `<div class='divLista1' id='divLista1'>
                                        <h3>${listaGanadora.nombre}</h3>
                                        <h4>Votos: ${listaGanadora.votos}</h4>
                                        <h4>Porcentaje: ${listaGanadora.porcentaje}</h4>
                                    </div>
                                    <div class='divLista2' id='divLista2'>
                                        <h3>${lista2.nombre}</h3>
                                        <h4>Votos: ${lista2.votos}</h4>
                                        <h4>Porcentaje: ${lista2.porcentaje}</h4>
                                    </div>`;
            pie.appendChild(fichaListas);
        break;
        case 3:
            divEnunciado = document.createElement("section");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = `<h2>Las elecciones las ganó: ${listaGanadora.candidato} (${listaGanadora.nombre})</h2>`; 
            pie.appendChild(divEnunciado);

            fichaListas = document.createElement("div");
            fichaListas.id = "fichaListas";
            fichaListas.className = "fichaListas";
            fichaListas.innerHTML = `<div class='divLista1' id='divLista1'>
                                        <h3>${lista1.nombre}</h3>
                                        <h4>Votos: ${lista1.votos}</h4>
                                        <h4>Porcentaje: ${lista1.porcentaje}</h4>
                                    </div>
                                    <div class='divLista2' id='divLista2'>
                                        <h3>${lista2.nombre}</h3>
                                        <h4>Votos: ${lista2.votos}</h4>
                                        <h4>Porcentaje: ${lista2.porcentaje}</h4>
                                    </div>
                                    <div class='divLista3' id='divLista3'>
                                        <h3>${lista3.nombre}</h3>
                                        <h4>Votos: ${lista3.votos}</h4>
                                        <h4>Porcentaje: ${lista3.porcentaje}</h4>
                                    </div>`;
            pie.appendChild(fichaListas);
        break;
        case 4:
            divEnunciado = document.createElement("section");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = `<h2>Las elecciones las ganó: ${listaGanadora.candidato} (${listaGanadora.nombre})</h2>`; 
            pie.appendChild(divEnunciado);

            fichaListas = document.createElement("div");
            fichaListas.id = "fichaListas";
            fichaListas.className = "fichaListas";
            fichaListas.innerHTML = `<div class='divLista1' id='divLista1'>
                                        <h3>${lista1.nombre}</h3>
                                        <h4>Votos: ${lista1.votos}</h4>
                                        <h4>Porcentaje: ${lista1.porcentaje}</h4>
                                    </div>
                                    <div class='divLista2' id='divLista2'>
                                        <h3>${lista2.nombre}</h3>
                                        <h4>Votos: ${lista2.votos}</h4>
                                        <h4>Porcentaje: ${lista2.porcentaje}</h4>
                                    </div>
                                    <div class='divLista3' id='divLista3'>
                                        <h3>${lista3.nombre}</h3>
                                        <h4>Votos: ${lista3.votos}</h4>
                                        <h4>Porcentaje: ${lista3.porcentaje}</h4>
                                    </div>
                                    <div class='divLista4' id='divLista4'>
                                        <h3>${lista4.nombre}</h3>
                                        <h4>Votos: ${lista4.votos}</h4>
                                        <h4>Porcentaje: ${lista4.porcentaje}</h4>
                                    </div>`;
            pie.appendChild(fichaListas);
        break;
        case 5:
            divEnunciado = document.createElement("section");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = `<h2>Las elecciones las ganó: ${listaGanadora.candidato} (${listaGanadora.nombre})</h2>`; 
            pie.appendChild(divEnunciado);

            fichaListas = document.createElement("div");
            fichaListas.id = "fichaListas";
            fichaListas.className = "fichaListas";
            fichaListas.innerHTML = `<div class='divLista1' id='divLista1'>
                                        <h3>${lista1.nombre}</h3>
                                        <h4>Votos: ${lista1.votos}</h4>
                                        <h4>Porcentaje: ${lista1.porcentaje}</h4>
                                    </div>
                                    <div class='divLista2' id='divLista2'>
                                        <h3>${lista2.nombre}</h3>
                                        <h4>Votos: ${lista2.votos}</h4>
                                        <h4>Porcentaje: ${lista2.porcentaje}</h4>
                                    </div>
                                    <div class='divLista3' id='divLista3'>
                                        <h3>${lista3.nombre}</h3>
                                        <h4>Votos: ${lista3.votos}</h4>
                                        <h4>Porcentaje: ${lista3.porcentaje}</h4>
                                    </div>
                                    <div class='divLista4' id='divLista4'>
                                        <h3>${lista4.nombre}</h3>
                                        <h4>Votos: ${lista4.votos}</h4>
                                        <h4>Porcentaje: ${lista4.porcentaje}</h4>
                                    </div>
                                    <div class='divLista5' id='divLista5'>
                                        <h3>${lista5.nombre}</h3>
                                        <h4>Votos: ${lista5.votos}</h4>
                                        <h4>Porcentaje: ${lista5.porcentaje}</h4>
                                    </div>`;
            pie.appendChild(fichaListas);
        break;
        case 6:
            divEnunciado = document.createElement("section");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = `<h2>Las elecciones las ganó: ${listaGanadora.candidato} (${listaGanadora.nombre})</h2>`; 
            pie.appendChild(divEnunciado);

            fichaListas = document.createElement("div");
            fichaListas.id = "fichaListas";
            fichaListas.className = "fichaListas";
            fichaListas.innerHTML = `<div class='divLista1' id='divLista1'>
                                        <h3>${lista1.nombre}</h3>
                                        <h4>Votos: ${lista1.votos}</h4>
                                        <h4>Porcentaje: ${lista1.porcentaje}</h4>
                                    </div>
                                    <div class='divLista2' id='divLista2'>
                                        <h3>${lista2.nombre}</h3>
                                        <h4>Votos: ${lista2.votos}</h4>
                                        <h4>Porcentaje: ${lista2.porcentaje}</h4>
                                    </div>
                                    <div class='divLista3' id='divLista3'>
                                        <h3>${lista3.nombre}</h3>
                                        <h4>Votos: ${lista3.votos}</h4>
                                        <h4>Porcentaje: ${lista3.porcentaje}</h4>
                                    </div>
                                    <div class='divLista4' id='divLista4'>
                                        <h3>${lista4.nombre}</h3>
                                        <h4>Votos: ${lista4.votos}</h4>
                                        <h4>Porcentaje: ${lista4.porcentaje}</h4>
                                    </div>
                                    <div class='divLista5' id='divLista5'>
                                        <h3>${lista5.nombre}</h3>
                                        <h4>Votos: ${lista5.votos}</h4>
                                        <h4>Porcentaje: ${lista5.porcentaje}</h4>
                                    </div>
                                    <div class='divLista6' id='divLista6'>
                                        <h3>${lista6.nombre}</h3>
                                        <h4>${lista6.votos}</h4>
                                        <h4>${lista6.porcentaje}</h4>
                                    </div>`;
            pie.appendChild(fichaListas);
        break;
        case 7:
            divEnunciado = document.createElement("section");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = `<h2>Las elecciones las ganó: ${listaGanadora.candidato} (${listaGanadora.nombre})</h2>`; 
            pie.appendChild(divEnunciado);

            fichaListas = document.createElement("div");
            fichaListas.id = "fichaListas";
            fichaListas.className = "fichaListas";
            fichaListas.innerHTML = `<div class='divLista1' id='divLista1'>
                                        <h3>${lista1.nombre}</h3>
                                        <h4>Votos: ${lista1.votos}</h4>
                                        <h4>Porcentaje: ${lista1.porcentaje}</h4>
                                    </div>
                                    <div class='divLista2' id='divLista2'>
                                        <h3>${lista2.nombre}</h3>
                                        <h4>Votos: ${lista2.votos}</h4>
                                        <h4>Porcentaje: ${lista2.porcentaje}</h4>
                                    </div>
                                    <div class='divLista3' id='divLista3'>
                                        <h3>${lista3.nombre}</h3>
                                        <h4>Votos: ${lista3.votos}</h4>
                                        <h4>Porcentaje: ${lista3.porcentaje}</h4>
                                    </div>
                                    <div class='divLista4' id='divLista4'>
                                        <h3>${lista4.nombre}</h3>
                                        <h4>Votos: ${lista4.votos}</h4>
                                        <h4>Porcentaje: ${lista4.porcentaje}</h4>
                                    </div>
                                    <div class='divLista5' id='divLista5'>
                                        <h3>${lista5.nombre}</h3>
                                        <h4>Votos: ${lista5.votos}</h4>
                                        <h4>Porcentaje: ${lista5.porcentaje}</h4>
                                    </div>
                                    <div class='divLista6' id='divLista6'>
                                        <h3>${lista6.nombre}</h3>
                                        <h4>${lista6.votos}</h4>
                                        <h4>${lista6.porcentaje}</h4>
                                    </div>
                                    <div class='divLista7' id='divLista7'>
                                        <h3>${lista7.nombre}</h3>
                                        <h4>Votos: ${lista7.votos}</h4>
                                        <h4>Porcentaje: ${lista7.porcentaje}</h4>
                                    </div>`;
            pie.appendChild(fichaListas);
        break;
        case 8:
            divEnunciado = document.createElement("section");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = `<h2>Las elecciones las ganó: ${listaGanadora.candidato} (${listaGanadora.nombre})</h2>`; 
            pie.appendChild(divEnunciado);

            fichaListas = document.createElement("div");
            fichaListas.id = "fichaListas";
            fichaListas.className = "fichaListas";
            fichaListas.innerHTML = `<div class='divLista1' id='divLista1'>
                                        <h3>${lista1.nombre}</h3>
                                        <h4>Votos: ${lista1.votos}</h4>
                                        <h4>Porcentaje: ${lista1.porcentaje}</h4>
                                    </div>
                                    <div class='divLista2' id='divLista2'>
                                        <h3>${lista2.nombre}</h3>
                                        <h4>Votos: ${lista2.votos}</h4>
                                        <h4>Porcentaje: ${lista2.porcentaje}</h4>
                                    </div>
                                    <div class='divLista3' id='divLista3'>
                                        <h3>${lista3.nombre}</h3>
                                        <h4>Votos: ${lista3.votos}</h4>
                                        <h4>Porcentaje: ${lista3.porcentaje}</h4>
                                    </div>
                                    <div class='divLista4' id='divLista4'>
                                        <h3>${lista4.nombre}</h3>
                                        <h4>Votos: ${lista4.votos}</h4>
                                        <h4>Porcentaje: ${lista4.porcentaje}</h4>
                                    </div>
                                    <div class='divLista5' id='divLista5'>
                                        <h3>${lista5.nombre}</h3>
                                        <h4>Votos: ${lista5.votos}</h4>
                                        <h4>Porcentaje: ${lista5.porcentaje}</h4>
                                    </div>
                                    <div class='divLista6' id='divLista6'>
                                        <h3>${lista6.nombre}</h3>
                                        <h4>${lista6.votos}</h4>
                                        <h4>${lista6.porcentaje}</h4>
                                    </div>
                                    <div class='divLista7' id='divLista7'>
                                        <h3>${lista7.nombre}</h3>
                                        <h4>Votos: ${lista7.votos}</h4>
                                        <h4>Porcentaje: ${lista7.porcentaje}</h4>
                                    </div>
                                    <div class='divLista8' id='divLista8'>
                                        <h3>${lista8.nombre}</h3>
                                        <h4>Votos: ${lista8.votos}</h4>
                                        <h4>Porcentaje: ${lista8.porcentaje}</h4>
                                    </div>`;
            pie.appendChild(fichaListas);
        break;
        case 9:
            divEnunciado = document.createElement("section");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = `<h2>Las elecciones las ganó: ${listaGanadora.candidato} (${listaGanadora.nombre})</h2>`; 
            pie.appendChild(divEnunciado);

            fichaListas = document.createElement("div");
            fichaListas.id = "fichaListas";
            fichaListas.className = "fichaListas";
            fichaListas.innerHTML = `<div class='divLista1' id='divLista1'>
                                        <h3>${lista1.nombre}</h3>
                                        <h4>Votos: ${lista1.votos}</h4>
                                        <h4>Porcentaje: ${lista1.porcentaje}</h4>
                                    </div>
                                    <div class='divLista2' id='divLista2'>
                                        <h3>${lista2.nombre}</h3>
                                        <h4>Votos: ${lista2.votos}</h4>
                                        <h4>Porcentaje: ${lista2.porcentaje}</h4>
                                    </div>
                                    <div class='divLista3' id='divLista3'>
                                        <h3>${lista3.nombre}</h3>
                                        <h4>Votos: ${lista3.votos}</h4>
                                        <h4>Porcentaje: ${lista3.porcentaje}</h4>
                                    </div>
                                    <div class='divLista4' id='divLista4'>
                                        <h3>${lista4.nombre}</h3>
                                        <h4>Votos: ${lista4.votos}</h4>
                                        <h4>Porcentaje: ${lista4.porcentaje}</h4>
                                    </div>
                                    <div class='divLista5' id='divLista5'>
                                        <h3>${lista5.nombre}</h3>
                                        <h4>Votos: ${lista5.votos}</h4>
                                        <h4>Porcentaje: ${lista5.porcentaje}</h4>
                                    </div>
                                    <div class='divLista6' id='divLista6'>
                                        <h3>${lista6.nombre}</h3>
                                        <h4>${lista6.votos}</h4>
                                        <h4>${lista6.porcentaje}</h4>
                                    </div>
                                    <div class='divLista7' id='divLista7'>
                                        <h3>${lista7.nombre}</h3>
                                        <h4>Votos: ${lista7.votos}</h4>
                                        <h4>Porcentaje: ${lista7.porcentaje}</h4>
                                    </div>
                                    <div class='divLista8' id='divLista8'>
                                        <h3>${lista8.nombre}</h3>
                                        <h4>Votos: ${lista8.votos}</h4>
                                        <h4>Porcentaje: ${lista8.porcentaje}</h4>
                                    </div>
                                    <div class='divLista9' id='divLista9'>
                                        <h3>${lista9.nombre}</h3>
                                        <h4>Votos: ${lista9.votos}</h4>
                                        <h4>Porcentaje: ${lista9.porcentaje}</h4>
                                    </div>`;
            pie.appendChild(fichaListas);
        break;
        case 10:
            divEnunciado = document.createElement("section");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = `<h2>Las elecciones las ganó: ${listaGanadora.candidato} (${listaGanadora.nombre})</h2>`; 
            pie.appendChild(divEnunciado);

            fichaListas = document.createElement("div");
            fichaListas.id = "fichaListas";
            fichaListas.className = "fichaListas";
            fichaListas.innerHTML = `<div class='divLista1' id='divLista1'>
                                        <h3>${lista1.nombre}</h3>
                                        <h4>Votos: ${lista1.votos}</h4>
                                        <h4>Porcentaje: ${lista1.porcentaje}</h4>
                                    </div>
                                    <div class='divLista2' id='divLista2'>
                                        <h3>${lista2.nombre}</h3>
                                        <h4>Votos: ${lista2.votos}</h4>
                                        <h4>Porcentaje: ${lista2.porcentaje}</h4>
                                    </div>
                                    <div class='divLista3' id='divLista3'>
                                        <h3>${lista3.nombre}</h3>
                                        <h4>Votos: ${lista3.votos}</h4>
                                        <h4>Porcentaje: ${lista3.porcentaje}</h4>
                                    </div>
                                    <div class='divLista4' id='divLista4'>
                                        <h3>${lista4.nombre}</h3>
                                        <h4>Votos: ${lista4.votos}</h4>
                                        <h4>Porcentaje: ${lista4.porcentaje}</h4>
                                    </div>
                                    <div class='divLista5' id='divLista5'>
                                        <h3>${lista5.nombre}</h3>
                                        <h4>Votos: ${lista5.votos}</h4>
                                        <h4>Porcentaje: ${lista5.porcentaje}</h4>
                                    </div>
                                    <div class='divLista6' id='divLista6'>
                                        <h3>${lista6.nombre}</h3>
                                        <h4>${lista6.votos}</h4>
                                        <h4>${lista6.porcentaje}</h4>
                                    </div>
                                    <div class='divLista7' id='divLista7'>
                                        <h3>${lista7.nombre}</h3>
                                        <h4>Votos: ${lista7.votos}</h4>
                                        <h4>Porcentaje: ${lista7.porcentaje}</h4>
                                    </div>
                                    <div class='divLista8' id='divLista8'>
                                        <h3>${lista8.nombre}</h3>
                                        <h4>Votos: ${lista8.votos}</h4>
                                        <h4>Porcentaje: ${lista8.porcentaje}</h4>
                                    </div>
                                    <div class='divLista9' id='divLista9'>
                                        <h3>${lista9.nombre}</h3>
                                        <h4>Votos: ${lista9.votos}</h4>
                                        <h4>Porcentaje: ${lista9.porcentaje}</h4>
                                    </div>
                                    <div class='divLista10' id='divLista10'>
                                        <h3>${lista10.nombre}</h3>
                                        <h4>Votos: ${lista10.votos}</h4>
                                        <h4>Porcentaje: ${lista10.porcentaje}</h4>
                                    </div>`;
            pie.appendChild(fichaListas);
        break;
    }



const textoGanador = document.createElement("div");
textoGanador.id = "textoGanador";
textoGanador.innerHTML = `<p>El candidato <strong>${listaGanadora.candidato}</strong> de la agrupación <strong>${listaGanadora.nombre}</strong> gano las elecciones con ${listaGanadora.votos} votos.</p>`
pie.appendChild(textoGanador);



const mayoria = document.createElement("div");
mayoria.id = "mayoria";
mayoria.innerHTML = `<p>La mayoría obtuvo un ${porcentajeMayoria} porciento</p>`;
pie.appendChild(mayoria);



const minoria = document.createElement("div");
minoria.id = "minoria";
minoria.innerHTML = `<p>La minoría obtuvo un total de ${votosMinoria} votos que equivalen al ${porcentajeMinoria} porciento.</p>`;
pie.appendChild(minoria);

const btnTabla = document.createElement("button");
btnTabla.id = "btnTabla";
btnTabla.className = "boton";
btnTabla.innerText = "Ver cargos";
btnTabla.addEventListener('click', verCargos)
pie.appendChild(btnTabla);

const lineaHorizontal1 = document.createElement("hr");
pie.appendChild(lineaHorizontal1);
};

function verCargos(){
//Crea título ASAMBLEÍSTAS
const tituloAsambleista = document.createElement("h1");
tituloAsambleista.innerText = "Asambleístas";
pie.appendChild(tituloAsambleista);

//Crea tabla para asambleístas
const divGrafica = document.createElement("div");
divGrafica.className = "containerGrafica";
divGrafica.innerHTML = "<div class='as1 asambleista'><h2>1</h2></div><div class='as2 asambleista'><h2>2</h2></div><div class='as3 asambleista'><h2>3</h2></div><div class='as4 asambleista'><h2>4</h2></div><div class='as5 asambleista'><h2>5</h2></div><div class='as6 asambleista'><h2>6</h2></div><div class='as7 asambleista'><h2>7</h2></div><div class='as8 asambleista'><h2>8</h2></div><div class='as9 asambleista'><h2>9</h2></div><div class='as10 asambleista'><h2>10</h2></div><div class='as11 asambleista'><h2>11</h2></div><div class='as12 asambleista'><h2>12</h2></div><div class='as13 asambleista'><h2>13</h2></div><div class='as14 asambleista'><h2>14</h2></div><div class='as15 asambleista'><h2>15</h2></div><div class='as16 asambleista'><h2>16</h2></div><div class='as17 asambleista'><h2>17</h2></div><div class='as18 asambleista'><h2>18</h2></div><div class='as19 asambleista'><h2>19</h2></div><div class='as20 asambleista'><h2>20</h2></div><div class='as21 asambleista'><h2>21</h2></div><div class='as22 asambleista'><h2>22</h2></div><div class='as23 asambleista'><h2>23</h2></div><div class='as24 asambleista'><h2>24</h2></div><div class='as25 asambleista'><h2>25</h2></div><div class='as26 asambleista'><h2>26</h2></div><div class='as27 asambleista'><h2>27</h2></div><div class='as28 asambleista'><h2>28</h2></div><div class='as29 asambleista'><h2>29</h2></div><div class='as30 asambleista'><h2>30</h2></div><div class='as31 asambleista'><h2>31</h2></div><div class='as32 asambleista'><h2>32</h2></div><div class='as33 asambleista'><h2>33</h2></div><div class='as34 asambleista'><h2>34</h2></div><div class='as35 asambleista'><h2>35</h2></div><div class='as36 asambleista'><h2>36</h2></div><div class='as37 asambleista'><h2>37</h2></div><div class='as38 asambleista'><h2>38</h2></div><div class='as39 asambleista'><h2>39</h2></div><div class='as40 asambleista'><h2>40</h2></div><div class='as41 asambleista'><h2>41</h2></div><div class='as42 asambleista'><h2>42</h2></div><div class='as43 asambleista'><h2>43</h2></div><div class='as44 asambleista'><h2>44</h2></div><div class='as45 asambleista'><h2>45</h2></div><div class='as46 asambleista'><h2>46</h2></div><div class='as47 asambleista'><h2>47</h2></div><div class='as48 asambleista'><h2>48</h2></div><div class='as49 asambleista'><h2>49</h2></div><div class='as50 asambleista'><h2>50</h2></div><div class='as51 asambleista'><h2>51</h2></div><div class='as52 asambleista'><h2>52</h2></div><div class='as53 asambleista'><h2>53</h2></div><div class='as54 asambleista'><h2>54</h2></div><div class='as55 asambleista'><h2>55</h2></div><div class='as56 asambleista'><h2>56</h2></div><div class='as57 asambleista'><h2>57</h2></div><div class='as58 asambleista'><h2>58</h2></div><div class='as59 asambleista'><h2>59</h2></div><div class='as60 asambleista'><h2>60</h2></div><div class='as61 asambleista'><h2>61</h2></div><div class='as62 asambleista'><h2>62</h2></div><div class='as63 asambleista'><h2>63</h2></div><div class='as64 asambleista'><h2>64</h2></div><div class='as65 asambleista'><h2>65</h2></div><div class='as66 asambleista'><h2>66</h2></div><div class='as67 asambleista'><h2>67</h2></div><div class='as68 asambleista'><h2>68</h2></div><div class='as69 asambleista'><h2>69</h2></div><div class='as70 asambleista'><h2>70</h2></div><div class='as71 asambleista'><h2>71</h2></div><div class='as72 asambleista'><h2>72</h2></div><div class='as73 asambleista'><h2>73</h2></div><div class='as74 asambleista'><h2>74</h2></div><div class='as75 asambleista'><h2>75</h2></div><div class='as76 asambleista'><h2>76</h2></div><div class='as77 asambleista'><h2>77</h2></div><div class='as78 asambleista'><h2>78</h2></div><div class='as79 asambleista'><h2>79</h2></div><div class='as80 asambleista'><h2>80</h2></div><div class='as81 asambleista'><h2>81</h2></div><div class='as82 asambleista'><h2>82</h2></div><div class='as83 asambleista'><h2>83</h2></div><div class='as84 asambleista'><h2>84</h2></div><div class='as85 asambleista'><h2>85</h2></div><div class='as86 asambleista'><h2>86</h2></div><div class='as87 asambleista'><h2>87</h2></div><div class='as88 asambleista'><h2>88</h2></div><div class='as89 asambleista'><h2>89</h2></div><div class='as90 asambleista'><h2>90</h2></div>";
pie.appendChild(divGrafica);

//Crea linea divisoria
const lineaHorizontal2 = document.createElement("hr");
pie.appendChild(lineaHorizontal2);

//Crea título COMISIÓN DIRECTIVA
const tituloCD = document.createElement("h1");
tituloCD.innerText = "Comisión Directiva";
pie.appendChild(tituloCD);

//Crea tabla Comisión Directiva
const divCD = document.createElement("div");
divCD.className = "containerCD";
divCD.innerHTML = "<div class='cd1 directivo'><h2>1</h2></div><div class='cd2 directivo'><h2>2</h2></div><div class='cd3 directivo'><h2>3</h2></div><div class='cd4 directivo'><h2>4</h2></div><div class='cd5 directivo'><h2>5</h2></div><div class='cd6 directivo'><h2>6</h2></div><div class='cd7 directivo'><h2>7</h2></div><div class='cd8 directivo'><h2>8</h2></div><div class='cd9 directivo'><h2>9</h2></div><div class='cd10 directivo'><h2>10</h2></div><div class='cd11 directivo'><h2>11</h2></div><div class='cd12 directivo'><h2>12</h2></div><div class='cd13 directivo'><h2>13</h2></div><div class='cd14 directivo'><h2>14</h2></div><div class='cd15 directivo'><h2>15</h2></div><div class='cd16 directivo'><h2>16</h2></div><div class='cd17 directivo'><h2>17</h2></div><div class='cd18 directivo'><h2>18</h2></div><div class='cd19 directivo'><h2>19</h2></div><div class='cd20 directivo'><h2>20</h2></div>";
pie.appendChild(divCD);

//Crea linea divisoria
const lineaHorizontal3 = document.createElement("hr");
pie.appendChild(lineaHorizontal3);

//Crea título COMISIÓN FISCALIZADORA
const tituloCF = document.createElement("h1");
tituloCF.innerText = "Comisión Fiscalizadora";
pie.appendChild(tituloCF);

//Crea tabla Comisión Fiscalizadora
const divCF = document.createElement("div");
divCF.className = "gridCF";
divCF.innerHTML = "<div class='cf1 fiscalizador'><h2>1</h2></div><div class='cf2 fiscalizador'><h2>2</h2></div><div class='cf3 fiscalizador'><h2>3</h2></div><div class='cf4 fiscalizador'><h2>4</h2></div><div class='cf5 fiscalizador'><h2>5</h2></div><div class='cf6 fiscalizador'><h2>6</h2></div><div class='cf7 fiscalizador'><h2>7</h2></div>";
pie.appendChild(divCF);



//Bucle para pintar los divs según resultado de las elecciones.
let asambleista = document.getElementsByClassName("asambleista");
let numeroAR = lista1.AR-1;
let directivo = document.getElementsByClassName("directivo");
let numeroCD = lista1.CD-1;
let fiscalizador = document.getElementsByClassName("fiscalizador");
let numeroCF = lista1.CF-1;


for(let i = 0; i<=numeroAR;i++){
    let clasesActuales = asambleista[i].getAttribute('class');
    asambleista[i].setAttribute('class', `${clasesActuales} fondoVerde`);
    };

for(let i = 0; i<=numeroCD; i++){
    let clasesActuales = directivo[i].getAttribute('class');
    directivo[i].setAttribute('class', `${clasesActuales} fondoVerde`);
};

for(let i = 0; i<=numeroCF; i++){
    let clasesActuales = fiscalizador[i].getAttribute('class');
    fiscalizador[i].setAttribute('class', `${clasesActuales} fondoVerde`);
};
};