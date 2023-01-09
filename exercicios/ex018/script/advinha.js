let computador = 0;
function sorteia(){
    computador = Math.floor(Math.random() * 100) + 1;
    console.log(computador);
}

function testa(){
    let usuario = Number(window.prompt('Qual é o seu palpite?'))
    
    let res = window.document.getElementById('result');
    if(computador > usuario){
        res.innerHTML += `<p>Você falou ${usuario}. Meu número é <strong>MAIOR!</strong></p>`
    }else if(computador < usuario){
        res.innerHTML += `<p>Você falou ${usuario}. Meu número é <strong>MENOR!</strong></p>`
    }else{
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
    }
}