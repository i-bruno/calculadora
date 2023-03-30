const apiArgentina = "https://restcountries.com/v3.1/name/argentina";

const contenedorTexto = document.getElementById("footer");

fetch(apiArgentina)
	.then((respuesta) => respuesta.json())
	.then((response) => {
		contenedorTexto.innerHTML = `<p>Hecho en Boedo - ${response[0].flag} - Argentina</p><p>Biblioteca Popular Sanlorencista Leónidas Barletta - Todos los derechos reservados ©`;
	})

	.catch((error) => console.log(error));
