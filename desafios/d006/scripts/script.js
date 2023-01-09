
function converter(){
    let c = Number.parseFloat(window.prompt('Digite uma temperatura em °C (Celsius):'));

    while(isNaN(c)){
        c = Number.parseFloat(window.prompt('Digite uma temperatura em °C (Celsius):'))
    }

    let imprime = document.querySelector('section');
    imprime.innerHTML = `<h2>A temperatura de ${c}°C, corresponde a...</h2>` 

    paraK();
    paraF();

    function paraK(){
        let k = c + 273.15;
        imprime.innerHTML += `<p>${k.toFixed(2).replace('.', ',')}°K (Kelvin)</p>`
    }

    function paraF(){
        let f = c * 1.8 + 32;
        imprime.innerHTML += `<p>${f.toFixed(2).replace('.', ',')}°F (Fahrenheit)</p>`
    }
}