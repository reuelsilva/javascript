
const carro = {
    marca:"Fiat", 
    modelo:"Uno", 
    ano:2001
};

document.getElementById("p1").innerHTML = carro;

let texto = JSON.stringify(carro);
document.getElementById("p2").innerHTML = texto;

let objeto = JSON.parse(texto);
document.getElementById("p3").innerHTML = objeto.modelo;