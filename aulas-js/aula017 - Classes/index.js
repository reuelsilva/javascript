/*const carro = {
    //PROPRIEDADE: VALOR
    marca:"Fiat", 
    modelo:"Uno",
    ano:2001
}*/

//CRIANDO OBJETOS ATRAVÉS DE CLASSES
class Carro{
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }

    buzina(){ //MÉTODO DO OBJETO
        return this.modelo + " " + "buzinou: Biiiiiiii!";
    }
}

// CRIANDO OBJETOS
const uno = new Carro("Fiat", "Uno", 2001) //PARÂMETROS RECEBIDOS PELO CONSTRUTOR
const gol = new Carro("Volkswagen", "Gol", 2013)
console.log(uno);
console.log(gol);
console.log(uno.ano)