//LOCALISATION DANS LE DOCUMENT HTML
const main = document.querySelector("main")
main.className = 'container'
const rowCarte = document.createElement("div")
rowCarte.className = 'row'

//Création d'une constant pour le panier
const urlApi = 'http://localhost:3000/api/furniture' + '/';

//Affichage des produits dans le localstorage & convertir en fichier JSON
//const panierAjout = JSON.parse(localStorage.getItem('panier'));
addition = () =>{
//Vérification s'il y a des produits dans la panier
if(JSON.parse(localStorage.getItem("panier")).length > 0){
//Permet de supprimer le message votre panier est vide lorsqu'il y a des produits dans le panier
    document.getElementById("emptyShopping").remove();


    /*for (let i = 0; i < panierAjout.length; i++) {
        const productcard = panierAjout[i];

    const elementId = productcard.elementId;
    const elementName = productcard.elementName;
    const elementVarnish = productcard.elementvarnish;
    const elementQuantity = productcard.elementQuantity;
    const elementImg = productcard.elementImg;
    const elementPrice = productcard.elementPrice / 100;
    const subTotal = elementPrice * elementQuantity;*/


//--------------------------------Construction de la page panier-------------------------------------------------

//Création de la structure du panier
let order = document.createElement("table");
let lineTable = document.createElement("tr");
let columnName = document.createElement("th");
let columnUnitPrix = document.createElement("th");
let columnRemove = document.createElement("th");
let lineTotal = document.createElement("tr");
let columnRefTotal = document.createElement("th");
let columnPriceTotal = document.createElement("td");
let columnPicture = document.createElement("th");
let columnQuantity = document.createElement("th");
let columnVarnish = document.createElement("th");
let columnSubTotal = document.createElement("th");


let orderSection = document.getElementById("basketDetail");
orderSection.appendChild(order);
order.appendChild(lineTable);
lineTable.appendChild(columnName);
columnName.textContent = "Nom du produit";
lineTable.appendChild(columnPicture);
columnPicture.textContent = "Image du produit";
lineTable.appendChild(columnUnitPrix);
columnUnitPrix.textContent = "Prix du produit ";
lineTable.appendChild(columnQuantity);
columnQuantity.textContent = "Quantité";
lineTable.appendChild(columnSubTotal);
columnSubTotal.textContent = "Sous-total";
lineTable.appendChild(columnVarnish);
columnVarnish.textContent = "Option vernis";
lineTable.appendChild(columnRemove);
columnRemove.textContent = "Annuler un produit";

//création ligne prix unitaire + image + nom du produit

 //Récupération ID
let i = 0;
JSON.parse(localStorage.getItem("panier")).forEach((product)=>{
    console.table(product);
    let lineProduct = document.createElement("tr");
    //nom produit
    let nameProduct = document.createElement("td");
    const elementName = product.elementName;
    nameProduct.textContent += elementName;

    //prix unitaire
    let unitPriceProduct = document.createElement("td");
    const elementPrice = product.elementPrice / 100;
    unitPriceProduct.textContent += elementPrice + "€";

    //photo produit
    let pictureProduct = document.createElement("img");
    pictureProduct.className = 'img-fluid w-100';
    const elementImg = product.elementImg;
    pictureProduct.src = elementImg;
    pictureProduct.innerHTML = ` alt="${elementName}" src="${elementImg}"`;
    //btn
    let btnAdd = document.createElement('button');
    //quantité
    let quantityProduct = document.createElement("td");
    const elementQuantity = product.elementQuantity;
    quantityProduct.textContent += elementQuantity;
    let btnMinus = document.createElement('button');
    //Sous-total produit
    let subTotalProduct = document.createElement("td");
    const subTotal = elementPrice * elementQuantity + "€";

    //option produit
    let varnishProduct = document.createElement("td");
    const elementVarnish = product.elementvarnish;
    varnishProduct.textContent += elementVarnish;


    //supprimer produit
    let removeProduct = document.createElement("button");

    //Class pour css
    lineProduct.setAttribute("id", "product" +i);
    removeProduct.setAttribute("id", "remove"+i);
    removeProduct.setAttribute("class", "far fa-trash-alt annulerProduct");
    btnMinus.setAttribute("id","btn"+i);
    btnMinus.setAttribute("class", "fas fa-minus");
    btnAdd.setAttribute("id", "btn"+i);
    btnAdd.setAttribute("class", "fas fa-plus" );
    //removeProduct.addEventListener('click', annulerProduct.bind(button));
    i++;

    //Html
    order.appendChild(lineProduct);
    lineProduct.appendChild(nameProduct);
    lineProduct.appendChild(pictureProduct);
    lineProduct.appendChild(unitPriceProduct);
    quantityProduct.appendChild(btnAdd);
    lineProduct.appendChild(quantityProduct);
    quantityProduct.appendChild(btnMinus);
    lineProduct.appendChild(subTotalProduct);
    subTotalProduct.append(subTotal);
    lineProduct.appendChild(varnishProduct);
    lineProduct.appendChild(removeProduct);
    
});





/*const productChildren = document.createElement('');
productChildren.className = '';
product.append(productChildren);

//Création du titre
const nameProduct = document.createElement('h2');
nameProduct.className="";
nameProduct.textContent += elementName;
productChildren.appendChild(nameProduct);



//Création du choix du vernis 
const chooseVarnish = document.createElement('p');
chooseVarnish.className = '';
chooseVarnish.innerHTML += elementVarnish;
productChildren.appendChild(chooseVarnish);


//Création du btn pour ajouter une quantité supplémentaire au panier
const btnAdd = document.createElement('button');
btnAdd.className ='def-number-input number-input safari_only mb-0 w-100';
productChildren.appendChild(btnAdd);
//Création de l'icone dans le bouton  pour ajouter au panier
const pictureAdd = document.createElement('i');
pictureAdd.className = 'fas fa-plus';
btnAdd.appendChild(pictureAdd);

//Fonction btnAdd pour l'événement ajouter des quantités
btnAdd.addEventListener('click', function(){
    productcard.elementQuantity ++;
    localStorage.setItem('panier', JSON.stringify(addShopping));
    document.location.reload()
});


//Création du btn pour enlever la quantité du panier
const btnMinus = document.createElement('button');
btnMinus.className = 'def-number-input number-input safari_only mb-0 w-100';
productChildren.appendChild(btnMinus);
//Création de l'icone dans le bouton pour enlever la quantité du panier
const pictureMinus = document.createElement('i');
pictureMinus.className ='fas fa-minus';
btnMinus.appendChild(pictureMinus);

//Fonction btnMinus pour l'événement retirer des quantités
btnMinus.addEventListener('click', function(){
    if (productcard.elementQuantity > 1){
        productcard.elementQuantity --;
    }
    localStorage.setItem('panier', JSON.stringify(panierAjout));
    document.location.reload()
});

//Création de la constante prix unitaire
const unitPrice = document.createElement('h3');
unitPrice.className = '';
unitPrice.textContent += "Prix : " + elementPrice + "€";
product.appendChild(unitPrice);

//Création de la constante Total 
const subTotalProduct = document.createElement('h3');
subTotalProduct.className = '';
subTotalProduct.textContent += "Sous-total : " + subTotal + "€";
product.appendChild(subTotalProduct);

//Création du bouton pour permettre de supprimer le panier
const btnDelete = document.createElement('button');
btnDelete.className = 'def-number-input number-input safari_only mb-0 w-100';
product.appendChild(btnDelete);
//Création de l'icone dans le bouton btnDelete pour supprimer le panier
const pictureDelete = document.createElement('i');
pictureDelete.className = 'far fa-trash-alt';
btnDelete.appendChild(pictureDelete);

//Fonction pour l'événement supprimer le panier
btnDelete.addEventListener('click', function(){
    product.parentNode.removeChild(product);
    panierAjout.splice(i, 1);           //Splice() permet de vider ou de remplacer une partie d'un tableau
    localStorage.setItem('panier', JSON.stringify(panierAjout));
    document.location.reload(true)
});

    let totalPaye = 0;
    JSON.parse(localStorage.getItem('panier')).forEach((product)=>{
    totalPaye += product.price /100;
});
console.log ("Administration : " + totalPaye);
document.getElementById("sommeTotal").textContent = totalPaye + "€";*/


    

        
    }


}
