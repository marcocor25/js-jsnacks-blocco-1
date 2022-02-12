const numeri = [];

for(let i = 0; i < 5; i++) {
    const chiediNumeri = parseInt(prompt('Inserisci dei numeri a tua scelta'));
    numeri.push(chiediNumeri);
}

alert(`Hai scelto questi numeri: ${numeri}.
Tieni a mente uno di questi numeri.`);

const ricordaNumero = parseInt(prompt('Inserisci il numero da te scelto e ti dirò il risultato elevato al cubo! :)'));

const numeroCubo = ricordaNumero ** 3;

alert(`${ricordaNumero} elevato al cubo equivale a: ${numeroCubo}`);