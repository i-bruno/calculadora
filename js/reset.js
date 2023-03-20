function reset(){
    let cantidadListas = document.getElementById("numListas").value;

    let divListaA = document.getElementById("listaA");
    let divListaB = document.getElementById("listaB");
    let divListaC = document.getElementById("listaC");
    let divListaD = document.getElementById("listaD");
    let divListaE = document.getElementById("listaE");
    let divListaF = document.getElementById("listaF");
    let divListaG = document.getElementById("listaG");
    let divListaH = document.getElementById("listaH");
    let divListaI = document.getElementById("listaI");
    let divListaJ = document.getElementById("listaJ");
    let divMensaje = document.getElementById("divMensaje");
    let divEnunciado = document.getElementById("divEnunciado");
    let textoGanador = document.getElementById("textoGanador");
    let mayoria = document.getElementById("mayoria");
    let minoria = document.getElementById("minoria");

    switch(parseInt(cantidadListas)){
        case 1:
            divMensaje.remove();
        break;

        case 2:
            divListaA.remove();
            divListaB.remove();
            fichaListas.remove();
        break;

        case 3:
            divListaA.remove();
            divListaB.remove();
            divListaC.remove();
        break;

        case 4:
            divListaA.remove();
            divListaB.remove();
            divListaC.remove();
            divListaD.remove();
        break;

        case 5:
            divListaA.remove();
            divListaB.remove();
            divListaC.remove();
            divListaD.remove();
            divListaE.remove();
        break;

        case 6:
            divListaA.remove();
            divListaB.remove();
            divListaC.remove();
            divListaD.remove();
            divListaE.remove();
            divListaF.remove();
        break;

        case 7:
            divListaA.remove();
            divListaB.remove();
            divListaC.remove();
            divListaD.remove();
            divListaE.remove();
            divListaF.remove();
            divListaG.remove();
        break;

        case 8:
            divListaA.remove();
            divListaB.remove();
            divListaC.remove();
            divListaD.remove();
            divListaE.remove();
            divListaF.remove();
            divListaG.remove();
            divListaH.remove();
        break;

        case 9:
            divListaA.remove();
            divListaB.remove();
            divListaC.remove();
            divListaD.remove();
            divListaE.remove();
            divListaF.remove();
            divListaG.remove();
            divListaH.remove();
            divListaI.remove();
        break;

        case 10:
            divListaA.remove();
            divListaB.remove();
            divListaC.remove();
            divListaD.remove();
            divListaE.remove();
            divListaF.remove();
            divListaG.remove();
            divListaH.remove();
            divListaI.remove();
            divListaJ.remove();
        break;
    }

divEnunciado.remove();
textoGanador.remove();
mayoria.remove();
minoria.remove();
fichaListas.remove();
}