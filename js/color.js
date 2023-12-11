const btnFondo = document.getElementById("btnColor");
const btnEnviar = document.getElementById("btn");
const btnResetear = document.getElementById("btnReset");
const btnConsulta = document.getElementById("btnConsulta");
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");

    btnFondo.addEventListener("click", ()=>{
        document.body.classList.toggle("red");
        if(document.body.classList.contains("red")){
            localStorage.setItem("modo", "red");
            btnFondo.innerText = "Azul";
            btnFondo.style.backgroundColor = "#263d54";
            btnEnviar.style.backgroundColor = "#263d54";
            btnResetear.style.backgroundColor = "#263d54";
            btnConsulta.style.backgroundColor = "#263d54";
            // span1.style.backgroundColor = "#263d54";
            // span2.style.backgroundColor = "#263d54";
            // span3.style.backgroundColor = "#263d54";
        } else {
            localStorage.setItem("modo", "blue");
            btnFondo.innerText = "Rojo";
            btnFondo.style.backgroundColor = "#bf1b27";
            btnEnviar.style.backgroundColor = "#bf1b27";
            btnResetear.style.backgroundColor = "#bf1b27";
            btnConsulta.style.backgroundColor = "#bf1b27";
            // span1.style.backgroundColor = "#bf1b27";
            // span2.style.backgroundColor = "#bf1b27";
            // span3.style.backgroundColor = "#bf1b27";
        }
    });

    const modo = localStorage.getItem ("modo");
    if (modo === "red"){
        document.body.classList.add("red");
    } else {
        document.body.classList.remove("red");
    }
