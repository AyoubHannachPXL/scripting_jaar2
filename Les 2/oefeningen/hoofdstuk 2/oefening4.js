let koekje = "Ik wil een koekje.";

let lasagne = koekje.replace(koekje.match("koekje"), "lasagne van de PXL-Catering");

let h1Element = document.querySelector("h1");

h1Element.innerText = lasagne;

console.log(lasagne);