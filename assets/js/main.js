//Un alert() espone 5 numeri generati casualmente.
function generatoreNumeriCasuali(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var numeri = [];
for (i = 0; i < 5; i++) {
    numero = generatoreNumeriCasuali(1, 100);
    numeri.push(numero);
}
console.log('numeri generati = ' + numeri);
alert('I 5 numeri da memorizzare sono' + numeri)

//Da li parte un timer di 30 secondi.
var numeriUtente = [],
    numeriGiusti = [],
    numeriSbagliati = [];

setTimeout(function () {
    //Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    for (j = 0; j < 5; j++) {
        var numeroUtente = Number(prompt('Inserisci un numero'));
        numeriUtente.push(numeroUtente);
    }

    //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    for (y = 0; y < 5; y++) {
        for (z = 0; z < 5; z++ ) {
            if (numeri[y] === numeriUtente[z] && !numeriGiusti.includes(numeriUtente[z])) {
                numeriGiusti.push(numeriUtente[z])
            }
        }
    }

    var messaggio;
    if (numeriGiusti.length > 0) {
        messaggio = `Complimenti, hai indovinato ${numeriGiusti.length} numeri!
Eccoli: ${numeriGiusti}`
    } else {
        messaggio = `Purtroppo non hai indovinato nessun numero`
    }
    console.log('numeri scelti da utente =' + numeriUtente);
    console.log('numeri giusti ' + numeriGiusti);
    console.log(messaggio);
}, 2000)