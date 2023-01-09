function estacao(){
    let mes = window.prompt('Digite o mês em extenso (ex: Setembro)');
    let estacao;
    switch(mes.toUpperCase()){
        case 'DEZEMBRO': case'JANEIRO': case 'FEVEREIRO':
            estacao = 'VERÃO';
            break
        case 'MARÇO': case 'ABRIL': case 'MAIO':
            estacao = 'OUTONO';
            break
        case 'JUNHO': case 'JULHO': case 'AGOSTO':
            estacao = 'INVERNO';
            break
        case 'SETEMBRO': case 'OUTUBRO': case 'NOVEMBRO':
            estacao = 'PRIMAVERA';
            break
        default:
            estacao = 'INDEFINIDA';
    }
    let saida = window.document.getElementById('result');
    saida.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark>.</p>`;
}