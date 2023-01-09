function ativarContagem(){
    /*document.getElementById("tempo").innerHTML = "Iniciou a contagem";
    tempo = setTimeout(function(){
        document.getElementById("tempo").innerHTML = "Executou o setTimeout";
    }, 5000)
    */
    tempo = setInterval(function(){
        var pontoDePartida = document.getElementById("tempo").innerHTML;
        var contador = parseInt(pontoDePartida) - 1;
        if(contador == 0){
            
            document.getElementById("tempo").innerHTML = "Parou a contagem";
            pararContagem();
        }else{
            document.getElementById("tempo").innerHTML = contador;
        }
        
    }, 1000);
   
}

function pararContagem(){
    //clearTimeout(tempo);
    clearInterval(tempo);
    //document.getElementById("tempo").innerHTML = "Parou a contagem";
}