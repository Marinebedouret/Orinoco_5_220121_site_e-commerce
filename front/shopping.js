//LocalStorage
if(!localStorage.getItem('panier')){
    localStorage.setItem('panier', JSON.stringify([]))
};
const panierAjout = JSON.parse(localStorage.getItem('panier'));

    //Vérification s'il y a des produits dans la panier
    if(JSON.parse(localStorage.getItem("panier")).length > 0)
    //Permet de supprimer le message votre panier est vide lorsqu'il y a des produits dans le panier

//-----------------------------------------------------------Construction de la page panier--------------------------------------------------------------------------------------
//Mise en place de la structure panier

JSON.parse(localStorage.getItem('panier')).forEach((product)=>{
    console.table(product);

let order = document.getElementById('order');
let orderProduct = document.getElementById('orderProduct');


let lineProduct = document.createElement('tr');


let ordreSection = document.getElementById('orderSection');
//Variable pour la colone quantité
let productCount = document.getElementById('productCount');
//variable pour affichage de l'icone de la poubelle
let productDelete = document.getElementById('productDelete');

//Variable pour afficher le sous-total dans récapitulatif


//Création et récupération du nom du produit
const nameProduct = document.getElementsByClassName('name-product');
const elementName = product.elementName;
nameProduct.textContent += elementName;
console.log(elementName);


//Création et récupération de l'image du produit
let divNameProduct = document.createElement('td');
divNameProduct.className = "name-product";
let divPictureProduct = document.createElement('td');
divPictureProduct.className = 'img-product';
const picture = document.createElement('img');
picture.className = 'img-product';
const elementImg = product.elementImg;
picture.src = elementImg;
picture.innerHTML = `alt="${elementName}" src="${elementImg}"`;
console.log(elementImg);


//Création et récupération de la quantité du produit
let lineQuantity = document.createElement('tr');
let pQuantity = document.createElement('td');
pQuantity.className = 'qty';
let quantityProduct = document.getElementsByClassName('qty');
const elementQuantity = product.elementQuantity;
quantityProduct.textContent += elementQuantity;
console.log(elementQuantity);

//Création et récupération du prix unitaire
let divUnitPriceProduct = document.createElement('td');
divUnitPriceProduct.className ='price';
let unitPriceProduct = document.getElementsByClassName('price');
const elementPrice = product.elementPrice / 100 + "€" ;
unitPriceProduct.textContent += elementPrice;
console.log(elementPrice);


//Déclaration & création soustotal
let orderTotal = document.getElementById('orderTotal');
let lineSubTotalPrice = document.createElement('tr');
let subTotalProduct = document.createElement('td');
subTotalProduct.id = 'total';
subTotalProduct.className = 'value';
const subTotal = product.elementPrice * product.elementQuantity +"€";
console.log(subTotal);

//Création de l'icone poubelle pour pouvoir supprimer un produit du panier
let deleteProduct = document.createElement('td');
deleteProduct.className = 'delete';
let lineProductDelete  = document.createElement('button');
const imgDelete = document.createElement('i');
imgDelete.className = 'fas fa-trash-alt';


//Fonction au clic on supprime produit
lineProductDelete.addEventListener('click', function(){
    order.parentNode.removeChild(order);
    panierAjout.splice(i, 1);
    localStorage.setItem('panier', JSON.stringify(panierAjout));
    document.location.reload();

});


//Class pour css
let i = 0;
lineProduct.setAttribute("id", "product" +i);
lineQuantity.setAttribute("id","div"+i );
lineSubTotalPrice.setAttribute("id", "total"+i);
lineProductDelete.setAttribute("id", "btn"+i);
i++;




order.appendChild(ordreSection);
ordreSection.appendChild(orderProduct);
orderProduct.appendChild(lineProduct);
lineProduct.append(divPictureProduct);
divPictureProduct.append(picture);
lineProduct.append(divNameProduct);
divNameProduct.append(elementName);
lineProduct.append(divUnitPriceProduct);
divUnitPriceProduct.append(elementPrice);
ordreSection.append(productCount);
productCount.appendChild(lineQuantity);
lineQuantity.appendChild(pQuantity);
pQuantity.append(elementQuantity);
ordreSection.appendChild(orderTotal);
orderTotal.appendChild(lineSubTotalPrice);
lineSubTotalPrice.appendChild(subTotalProduct);
subTotalProduct.append(subTotal);
ordreSection.appendChild(productDelete);
productDelete.appendChild(deleteProduct);
deleteProduct.appendChild(lineProductDelete);
lineProductDelete.appendChild(imgDelete);


})


