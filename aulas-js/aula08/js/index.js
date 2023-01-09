var valorReal, cotacao, total;

valorReal = 3.00;
cotacao = 5.36; 

function realParaDolar(real, cotacao){
    return real * cotacao;
}

total = realParaDolar(valorReal, cotacao);
window.alert("Valor dado em real: R$" + valorReal + "\n" + "Valor em dólar correspondente: U$" + total);
