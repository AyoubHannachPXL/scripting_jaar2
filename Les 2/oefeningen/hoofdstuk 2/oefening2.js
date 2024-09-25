let zin1 = "Dit is de eerste zin.";
let zin2 = "Dit is de tweede zin.";
let zin3 = "Dit is de derde zin.";

let langeZin = zin1 + " " + zin2 + " " + zin3;

const pEen = document.querySelector("p:nth-child(1)");
const pTwee = document.querySelector("p:nth-child(2)");
const pDrie = document.querySelector("p:nth-child(3)");

// pEen.innerText = zin1 + " " + zin2 + " " + zin3;
pEen.innerText = langeZin;

alert(zin1 + " " + zin2 + " " + zin3);