let somma = 0;

for(let i = 0; i < 5; i++) {
    const askNumber = parseInt(prompt('Inserisci un numero.'));
    somma = somma + askNumber;
}

console.log(somma)