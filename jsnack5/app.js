const numeriDispari = [];

for(let i = 0; i < 6; i++) {
    const chiediNumero = parseInt(prompt('Dimmi un numero.'));

    if (chiediNumero % 2 == 0) {
        console.log('Sotto troverai i numeri dispari!');
    } else {
        numeriDispari.push(chiediNumero);
    }
}

console.log(numeriDispari);