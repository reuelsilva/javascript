let hora = new Date().getHours();

if(hora > 4 && hora < 12){
    document.getElementById("saudacao").innerHTML = "Bom dia,";
}
else if(hora >= 12 && hora < 18){
    document.getElementById("saudacao").innerHTML = "Boa tarde,";
}
else{
    document.getElementById("saudacao").innerHTML = "Boa noite,";
}

let hrBR = new Date().toLocaleString("pt-br", {timeStyle:"short"});
document.getElementById("saudacao").innerHTML += " " + "são " + hrBR;

let diaDeHoje = new Date().getDay();
diasDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
document.getElementById("saudacao").innerHTML += " " + "de " + diasDaSemana[diaDeHoje];

let data = new Date().toLocaleString("pt-br", {dateStyle:"short"});
document.getElementById("saudacao").innerHTML += " " + data;