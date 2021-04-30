//Récupération des éléments de la commande
const total = JSON.parse(localStorage.getItem('priceTotal'));
const orderId = JSON.parse(localStorage.getItem('orderId'));
const firstName = JSON.parse(localStorage.getItem('firstName'));
const lastName = JSON.parse(localStorage.getItem('lastName'));


// orderConfirmation pour afficher les éléments de la commande
const confirm = document.getElementById('orderConfirmation');


//Mise en place de la structure de la page order-confirm
const confirmTitle = document.createElement('h1');
confirmTitle.className = 'card';
confirmTitle.innerHTML = 'Merci pour votre commande';
confirm.append(confirmTitle);

const numberOrder = document.createElement ('p');
numberOrder.className = 'card-text';
numberOrder.style.color = "#607D8B";
numberOrder.innerHTML = "Numéro de votre commande " + orderId;
confirm.append(numberOrder);


const confirmText = document.createElement('p');
confirmText.className = 'card-text';
confirmText.innerHTML = lastName + " " + firstName + " " + `toute l'équipe Orinoco vous remercie pour votre commande.`;
confirm.append(confirmText);

const confirmTotal = document.createElement('p');
confirmTotal.className = 'card-text';
confirmTotal.innerHTML = 'Le montant total de votre commande est de ' + total + ' €';
confirm.append(confirmTotal);

//Retour vers la page d'accueil + localStorage vide
 const backHome = document.createElement('button');
 backHome.className = 'round-black-btn';
 backHome.innerHTML = 'Accueil';
 confirm.append(backHome);

 backHome.addEventListener('click', function(){
     window.location.href="../index.html";
 });
