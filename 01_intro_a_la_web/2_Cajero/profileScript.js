var parameters = new URLSearchParams(location.search);

var name = parameters.get('name');
var balance = parameters.get('balance');
var number = parameters.get('number');


window.onload = function () {
    var label = document.getElementById("infoFullname");
    label.innerHTML = name;
    var label1 = document.getElementById("infoNumberAccount");
    label1.innerHTML = number;
    var label2 = document.getElementById("infoBalance");
    label2.innerHTML = balance;
}

function cambiarValor() {
    var input = document.getElementById("amount").value;
    
}





