function info(){
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez');
    let semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb');

    let atual = new Date();

    let dia_do_mes = atual.getDate();
    let mes = atual.getMonth();
    let ano = atual.getFullYear();
    let dia_da_semana = atual.getDay();
    let hora = atual.getHours();
    let min = atual.getMinutes();
    let seg = atual.getSeconds();
    
    let saida = window.document.querySelector('section#saida');
    saida.innerHTML = `<p>Dia: <mark>${dia_do_mes}</mark></p>`;
    saida.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`;
    saida.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`;
    saida.innerHTML += `<p>Dia da Semana: <mark>${semana[dia_da_semana]}</mark></p>`;
    saida.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`;
    saida.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`;
    saida.innerHTML += `<p>Segundos: <mark>${seg}</mark></p>`;
}