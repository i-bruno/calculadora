const options = {
    method: 'GET',
    headers: {
        'key_archivocasla': 'b45c1bb6580d6623321f90a9e2e0c660ee8fd984'
    }
};

fetch("http://repositorio.archivocasla.com.ar/api/items", options)
    .then(res => res.json())
    .then(response =>{
        console.log(response)
    });