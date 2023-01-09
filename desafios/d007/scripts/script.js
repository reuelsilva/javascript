
let cot = Number.parseFloat(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'));
while(isNaN(cot)){
    cot = Number.parseFloat(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'));
}

function converter(){
    let real = Number.parseFloat(window.prompt('Quantos R$ você tem na carteira?'));
    while(isNaN(real)){
        Number.parseFloat(window.prompt('Quantos R$ você tem na carteira?'));
    }

    let dolar = real / cot;
    let res = document.querySelector('section');
    res.innerHTML = `<p>Com R$ ${real.toFixed(2).replace('.', ',')} reais é possível comprar US$ ${dolar.toFixed(2).replace('.', ',')} dólares.</p>`
}