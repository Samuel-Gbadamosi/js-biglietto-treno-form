//
// var nome = prompt("inserisci il tuo nome");
// var seta = prompt("inserisci il tuo eta");
// var km =  prompt("inserisci il tuo km");
// var totale = 0.21 * km;
// console.log(name + seta + km + totale);


var nomeInput = document.getElementById('nome').value;
console.log(nomeInput);
var distanza = document.getElementById('km').value;
console.log(distanza);
var eta = document.getElementById('eta').value;
console.log(eta);

var costoBiglietto = 0.21 * distanza;

document.getElementById('nome-passegero').innerHTML = nomeInput;
document.getElementById('carrozza').innerHTML = Math.floor(Math.random()* 9) + 1;







//
// var nomeInput = document.getElementById('nome').value;
// console.log(nomeInput);
//
// var distanza = document.getElementById('km').value;
// console.log(distanza);
// var eta = document.getElementById('eta').value;
// console.log(eta);
//
// var costoBiglietto = 0.21 * distanza;

// document.getElementById("nome-passegero").innerHTML = nomeInput;
