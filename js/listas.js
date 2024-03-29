//Función que tiene por objetivo crear el formulario para que el usuario ingrese: nombre de agrupación, nombre del candidato y cantidad de votos que obtuvo.

function funListas() {
    //Variable que toma la cantidad de listas que se presentan a elecciones
    let cantidadListas = document.getElementById("numListas").value;

    //Variable creada para el mensaje que se establece para cuando no hay elecciones. (Porque solo se presenta una lista)
    let divMensaje

    //Variables para los inputs de las 10 listas posibles.
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

    let section = document.getElementById('seccionPrincipal');
    if (section.classList.contains('displayNone')){
        section.classList.remove('displayNone');
        section.classList.add('gridListas');
    } else {
        section.classList.remove('gridListas');
        section.classList.add('displayNone');
    }

    let contenedorGrid = document.querySelectorAll('.container');
    contenedorGrid.forEach(function(elemento){
        if (elemento.style.display === '' || elemento.style.display === 'grid'){
            elemento.style.display = 'grid';
        } else {
            elemento.style.display = 'none';
        }
    })


    //El switch arma la cantidad de inputs que se necesitan para que el usuario pueda ingresar los datos necesarios, según la cantidad de listas que se presentan a elecciones.

    switch (parseInt(cantidadListas)) {
        case 1:
            //Se incorpora un mensaje con SweetAlert, para el caso de que el usuario ponga una lista como opción.
            Swal.fire({
                title: 'No hay elecciones',
                text: "No se presentan listas a las elecciones",
                icon: 'warning',
                confirmButtonColor: '#bf1b27',
                confirmButtonText: 'Salir'
            })
            break;

        case 2:
            divMensaje = document.createElement("div");
            divMensaje.className = "divMensaje";
            divMensaje.id = "divMensaje";
            divMensaje.innerHTML = "<h3>Los datos se deben cargar de mayor a menor, siendo los primeros datos los de la lista ganadora.</h3>";
            infoPrincipal.appendChild(divMensaje);

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
            divMensaje = document.createElement("div");
            divMensaje.className = "divMensaje";
            divMensaje.id = "divMensaje";
            divMensaje.innerHTML = "<h3>Los datos se deben cargar de mayor a menor, siendo los primeros datos los de la lista ganadora.</h3>";
            infoPrincipal.appendChild(divMensaje);

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
            divMensaje = document.createElement("div");
            divMensaje.className = "divMensaje";
            divMensaje.id = "divMensaje";
            divMensaje.innerHTML = "<h3>Los datos se deben cargar de mayor a menor, siendo los primeros datos los de la lista ganadora.</h3>";
            infoPrincipal.appendChild(divMensaje);

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
            divMensaje = document.createElement("div");
            divMensaje.className = "divMensaje";
            divMensaje.id = "divMensaje";
            divMensaje.innerHTML = "<h3>Los datos se deben cargar de mayor a menor, siendo los primeros datos los de la lista ganadora.</h3>";
            infoPrincipal.appendChild(divMensaje);

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
            divMensaje = document.createElement("div");
            divMensaje.className = "divMensaje";
            divMensaje.id = "divMensaje";
            divMensaje.innerHTML = "<h3>Los datos se deben cargar de mayor a menor, siendo los primeros datos los de la lista ganadora.</h3>";
            infoPrincipal.appendChild(divMensaje);

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
            divMensaje = document.createElement("div");
            divMensaje.className = "divMensaje";
            divMensaje.id = "divMensaje";
            divMensaje.innerHTML = "<h3>Los datos se deben cargar de mayor a menor, siendo los primeros datos los de la lista ganadora.</h3>";
            infoPrincipal.appendChild(divMensaje);

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
            divMensaje = document.createElement("div");
            divMensaje.className = "divMensaje";
            divMensaje.id = "divMensaje";
            divMensaje.innerHTML = "<h3>Los datos se deben cargar de mayor a menor, siendo los primeros datos los de la lista ganadora.</h3>";
            infoPrincipal.appendChild(divMensaje);

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
            divMensaje = document.createElement("div");
            divMensaje.className = "divMensaje";
            divMensaje.id = "divMensaje";
            divMensaje.innerHTML = "<h3>Los datos se deben cargar de mayor a menor, siendo los primeros datos los de la lista ganadora.</h3>";
            infoPrincipal.appendChild(divMensaje);

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
            divMensaje = document.createElement("div");
            divMensaje.className = "divMensaje";
            divMensaje.id = "divMensaje";
            divMensaje.innerHTML = "<h3>Los datos se deben cargar de mayor a menor, siendo los primeros datos los de la lista ganadora.</h3>";
            infoPrincipal.appendChild(divMensaje);

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

        //Cuando se ingresa la opción de una decimo primer lista, el sistema avisa que no es posible.
        case 11:
            Swal.fire({
                title: 'Excede el límite',
                text: "La calculadora solo acepta por el momento diez listas",
                icon: 'warning',
                confirmButtonColor: '#bf1b27',
                confirmButtonText: 'Salir'
            })
            break;
    }
};
