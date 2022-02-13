let chiediNumero;

do {
    chiediNumero = prompt('Dimmi un numero di 4 cifre e io ti darò la somma dei numeri che contiene.');
    if (parseInt(chiediNumero) < 1000 || parseInt(chiediNumero) > 9999) {
        alert('Inserisci un numero di 4 cifre, idiota!')
    }
} while (parseInt(chiediNumero) < 1000 || parseInt(chiediNumero) > 9999);

let splitNumeri = chiediNumero.split('').map(Number);
console.log(splitNumeri);

let somma = 0;

for(let i = 0; i < splitNumeri.length; i++) {
    somma += splitNumeri[i];
}

console.log(somma);