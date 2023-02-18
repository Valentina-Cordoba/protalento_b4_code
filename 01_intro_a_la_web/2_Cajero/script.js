

var cuentas = [
  { name: "Mali", balance: 200, number1: 60755912778, pwd1: 1234 },
  { name: "Gera", balance: 290, number2: 60765912778, pwd2: 5678 },
  { name: "Maui", balance: 67, number3: 60775912778, pwd3: 9012 }
]

var name= "";
var amount=0;


document.getElementById("validarBtn").addEventListener("click", function () {
  event.preventDefault();
  var label1 = parseInt(document.getElementById('account').value)
  var label2 = parseInt(document.getElementById('password').value)
  var control= false

  for (var i = 0; i < cuentas.length; i++) {
    if (cuentas[i].number1 === label1 && cuentas[i].pwd1 === label2) {
      control=true;
      name= cuentas[i].name;
      amount= cuentas[i].balance;
      window.location.href = "Profile-Mali.html";
      break;
    }
    else if (cuentas[i].number2 === label1 && cuentas[i].pwd2 === label2) {
      control=true;
      name= cuentas[i].name;
      amount= cuentas[i].balance;
      window.location.href = "Profile-Gera.html";
      break;
    }
    else if (cuentas[i].number3 === label1 && cuentas[i].pwd3 === label2) {
      control=true;
      name= cuentas[i].name;
      amount= cuentas[i].balance;
      window.location.href = "Profile-Maui.html";
      break;
    }
  }

  if (control==false){
    alert("Datos de acceso no válidos, intentelo de nuevo");
  }
})


