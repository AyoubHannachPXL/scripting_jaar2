const h1el = document.querySelector('h1');

let isInHetMiddenVanHetBord = false;
let stappen = 0;

while (isInHetMiddenVanHetBord !== true) {
    console.log("één stap zetten");
    stappen = stappen + 1;

    if (stappen === 4) {
        isInHetMiddenVanHetBord = true;
    }
}