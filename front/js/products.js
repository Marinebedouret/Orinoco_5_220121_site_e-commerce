//LOCALISATION DANS LE DOCUMENT HTML
const main = document.querySelector("main")
main.className = 'container'
const rowCarte = document.createElement("div")
rowCarte.className = 'row'

//APPEL DE L'API AVEC LA METHODE FETCH
fetch("http://localhost:3000/api/furniture",{
    method:'GET', headers:{'Accept':'application/json','Content-Type':'application/json'}
})
.then(response => response.json()) //then() déclenche l'objet Promise //reponse en JSON
.then(response => {
    getAllFurniture(response)
})
//FONCTION AFFICHAGE DES 5 MEUBLES
function getAllFurniture(furnitures){
    furnitures.forEach(furniture => {                           //forEach execute la fonction sur l'ensemble de produits
    //BOUCLE POUR CHAQUE FURNITURE - CREATION DE L'EMPLACEMENT DE CHAQUE ELEMENT
        const carte = document.createElement("div")             //div englobant l'ensemble du produit
        carte.className = 'card mb-3 col-10 col-lg-6'
        const name = document.createElement("h2")              //affichage du nom du produit <h2> au dessus de l'image
        name.className ='card-title'
        const picture = document.createElement("img")             //affichage de l'image 
        picture.className = 'card-img-top'
        const price = document.createElement("h3")                //affichage du prix en dessous de l'image
        price.className = 'card-text'
        const link = document.createElement("a");               //affichage du bouton
        link.className = 'btn btn-action btn-lg';
    //CREATION DU CONTENU DES ELEMENTS
        name.textContent = furniture.name
        picture.src = furniture.imageUrl
        price.textContent = furniture.price/100 +',00' + "€"
        link.href = "product.html?id=" + furniture._id
        link.textContent = "Voir le produit"
    //MISE EN PLACE DE CHAQUES ELEMENTS
        carte.appendChild(name)
        carte.appendChild(picture)
        carte.appendChild(price)
        carte.appendChild(link)
        rowCarte.appendChild(carte)
        main.appendChild(rowCarte)
        
        console.table(furnitures);
    }); 
    
}

/*try {
    getAllFurniture();
}catch (error){
    alert('Désolé le serveur ne répond pas !')
};*/



