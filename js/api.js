fetch("http://repositorio.archivocasla.com.ar/api?keyapi=b45c1bb6580d6623321f90a9e2e0c660ee8fd984", options)
    .then(res => res.json())
    .then(response =>{
        console.log(response)
    });