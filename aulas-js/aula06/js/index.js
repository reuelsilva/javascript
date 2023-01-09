/*
//DECLARAÇÃO DE VARIÁVEIS
var a, b, c;
//ATRIBUIÇÃO
a = 3;
b = 2;
c = a + b;

alert(c);
*/

/*
//DECLARAÇÃO DE VARIÁVEIS
var nome, sobrenome, nomeCompleto;
//ATRIBUIÇÃO
nome = "Reuel";
sobrenome = "Silva dos Santos";
nomeCompleto = nome + " " + sobrenome;

document.getElementById("texto").innerHTML = nomeCompleto;
*/

let num = 10; 

{
    let num = 5; //NESSE ESCOPO NUM VALE 5
    //REDECLARAÇÃO DENTRO DESSE ESCOPO NÃO ALTERA FORA DELE
}

alert(num); //NESSE ESCOPO NUM CONTINUA VALENDO 10
