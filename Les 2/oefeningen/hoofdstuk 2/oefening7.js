let getalEen = parseInt(prompt("Geef een getal in"));
let getalTwee = parseInt(prompt("Geef een getal in"));

let uitkomst = getalEen * getalTwee;

let pElement = document.querySelector("p");

pElement.innerText = "De uitkomst van de vermenigvuldiging is: " + uitkomst + ".";