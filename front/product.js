//LOCALISATION DANS LE DOCUMENT HTML
const main = document.querySelector("main")
main.className = 'container'
const rowCarte = document.createElement("div")
rowCarte.className = 'row'


var parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id"));