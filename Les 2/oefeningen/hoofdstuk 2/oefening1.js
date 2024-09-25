let zin1 = "Dit is de eerste zin";
let zin2 = "Dit is de tweede zin";
let zin3 = "Dit is de derde zin";

const pEen = document.querySelector("p:nth-child(1)");
const pTwee = document.querySelector("p:nth-child(2)");
const pDrie = document.querySelector("p:nth-child(3)");

pEen.innerText = zin1;
pTwee.innerText = zin2;
pDrie.innerText = zin3;

console.log(zin1);
console.log(zin2);
console.log(zin3);