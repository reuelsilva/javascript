function calc(){
    let n1 = Number(window.prompt('Primeiro valor:'));
    let n2 = Number(window.prompt('Segundo valor:'));
    let op = Number(window.prompt(`Valores informados: ${n1} e ${n2}.\nO que vamos fazer?\n[1]Somar\n[2]Subtrair\n[3]Multiplicar\n[4]Dividir`));

    let saida = document.getElementById('saida');
    saida.innerHTML = `<h2>Calculando...</h2>`
    switch(op){
        case 1: saida.innerHTML += `<p>${n1} + ${n2} = <strong>${n1 + n2}</strong></p>`;
        break;

        case 2: saida.innerHTML += `<p>${n1} - ${n2} = <strong>${n1 - n2}</strong></p>`;
        break;

        case 3: saida.innerHTML += `<p>${n1} x ${n2} = <strong>${n1 * n2}</strong></p>`;
        break;

        case 4: if(n2!=0){
            saida.innerHTML += `<p>${n1} / ${n2} = <strong>${n1 / n2}</strong></p>`;
        }else{
            saida.innerHTML += `<p>Não é possível dividir por ${n2}.</p>`;
        }
        break;

        default: saida.innerHTML += `<p><strong style="color: red;">OPÇÃO INVÁLIDA!</strong> Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.</p>`;
    }
}