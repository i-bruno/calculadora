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

// function verCargos(){
// //Crea título ASAMBLEÍSTAS
// const tituloAsambleista = document.createElement("h1");
// tituloAsambleista.innerText = "Asambleístas";
// pie.appendChild(tituloAsambleista);

// //Crea tabla para asambleístas
// const divGrafica = document.createElement("div");
// divGrafica.className = "containerGrafica";
divGrafica.innerHTML = "<div class='as1 asambleista'><h2>1</h2></div><div class='as2 asambleista'><h2>2</h2></div><div class='as3 asambleista'><h2>3</h2></div><div class='as4 asambleista'><h2>4</h2></div><div class='as5 asambleista'><h2>5</h2></div><div class='as6 asambleista'><h2>6</h2></div><div class='as7 asambleista'><h2>7</h2></div><div class='as8 asambleista'><h2>8</h2></div><div class='as9 asambleista'><h2>9</h2></div><div class='as10 asambleista'><h2>10</h2></div><div class='as11 asambleista'><h2>11</h2></div><div class='as12 asambleista'><h2>12</h2></div><div class='as13 asambleista'><h2>13</h2></div><div class='as14 asambleista'><h2>14</h2></div><div class='as15 asambleista'><h2>15</h2></div><div class='as16 asambleista'><h2>16</h2></div><div class='as17 asambleista'><h2>17</h2></div><div class='as18 asambleista'><h2>18</h2></div><div class='as19 asambleista'><h2>19</h2></div><div class='as20 asambleista'><h2>20</h2></div><div class='as21 asambleista'><h2>21</h2></div><div class='as22 asambleista'><h2>22</h2></div><div class='as23 asambleista'><h2>23</h2></div><div class='as24 asambleista'><h2>24</h2></div><div class='as25 asambleista'><h2>25</h2></div><div class='as26 asambleista'><h2>26</h2></div><div class='as27 asambleista'><h2>27</h2></div><div class='as28 asambleista'><h2>28</h2></div><div class='as29 asambleista'><h2>29</h2></div><div class='as30 asambleista'><h2>30</h2></div><div class='as31 asambleista'><h2>31</h2></div><div class='as32 asambleista'><h2>32</h2></div><div class='as33 asambleista'><h2>33</h2></div><div class='as34 asambleista'><h2>34</h2></div><div class='as35 asambleista'><h2>35</h2></div><div class='as36 asambleista'><h2>36</h2></div><div class='as37 asambleista'><h2>37</h2></div><div class='as38 asambleista'><h2>38</h2></div><div class='as39 asambleista'><h2>39</h2></div><div class='as40 asambleista'><h2>40</h2></div><div class='as41 asambleista'><h2>41</h2></div><div class='as42 asambleista'><h2>42</h2></div><div class='as43 asambleista'><h2>43</h2></div><div class='as44 asambleista'><h2>44</h2></div><div class='as45 asambleista'><h2>45</h2></div><div class='as46 asambleista'><h2>46</h2></div><div class='as47 asambleista'><h2>47</h2></div><div class='as48 asambleista'><h2>48</h2></div><div class='as49 asambleista'><h2>49</h2></div><div class='as50 asambleista'><h2>50</h2></div><div class='as51 asambleista'><h2>51</h2></div><div class='as52 asambleista'><h2>52</h2></div><div class='as53 asambleista'><h2>53</h2></div><div class='as54 asambleista'><h2>54</h2></div><div class='as55 asambleista'><h2>55</h2></div><div class='as56 asambleista'><h2>56</h2></div><div class='as57 asambleista'><h2>57</h2></div><div class='as58 asambleista'><h2>58</h2></div><div class='as59 asambleista'><h2>59</h2></div><div class='as60 asambleista'><h2>60</h2></div><div class='as61 asambleista'><h2>61</h2></div><div class='as62 asambleista'><h2>62</h2></div><div class='as63 asambleista'><h2>63</h2></div><div class='as64 asambleista'><h2>64</h2></div><div class='as65 asambleista'><h2>65</h2></div><div class='as66 asambleista'><h2>66</h2></div><div class='as67 asambleista'><h2>67</h2></div><div class='as68 asambleista'><h2>68</h2></div><div class='as69 asambleista'><h2>69</h2></div><div class='as70 asambleista'><h2>70</h2></div><div class='as71 asambleista'><h2>71</h2></div><div class='as72 asambleista'><h2>72</h2></div><div class='as73 asambleista'><h2>73</h2></div><div class='as74 asambleista'><h2>74</h2></div><div class='as75 asambleista'><h2>75</h2></div><div class='as76 asambleista'><h2>76</h2></div><div class='as77 asambleista'><h2>77</h2></div><div class='as78 asambleista'><h2>78</h2></div><div class='as79 asambleista'><h2>79</h2></div><div class='as80 asambleista'><h2>80</h2></div><div class='as81 asambleista'><h2>81</h2></div><div class='as82 asambleista'><h2>82</h2></div><div class='as83 asambleista'><h2>83</h2></div><div class='as84 asambleista'><h2>84</h2></div><div class='as85 asambleista'><h2>85</h2></div><div class='as86 asambleista'><h2>86</h2></div><div class='as87 asambleista'><h2>87</h2></div><div class='as88 asambleista'><h2>88</h2></div><div class='as89 asambleista'><h2>89</h2></div><div class='as90 asambleista'><h2>90</h2></div>";
// pie.appendChild(divGrafica);

// //Crea linea divisoria
// const lineaHorizontal2 = document.createElement("hr");
// pie.appendChild(lineaHorizontal2);

// //Crea título COMISIÓN DIRECTIVA
// const tituloCD = document.createElement("h1");
// tituloCD.innerText = "Comisión Directiva";
// pie.appendChild(tituloCD);

// //Crea tabla Comisión Directiva
// const divCD = document.createElement("div");
// divCD.className = "containerCD";
// divCD.innerHTML = "<div class='cd1 directivo'><h2>1</h2></div><div class='cd2 directivo'><h2>2</h2></div><div class='cd3 directivo'><h2>3</h2></div><div class='cd4 directivo'><h2>4</h2></div><div class='cd5 directivo'><h2>5</h2></div><div class='cd6 directivo'><h2>6</h2></div><div class='cd7 directivo'><h2>7</h2></div><div class='cd8 directivo'><h2>8</h2></div><div class='cd9 directivo'><h2>9</h2></div><div class='cd10 directivo'><h2>10</h2></div><div class='cd11 directivo'><h2>11</h2></div><div class='cd12 directivo'><h2>12</h2></div><div class='cd13 directivo'><h2>13</h2></div><div class='cd14 directivo'><h2>14</h2></div><div class='cd15 directivo'><h2>15</h2></div><div class='cd16 directivo'><h2>16</h2></div><div class='cd17 directivo'><h2>17</h2></div><div class='cd18 directivo'><h2>18</h2></div><div class='cd19 directivo'><h2>19</h2></div><div class='cd20 directivo'><h2>20</h2></div>";
// pie.appendChild(divCD);

// //Crea linea divisoria
// const lineaHorizontal3 = document.createElement("hr");
// pie.appendChild(lineaHorizontal3);

// //Crea título COMISIÓN FISCALIZADORA
// const tituloCF = document.createElement("h1");
// tituloCF.innerText = "Comisión Fiscalizadora";
// pie.appendChild(tituloCF);

// //Crea tabla Comisión Fiscalizadora
// const divCF = document.createElement("div");
// divCF.className = "gridCF";
// divCF.innerHTML = "<div class='cf1 fiscalizador'><h2>1</h2></div><div class='cf2 fiscalizador'><h2>2</h2></div><div class='cf3 fiscalizador'><h2>3</h2></div><div class='cf4 fiscalizador'><h2>4</h2></div><div class='cf5 fiscalizador'><h2>5</h2></div><div class='cf6 fiscalizador'><h2>6</h2></div><div class='cf7 fiscalizador'><h2>7</h2></div>";
// pie.appendChild(divCF);



// //Bucle para pintar los divs según resultado de las elecciones.
// let asambleista = document.getElementsByClassName("asambleista");
// let numeroAR = lista1.AR-1;
// let directivo = document.getElementsByClassName("directivo");
// let numeroCD = lista1.CD-1;
// let fiscalizador = document.getElementsByClassName("fiscalizador");
// let numeroCF = lista1.CF-1;


// //Cargos para la lista ganadora
// for(let i = 0; i<=numeroAR;i++){
//     let clasesActuales = asambleista[i].getAttribute('class');
//     asambleista[i].setAttribute('class', `${clasesActuales} fondoVerde`);
//     };

// for(let i = 0; i<=numeroCD; i++){
//     let clasesActuales = directivo[i].getAttribute('class');
//     directivo[i].setAttribute('class', `${clasesActuales} fondoVerde`);
// };

// for(let i = 0; i<=numeroCF; i++){
//     let clasesActuales = fiscalizador[i].getAttribute('class');
//     fiscalizador[i].setAttribute('class', `${clasesActuales} fondoVerde`);
// };
// };