let res = window.document.getElementById('result');

function gerar(){
    let n = Math.floor(Math.random() * 100) + 1;
    /*
    Math.random() * 100: retorna de 0 até 99 (n >=0 && n < 100)
    Math.floor(): arredonda para o inteiro anterior mais próximo
    + 1: admite o sorteio entre 1 e 100
    */
    console.log(n);
    res.innerHTML += `<p>Acabei de pensar no número <mark>${n}</mark>!</p>` 
}

function limpar(){
    res.innerHTML = null;
}

