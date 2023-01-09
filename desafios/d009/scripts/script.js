function reajustar(){
    let func = window.prompt('Qual é o nome do funcionário?');
    while(func == ''){
        func = window.prompt('Qual é o nome do funcionário?');
    }

    let sal = Number.parseFloat(window.prompt(`Qual é o salário de ${func}`));
    while(isNaN(sal)){
        sal = window.prompt(`Qual é o salário de ${func}`);
    }

    let perc = Number.parseInt(window.prompt(`O salário de ${func} vai ser reajustado em qual porcentagem?`));
    while(isNaN(perc)){
        perc = window.prompt(`O salário de ${func} vai ser reajustado em qual porcentagem?`);
    }

    let aum = sal * perc / 100;
    let novo_sal = sal + aum;

    let res = document.querySelector('section');
    res.innerHTML = `<h2>${func} recebeu um aumento salarial.</h2>`;
    res.innerHTML += `<p>Com um aumento de ${perc}%, o salário vai aumentar R$ ${aum.toFixed(2).replace('.', ',')} no próximo mês.</p>`;
    res.innerHTML += `<p>E a partir daí, ${func} vai passar a ganhar ${novo_sal.toFixed(2).replace('.', ',')}.</p>`;

}