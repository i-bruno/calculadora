const btnFondo = document.getElementById("btnColor");
const btnEnviar = document.getElementById("btn");
const btnResetear = document.getElementById("btnReset");
const btnConsulta = document.getElementById("btnConsulta");
const spanA = document.getElementById("span1");
const spanB = document.getElementById("span2");
const spanC = document.getElementById("span3");
const botonMenu1 = document.getElementById("boton1Menu");
const botonMenu2 = document.getElementById("boton2Menu");
const botonMenu3 = document.getElementById("boton3Menu");
const botonMenu4 = document.getElementById("boton4Menu");

    btnFondo.addEventListener("click", ()=>{
        document.body.classList.toggle("red");
        if(document.body.classList.contains("red")){
            localStorage.setItem("modo", "red");
            btnFondo.innerText = "Azul";
            btnFondo.style.backgroundColor = "#263d54";
            btnEnviar.style.backgroundColor = "#263d54";
            btnResetear.style.backgroundColor = "#263d54";
            btnConsulta.style.backgroundColor = "#263d54";
            spanA.style.backgroundColor = "#263d54";
            spanB.style.backgroundColor = "#263d54";
            spanC.style.backgroundColor = "#263d54";
            botonMenu1.style.backgroundColor = "#263d54";
            botonMenu2.style.backgroundColor = "#263d54";
            botonMenu3.style.backgroundColor = "#263d54";
            botonMenu4.style.backgroundColor = "#263d54";
        } else {
            localStorage.setItem("modo", "blue");
            btnFondo.innerText = "Rojo";
            btnFondo.style.backgroundColor = "#bf1b27";
            btnEnviar.style.backgroundColor = "#bf1b27";
            btnResetear.style.backgroundColor = "#bf1b27";
            btnConsulta.style.backgroundColor = "#bf1b27";
            spanA.style.backgroundColor = "#bf1b27";
            spanB.style.backgroundColor = "#bf1b27";
            spanC.style.backgroundColor = "#bf1b27";
            botonMenu1.style.backgroundColor = "#bf1b27";
            botonMenu2.style.backgroundColor = "#bf1b27";
            botonMenu3.style.backgroundColor = "#bf1b27";
            botonMenu4.style.backgroundColor = "#bf1b27";
        }
    });

    const modo = localStorage.getItem ("modo");
    if (modo === "red"){
        document.body.classList.add("red");
    } else {
        document.body.classList.remove("red");
    }
