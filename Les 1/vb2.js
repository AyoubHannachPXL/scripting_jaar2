const h1El = document.querySelector('h1');
const tijdInUren = 11;

if (tijdInUren < 12) {
    h1El.innerText = "Goeiemorgen";
} else {
    h1El.innerText = "Goeiemiddag";
}
// --------------------------------------

if (tijdInUren < 12) {
    h1El.innerText = "Goeiemorgen";
}else if (tijdInUren <18) {
    h1El.innerText = "Goeiemiddag"
} else{
    h1El.innerText = "Goeieavond"
}
