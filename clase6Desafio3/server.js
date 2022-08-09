const express = require('express');
const app = express();
const Contenedor = require('./Contenedor');
const objetos = new Contenedor('productos.txt');
console.log(objetos);
const server = app.listen(8080, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`));

app.get('/productos',async (req,res)=>{
    const allProducts = await objetos.getAll();
    //console.log(allProducts);
    res.send(allProducts);
})