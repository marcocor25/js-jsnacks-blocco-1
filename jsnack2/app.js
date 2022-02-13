const chiediParola = prompt('Dimmi una parola.');

const chiediPaorolaDue = prompt("Dimmi un'altra parola.");

if (chiediParola.length > chiediPaorolaDue.length) {
    console.log(chiediParola, chiediPaorolaDue);
} else {
    console.log(chiediPaorolaDue, chiediParola);
}