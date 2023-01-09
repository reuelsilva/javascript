function calc_idade(){
    let nasc = Number(window.prompt('Em que ano você nasceu?'));
    let ano = new Date().getFullYear();
    let idade = ano - nasc;

    let saida = document.querySelector('section#saida');
    saida.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`;
}