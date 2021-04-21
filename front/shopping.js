//LocalStorage
if(!localStorage.getItem('panier')){
    localStorage.setItem('panier', JSON.stringify([]))
};
//Récupération & affichage des produits dans le localStorage
const panierAjout = JSON.parse(localStorage.getItem('panier'));
//Récupération de l'url de l'api
const apiUrl = "http://localhost:3000/api/furniture" + "/";

//Tableau et objet demandé par l'API pour la commande
let contact;
let products = [];

//Calcul panier

//Total panier
let total = 0;
let totalCart = document.getElementById('priceTotal');
JSON.parse(localStorage.getItem('panier')).forEach((product)=>{
    total+=product.elementPrice /100 * product.elementQuantity;
    console.log(total)
})


//sous-total panier
let subTotalCart = document.getElementById('subTotal');
subTotalCart.textContent = total + ",00€";
totalCart.textContent = total + ",00€";



//Gérer la panier (Récupération de la class & création du titre de l'état du panier)
const userCart = document.querySelector('.statusCart');
const userCartTitle = document.createElement('h2');
userCartTitle.className = ('text-center');
userCart.appendChild(userCartTitle);

// gérer l'affichage du panier dans le t-body
let order = document.getElementById('order');
let orderProduct = document.getElementById('orderProduct');


if(!panierAjout.length){
    userCartTitle.textContent = "Votre panier est vide!";
}else{
    userCartTitle.textContent = "Récapitulatif des produits dans votre panier!";

    for (let i= 0; i < panierAjout.length; i++){
    const productCart = panierAjout[i];

    const elementId = productCart.elementId;
    const elementName = productCart.elementName;
    const elementVarnish = productCart.elementVarnish;
    const elementImg = productCart.elementImg;
    const elementQuantity = productCart.elementQuantity;
    const elementPrice = productCart.elementPrice /100 + "€";
    let subTotal = productCart.elementPrice /100 * productCart.elementQuantity +"€";


 




//-----------------------------------------------------------Construction de la page panier--------------------------------------------------------------------------------------
//Mise en place de la structure panier

let lineProduct = document.createElement('tr');
lineProduct.setAttribute("id", "product" +i);


let ordreSection = document.getElementById('orderSection');
//Variable pour la colone quantité
let productCount = document.getElementById('productCount');
//variable pour affichage de l'icone de la poubelle
let productDelete = document.getElementById('productDelete');

//Variable pour afficher le sous-total dans récapitulatif


//Création et récupération du nom du produit
const nameProduct = document.getElementsByClassName('name-product');
nameProduct.textContent += elementName;
console.log(elementName);


//Création et récupération de l'image du produit
let divNameProduct = document.createElement('td');
divNameProduct.className = "name-product";
let divPictureProduct = document.createElement('td');
divPictureProduct.className = 'img-product';
const picture = document.createElement('img');
picture.className = 'img-product';
picture.src = elementImg;
picture.innerHTML = `alt="${elementName}" src="${elementImg}"`;
console.log(elementImg);


//Création et récupération de la quantité du produit
let lineQuantity = document.createElement('tr');
lineQuantity.setAttribute("id","div"+i );
let pQuantity = document.createElement('td');
pQuantity.className = 'qty';
let quantityProduct = document.getElementsByClassName('qty');
quantityProduct.textContent += elementQuantity;
console.log(elementQuantity);

//Création et récupération du prix unitaire
let divUnitPriceProduct = document.createElement('td');
divUnitPriceProduct.className ='price';
let unitPriceProduct = document.getElementsByClassName('price');
unitPriceProduct.textContent += elementPrice;
console.log(elementPrice);


//Déclaration & création soustotal
let orderTotal = document.getElementById('orderTotal');
let lineSubTotalPrice = document.createElement('tr');
let subTotalProduct = document.createElement('td');
subTotalProduct.className = 'total value';
console.log(subTotal);

//Création de l'icone poubelle pour pouvoir supprimer un produit du panier
let deleteProduct = document.createElement('td');
deleteProduct.className = 'delete';
let lineProductDelete  = document.createElement('button');
lineProductDelete.setAttribute("id", "btn"+i);
const imgDelete = document.createElement('i');
imgDelete.className = 'fas fa-trash-alt';


//Fonction on supprime produit
lineProductDelete.addEventListener('click', function(){
   if(productCart.elementQuantity > 1){
    productCart.elementQuantity--;
   }
   localStorage.setItem('panier', JSON.stringify(panierAjout));
   document.location.reload()

});


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



    }
}


//Vérification du panier
checkPanier = () => {
    //Variable pour vérifier si le panier est vide ou s'il y a au moins un produit dans le panier
    let statusCart = JSON.parse(localStorage.getItem('panier'));
    //Si le panier est vide ou null 
    if(statusCart.length < 1 || statusCart == null){
        console.log("Le localStorage ne contient pas de panier");
        alert("Votre panier est vide");
        return false;
    }else{
        console.log('Votre panier contient des produits')
        //Le panier contient des produits alors on envoie l'information à l'API
        JSON.parse(localStorage.getItem('panier')).forEach((product)=>{
            products.push(product._id);
        });
        console.log(products);
        return true;
    };


};

//Formulaire

//Expression régulière pour les différents input
let formatNewsName = document.getElementById('formatNewsName');
let formatNewsFirstname = document.getElementById('formatNewsFirstname');
let formatNewsAdress = document.getElementById('formatNewsAdress');
let formatNewsCity = document.getElementById('formatNewsCity');
let checkInfos = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;

let formatNewsEmail = document.getElementById('formatNewsEmail');
let checkMail = /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/;

let formatNewsPostCode = document.getElementById('formatNewsPostCode');
let checkPostCode = /^[0-9]{5}(?:(-| )[0-9]{5})?$/;


let checkSpecialCharactere = /[§!@#$%^&*(),.?":{}|<>]+$/;


//Récupération des informations des inputs
let nameInput = document.getElementById('name');
let firstInput = document.getElementById('firstName');
let emailInput = document.getElementById('userMail');
let addressInput = document.getElementById('userAddress');
let cityInput = document.getElementById('userCity');
let postCodeInput = document.getElementById('postCode');
let btnValid = document.getElementById('validCommand');
console.log(btnValid);



//tests des différents input du formulaire
btnValid.addEventListener('click', function(event) {
    event.preventDefault();
//Check le nom
   if (checkInfos.test(nameInput.value) == false){
    formatNewsName.textContent = "Le format de votre nom est incorrect";
    formatNewsName.style.color = 'red';
    return event.preventDefault();

   } 
   else if (checkInfos.test(firstInput.value) == false){
        formatNewsFirstname.textContent = "Le format de votre prénom est incorrect";
        formatNewsFirstname.style.color = 'red';
        return event.preventDefault();
    } 
    else if (checkMail.test(emailInput.value) == false){
        formatNewsEmail.textContent = "Le format de votre mail est incorrect";
        formatNewsEmail.style.color = 'red';
        return event.preventDefault();
    }
    else if (checkInfos.test(addressInput.value) == false){
        formatNewsAdress.textContent = "Le format de votre est incorrect";
        formatNewsAdress.style.color = 'red';
        return event.preventDefault();
    }
    else if (checkInfos.test(cityInput.value) == false){
        formatNewsCity.textContent = "Le format de votre ville est incorrect";
        formatNewsCity.style.color = 'red';
        return event.preventDefault();
    }
    else if (checkPostCode.test(postCodeInput.value) == false){
        formatNewsPostCode.textContent = "Le format de votre code postal est incorrect";
        formatNewsPostCode.style.color = 'red';
        return event.preventDefault();
    }
    contact = {
        firstName : nameInput.value,
        lastName : firstInput.value,
        address : addressInput.value,
        city : cityInput.value,
        email : emailInput.value,
        postCode : postCodeInput.value
    };
    console.log(contact);


});



