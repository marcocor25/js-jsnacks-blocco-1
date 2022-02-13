// AVEVO SVOLTO L'ESERCIZIO IN QUESTO MODO PERCHÈ NON AVEVO CAPITO LA CONSEGNA

// const numeri = [];

// for(let i = 0; i < 5; i++) {
//     const chiediNumeri = parseInt(prompt('Inserisci dei numeri a tua scelta'));
//     numeri.push(chiediNumeri);
// }

// alert(`Hai scelto questi numeri: ${numeri}.
// Tieni a mente uno di questi numeri.`);

// const ricordaNumero = parseInt(prompt('Inserisci il numero da te scelto e ti dirò il risultato elevato al cubo! :)'));

// const numeroCubo = ricordaNumero ** 3;

// alert(`${ricordaNumero} elevato al cubo equivale a: ${numeroCubo}`);

// **************************************************

// NUOVO ESERCIZIO

let decidiLeVolte = parseInt(prompt('Dimmi un numero, io ti darò il risultato elevato al cubo per il numero di volte corrispondente al tuo numero.'));

for(let i = 1; i <= decidiLeVolte; i++) {
    console.log(i**3);
}

alert(`Controlla la console e avrai i risultati.`);