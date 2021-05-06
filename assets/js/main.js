//Un alert() espone 5 numeri generati casualmente.
function generatoreNumeriCasuali(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var numeri = [];
for (i = 0; i < 5; i++) {
    numero = generatoreNumeriCasuali(1, 10);
    numeri.push(numero);
}
console.log(numeri);
alert('I 5 numeri da memorizzare sono' + numeri)
//Da li parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/* 
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma. */