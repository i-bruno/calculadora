function colorTablaAR(mayoria) {
    const divTabla = document.getElementsByClassName('asambleista');

    for(let i=0; i == mayoria; i++ ){
        divTabla.className = "fondoVerde";
    }
}

colorTablaAR(miembrosMayoriaAR);