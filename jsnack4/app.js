// CREO UNA VARIABILE PER CHIEDERE IL NOME
const chiediNome = prompt('Come ti chiami?');

// CREO VARIABILE PER SAPERE CHI È AUTORIZZATO
let autorizzato = 0;

// CREO ARRAY DI INVITATI
const invitati = [
    'Lucia',
    'Giuseppe',
    'Luigi',
    'Gianmarco',
    'Andrea',
    'Antonio',
    'Monica',
    'Jonathan',
    'Laura',
    'Vanessa',
    'Carlo',
    'Paolo',
];

for (let i = 0; i < invitati.length; i++) {
    if (chiediNome == invitati[i]) {
        autorizzato = 1;
    }
}

if(autorizzato){
    alert('Perfetto, puoi venire alla festa!');
}
else{
    alert('Mi dispiace, non sei stato invitato alla festa...');
}