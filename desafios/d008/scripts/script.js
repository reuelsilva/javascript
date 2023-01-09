
function desconto(){
    let prod = window.prompt('Qual é o produto que você está comprando?');
    while(prod == ''){
        prod = window.prompt('Qual é o produto que você está comprando?');
    }

    let preco = Number.parseFloat(window.prompt(`Qual é o preço de ${prod}?`));
    while(isNaN(preco)){
        preco = Number.parseFloat(window.prompt(`Qual é o preço de ${prod}?`));
    }

    let tot_desc = (preco * 10) / 100;
    let preco_final = preco - tot_desc;
    

    let res = document.querySelector('section');
    res.innerHTML = `<h2>Calculando o desconto de 10% para ${prod}.</h2>`
    res.innerHTML += `<p>O preço inicial era R$ ${preco.toFixed(2).replace('.', ',')}</p>`
    res.innerHTML += `<p>Você acaba de ganhar R$ ${tot_desc.toFixed(2).replace('.', ',')} de desconto (10%).</p>`
    res.innerHTML += `<p>No fim, você vai pagar R$ ${preco_final.toFixed(2).replace('.', ',')} no produto ${prod}.</p>`
}