
function calculoBhaskara(){
    let a = Number(window.prompt('Qual é o valor de a?'));
    let b = Number(window.prompt('Qual é o valor de b?'));
    let c = Number(window.prompt('Qual é o valor de c?'));

    let delta = (b ** 2) - (4 * a * c);

    let resp = window.document.getElementById('saida');
    resp.innerHTML = `<h2>Resolvendo Bhaskara</h2>`;
    resp.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
    resp.innerHTML += `<p>O cálculo realizado será <strong>Δ = ${b}² - 4 . ${a} . ${c}</strong></p>`
    resp.innerHTML += `<p>O valor calculado foi <mark><strong>Δ = ${delta}</strong></mark></p>`
}