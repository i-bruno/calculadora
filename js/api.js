const apiRepo = "http://repositorio.archivocasla.com.ar/api/items";
const contenedorInfo = document.getElementById("contenedorInfo");

fetch(apiRepo)
    .then(respuesta => respuesta.json())
    .then((datos) =>{
        console.log(datos);
    })

    .catch(error => console.log(error));

    function mostrarInfo (datos){
        datos.forEach(info => {
            const inf = document.createElement("p");
        });
    };