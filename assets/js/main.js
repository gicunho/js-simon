/**
 * ##Generatore numeri casuali
 * Funzione per generare un numero casuale tra un minimo ed un massimo
 * @param {number} min - numero minimo che genererà
 * @param {number} max - numero massimo che genererà
 * @returns {number}
 */
function generatoreNumeriCasuali(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Generazione e push nell'array i numeri casuali con la funzione
//Generato numeri tra 1 e 100
var numeri = [];
for (i = 0; i < 5; i++) {
    numero = generatoreNumeriCasuali(1, 100);
    numeri.push(numero);
}

//Un alert() espone 5 numeri generati casualmente.
alert('I 5 numeri da memorizzare sono' + numeri)

//Da li parte un timer di 30 secondi.

var countdown = 30;
var timer = setInterval(function () {
    var tempoEl = document.getElementById('timer');
    countdown--;
    tempoEl.innerHTML = countdown;
    if (countdown === 0) {
        tempoEl.innerHTML = "Il gioco inizia ora";
        clearInterval(timer);
    }
}, 1000);


var numeriUtente = [],
    numeriGiusti = [];

setTimeout(function () {
    //Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    for (j = 0; j < 5; j++) {
        var numeroUtente = Number(prompt('Inserisci un numero dei numeri di prima senza ripeterlo'));
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
    //Se 1 numero inserito è giusto
    if (numeriGiusti.length = 1) {
        messaggio = `Bravo, hai indovinato 1 numero!
Eccolo: ${numeriGiusti}`
    }
    //Se più di 1 numero inserito è giusto

    else if (numeriGiusti.length > 1) {
        messaggio = `Complimenti, hai indovinato ${numeriGiusti.length} numeri!
Eccoli: ${numeriGiusti}`
    } 
    //Se nessun numero inserito è giusto
    
    else {
        messaggio = `Purtroppo non hai indovinato nessun numero`
    }
    console.log('numeri scelti da utente =' + numeriUtente);
    console.log('numeri giusti ' + numeriGiusti);
    console.log(messaggio);
}, 30000)