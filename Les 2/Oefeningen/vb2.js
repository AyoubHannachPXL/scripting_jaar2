//numbers: getallen, kommagetallen, negatieve getallen (kommagetal geef je aan met punt niet komma)
const getal = -1.111;

//string, karakters, 1 of meerdere
const naam = "Bart";

//boolean, waar of niet waar
const waarOfNietWaar = true;

//null, geeft aan dat undefined is. Het bestaat wel maar het is leeg.
let voorbeeldEen = null;
// let voorbeeld = undefined; dit kan ook

//NaN (not a number)
const geenGetal = NaN;

//



const h1Element =document.querySelector("h1");
h1Element.innerText = getal;

const h2Element = document.querySelector("h2");
h2Element.innerText = naam;

console.log(naam);
console.log(getal);
console.log(getal);

// alert("Hallo")

console.log(window);

window.alert("Hello");
window.alert("Doei");

let voornaam;
voornaam = prompt("Wat is jouw naam?");

alert("Hallo," + " " +voornaam);