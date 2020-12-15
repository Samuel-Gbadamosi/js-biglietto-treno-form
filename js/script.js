// inzio con function activated when clicked
document.getElementById("genera").addEventListener('click',
function() {

var nomeInput = document.getElementById('nome').value;
console.log(nomeInput);
var km = document.getElementById('km').value;
console.log(km);
var eta = document.getElementById('eta').value;
console.log(eta);

var costoBiglietto = km * 0.21;
var message = "tariffa standard";
console.log(costoBiglietto);

if (eta == 'minorenne') {
  costoBiglietto -= costoBiglietto * 0.2;
  message = "sconto per i minorenni";
} else if (eta == 'over') {
  costoBiglietto -= costoBiglietto * 0.4;
  var message = "sconto Silver";
}else {
  costoBiglietto = costoBiglietto;
  message = "tariffa standard";

}

document.getElementById('nome-passegero').innerHTML = '  ' + nomeInput;
document.getElementById('offerta-applicata').innerHTML = costoBiglietto;
document.getElementById('carrozza').innerHTML = Math.floor(Math.random()* 9) + 1;
document.getElementById('codice-cp').innerHTML="codice";
document.getElementById('costo').innerHTML = costoBiglietto.toFixed(2);

console.log(nomeInput + costoBiglietto);

document.getElementById('biglietto').className='show';

}
);
// finisci operation genera
// when clicked cancel operation

document.getElementById("annulla").addEventListener('click',
function() {
  var nomeInput = document.getElementById('nome').value;
  console.log(nomeInput);
  var km = document.getElementById('km').value;
  console.log(km);
  var eta = document.getElementById('eta').value;
  console.log(eta);

  var costoBiglietto = km * 0.21;
  var message = "tariffa standard";
  console.log(costoBiglietto);

  document.getElementById('nome-passegero').innerHTML = '  ' + nomeInput;
  document.getElementById('offerta-applicata').innerHTML = costoBiglietto;
  document.getElementById('carrozza').innerHTML = Math.floor(Math.random()* 9) + 1;
  document.getElementById('codice-cp').innerHTML="codice";
  document.getElementById('costo').innerHTML = costoBiglietto.toFixed(2);

  console.log(nomeInput + costoBiglietto);

  document.getElementById('biglietto').className='hidden';
}
);
// when clicked cancel operation
