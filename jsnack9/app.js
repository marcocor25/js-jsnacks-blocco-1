let array = [];

for(let i = 1; i <= 10; i++) {
  const numeri = i;
  array.push(numeri);
}

console.log(array);

let somma = 0;

for(let j = 0; j < array.length; j++) {
  somma += array[j];
}

console.log(somma);

const media = somma / 10;

console.log(media);