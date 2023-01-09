/*MAIPULAR DATAS EM JAVASCRIPT*/
let data = new Date();
document.getElementById("data_completa").innerHTML = data;

let dia = data.getDay();
const dias = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
diaDeHoje = dias[dia];
document.getElementById("dia").innerHTML = diaDeHoje;

let mes = data.getMonth();
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", 
    "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
mesAtual = meses[mes];
document.getElementById("mes").innerHTML = mesAtual

let ano =  data.getFullYear();
document.getElementById("ano").innerHTML = ano;

let hora = data.getHours();
document.getElementById("hr").innerHTML = hora;

let minuto = data.getMinutes();
document.getElementById("mn").innerHTML = minuto;

let segundo = data.getSeconds();
document.getElementById("ss").innerHTML = segundo;

let dataBR = new Date().toLocaleString("pt-br", {dateStyle: "short"})
document.getElementById("dataBR").innerHTML = dataBR;

let horaBr = new Date().toLocaleString("pt-br", {timeStyle:"medium"})
document.getElementById("horaBR").innerHTML = horaBr;

// COMPARAR DATAS
var hoje = new Date();
var vencimento = new Date(2022, 11, 31);
if(hoje > vencimento){ //OBJETOS DATE COMPARADOS PELO OPERADOR '>'
    console.log("Conta vencida!");
}else{
    console.log("Dentro do prazo!");
}

// DIFERENÇA DE DIAS ENTRE DATAS
var dataInicial = new Date();
var dataFinal = new Date(2022, 11, 31);//(ANO, MÊS, DIA)

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
//getTime() converte para milisegundos e calcular a diferença
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
// diferencaTempo / (24 * 60 * 60 * 1000): fórmula converte milisegundos para dias
//Math.ceil() arredonda
console.log(diferencaDias)
