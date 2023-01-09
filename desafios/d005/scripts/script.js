
function converter(){
    let m = Number.parseFloat(window.prompt('Digite uma distância em metros(m):'));
    while(isNaN(m)){
        m = Number.parseFloat(window.prompt('Digite uma distância em metros(m):'));
    }

    let res = window.document.querySelector('section');
    res.innerHTML = `<h2>A distância de ${m} metros, corresponde a...</h2>`;

    paraKm(m);
    paraHm(m);
    paraDam(m);
    paraDm(m);
    paraCm(m);
    paraMm(m);


    function paraKm(m){
        let km = m / 1000;
        res.innerHTML += `<p>${km} quilômetros (Km)</p>`;
    }

    function paraHm(m){
        let hm = m / 100;
        res.innerHTML += `<p>${hm} hectômetros (Hm)</p>`;
    }

    function paraDam(m){
        let dam = m / 10;
        res.innerHTML += `<p>${dam} decâmetros (Dam)</p>`;
    }

    function paraDm(m){
        let dm = m * 10;
        res.innerHTML += `<p>${dm} decímetros (dm)</p>`;
    }

    function paraCm(m){
        let cm = m * 100;
        res.innerHTML += `<p>${cm} centímetros (cm)</p>`
    }

    function paraMm(m){
        let mm = m * 1000;
        res.innerHTML += `<p>${mm} milímetros (mm)</p>`
    }
}