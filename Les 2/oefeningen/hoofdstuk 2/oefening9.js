let getalEen = parseFloat(prompt("Geef een getal in."));
let getalTwee = parseFloat(prompt("Geef nog een getal in."));

let vermenigvuldiging = getalEen * getalTwee;
let optelling = getalEen + getalTwee;
let aftrekking = getalEen - getalTwee;
let deling = getalEen / getalTwee;

let pElementEen = document.querySelector("p:nth-child(1)");
let pElementTwee = document.querySelector("p:nth-child(2)");
let pElementDrie = document.querySelector("p:nth-child(3)");
let pElementVier = document.querySelector("p:nth-child(4)");

pElementEen.innerText = vermenigvuldiging;
pElementTwee.innerText = optelling;
pElementDrie.innerText = aftrekking;
pElementVier.innerText = deling;