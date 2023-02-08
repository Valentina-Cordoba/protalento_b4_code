

var cuentas = [
    { name: "Mali", balance: 200, numero:60755912778, pwd:1234},
    { name: "Gera", balance: 290, numero:60765912778, pwd:5678},
    { name: "Maui", balance: 67, numero:60775912778, pwd: 9012}
  ];


  function myfunction() {
    var label1=document.getElementById('account').textContent
    var label2= document.getElementById('password').textContent
    for (var i = 0; i < cuentas.length; i++) {
      if (cuentas[i].numero === label1 && cuentas[i].pwd === label2) {
        console.log('Bienvenido');
        return true;
      }
    }
    return false;
  }

