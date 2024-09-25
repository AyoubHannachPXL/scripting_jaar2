// const h1Element = document.querySelector('h1');
// h1Element.innerText = "Gewijzigd vanuit JavaScript";
// alert('Hello World');
// console.log('Welkom bij de JavaScript training');

//Note: innerhtml of innertext(moet je kijken als het input van gebruiker is, als dat zo is dan innertext gebruiken)

// ----------------------------------------------------------------------

const h1El = document.querySelector('h1');
const tijdInUren = 11;

if (tijdInUren < 12) {
    h1El.innerText = "Goeiemorgen";
} else {
    h1El.innerText = "Goeiemiddag";
}

if (tijdInUren < 12) {
    h1El.innerText = "Goeiemorgen";
}else if (tijdInUren <18) {
    h1El.innerText = "Goeiemiddga"
} else{
    h1El.innerText = "Goeieavond"
}
