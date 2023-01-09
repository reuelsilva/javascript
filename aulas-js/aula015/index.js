/*
for(let i=0; i <= 10000; i++){
    document.getElementById("teste").innerHTML += i + ", ";
}*/
/*
for(let i = 1900; i <= 2022; i++){
    document.getElementById("ano").innerHTML += "<option value='" + i + "'>"+ i +"</option>";
}*/
var ano = new Date().getFullYear();
/*
for(let i = 1900; i <= ano; i++){
    document.getElementById("ano").innerHTML += "<option value='" + i + "'>"+ i +"</option>";
}*/
for(let i = ano; i >= 1900; i--){
    document.getElementById("ano").innerHTML += "<option value='" + i + "'>"+ i +"</option>";
}
