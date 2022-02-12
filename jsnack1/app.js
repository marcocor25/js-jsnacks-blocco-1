const numArray = [];

while (numArray.length !== 2) {
    const number = parseFloat(prompt('Inserisci un numero.'));
    
    if (!isNaN(number)) {
        numArray.push(number);
    }
}

const [primo, secondo] = numArray;

let maggiore = primo;

if (primo < secondo) {
    maggiore = secondo;
}

console.log(maggiore);