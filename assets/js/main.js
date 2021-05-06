//Un alert() espone 5 numeri generati casualmente.
function generatoreNumeriCasuali(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var numeri = [];
for (i = 0; i < 5; i++) {
    numero = generatoreNumeriCasuali(1, 10);
    numeri.push(numero);
}
console.log('numeri generati = ' + numeri);
alert('I 5 numeri da memorizzare sono' + numeri)
//Da li parte un timer di 30 secondi.
var numeriUtente = [];
var numeriGiusti = [];
var numeriSbagliati = [];

setTimeout(function () {
    for (j = 0; j < 5; j++) {
        var numeroUtente = prompt('Inserisci un numero');
        numeriUtente.push(numeroUtente);
    }
    
    var numeriNew = numeri;
    var numeriUtenteNew = numeriUtente

    for (y = 0; y < 5; y++) {
        if (numeriNew.includes(numeriUtenteNew[y])) {
            numeriGiusti.push(numeriUtenteNew[y]);
        } else {
            numeriSbagliati.push(numeriUtenteNew[y]);
        }
    } 
    console.log('numeri scelti da utente =' + numeriUtenteNew);
        console.log('numeri giusti ' + numeriGiusti);
        console.log('numeri sbagliati ' + numeriSbagliati);
}, 2000)




//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/* 
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma. */