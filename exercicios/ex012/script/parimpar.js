function parImpar(){
    let n = Number(window.prompt('Digite um número: '));

    let res = window.document.getElementById('result');

    if(n%2==0){
        res.innerHTML = `<p>O número ${n} que foi digitado é <strong>PAR</strong>!</p>`
    }else{
        res.innerHTML = `<p>O número ${n} que foi digitado é <strong>ÍMPAR</strong>!</p>`
    }
}