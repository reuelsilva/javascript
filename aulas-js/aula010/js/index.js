function aoClicar(){
    document.getElementById("area").style.backgroundColor = "red";
    document.getElementById("area").innerHTML = "<p>Clicou!</p>"; 
}

function aoClicar2x(){
    document.getElementById("area").innerHTML = "<p>olá, mundo</p>";
}

function aoEntrar(){
    let div = document.getElementById("area");
    div.style.border = "3px solid rgb(24, 143, 167)";
    div.innerHTML = "<p>Entrou</p>";
}

function aoSair(){
    let div = document.getElementById("area");
    div.style.border = "1px solid black";
    div.innerHTML = "<p>Saiu</p>";
}

function aoFocar(){
    document.getElementById("campoTexto").value = " ";
}