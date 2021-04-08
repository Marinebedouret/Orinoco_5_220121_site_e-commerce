//LOCALISATION DANS LE DOCUMENT HTML
const main = document.querySelector("main")
main.className = 'container'
const rowCarte = document.createElement("div")
rowCarte.className = 'row'

//Création d'une constant pour le panier
const urlApi = 'http://localhost:3000/api/furniture' + '/';

//Affichage des produits dans le localstorage & convertir en fichier JSON
const panierAjout = JSON.parse(localStorage.getItem('panier'));

//Vérification s'il y a des produits dans la panier
if(JSON.parse(localStorage.getItem("panier"))){
//Permet de supprimer le message votre panier est vide lorsqu'il y a des produits dans le panier
    document.getElementById("emptyShopping").remove();
    console.table(panierAjout);

//Récupération ID
    const basketDetail = document.getElementById('basketDetail');
    basketDetail.className = 'card mb-3';

//Total des produits avant ajout des frais
    let total = 0;

    for (let i = 0; i < panierAjout.length; i++) {
        const productcard = panierAjout[i];

    const elementId = productcard.elementId;
    const elementName = productcard.elementName;
    const elementVarnish = productcard.elementvarnish;
    const elementQuantity = productcard.elementQuantity;
    const elementImg = productcard.elementImg;
    const elementPrice = productcard.elementPrice / 100;
    const subTotal = elementPrice * elementQuantity;

    panierAjout.forEach(product => {
        if (product.elementId === elementId && product.elementVarnish === elementVarnish){
            total += subTotal;
        }
        console.log(total);
    });
//--------------------------------Construction de la page panier-------------------------------------------------
const product = document.createElement('div');
product.className = '';
basketDetail.append(product);

//Création du titre
const nameProduct = document.createElement('h2');
nameProduct.className="";
nameProduct.textContent += elementName;
product.appendChild(nameProduct);

//Création et récupération de l'image
/*const picture = document.createElement('img');
picture.className = '';
picture.src = elementImg;
picture.innerHTML = ` alt="${elementName}" src="${elementImg}"`;
product.appendChild(picture);*/


//Création du choix du vernis 
const chooseVarnish = document.createElement('p');
chooseVarnish.className = '';
chooseVarnish.innerHTML += elementVarnish;
product.appendChild(chooseVarnish);



    

        
    }


}