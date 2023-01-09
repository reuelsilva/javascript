var num, final1, final2;
num = 1;
final1 = num++;
document.getElementById("texto1").innerHTML = final1;
document.getElementById("texto2").innerHTML = num;
final2 = ++num;
document.getElementById("texto3").innerHTML = final2;
