//Localstorage
if (!localStorage.getItem('panier')){
    localStorage.setItem('panier', JSON.stringify([]))
};
const panierAjout = JSON.parse(localStorage.getItem('panier')); //Récupération & affichage des produits

//LOCALISATION DANS LE DOCUMENT HTML
const main = document.querySelector("main")
main.className = 'container'
const rowCarte = document.createElement("div")
rowCarte.className = 'row'


const parsedUrl = new URL(window.location.href);
const Params = new URLSearchParams(parsedUrl.search);
console.log(parsedUrl.searchParams.get("id"));      //Affichage de l'ID dans la console

const idFurniture = Params.get('id');               //Récupération de l'ID

async function adress(url) {
    let result = await fetch(url);
    return result.json();

};
//Récupération de l'adresse + l'id du produit
adress('http://localhost:3000/api/furniture' + "/" + idFurniture)
    .then(element => {
        console.log(element);                     //Désigne chaque élément
//Construction de la page produit unique
    const productFurniture = document.getElementById('furniture_product');
    
    const name = document.getElementById('furniture-name');
    const picture = document.createElement('img');
    picture.innerHTML =  `alt="${element.name}" `; //renseignement pour img de alt
    picture.className = 'img-fluid';
    const description = document.getElementById('description');
    const price = document.getElementById('prix');
    

    //création contenu des élément
    name.textContent = element.name
    picture.src = element.imageUrl
    description.textContent = element.description
    price.textContent = element.price/100 + ',00' +"€"

    //Mise en place de chaque élément
    productFurniture.appendChild(name);
    productFurniture.appendChild(picture);
    productFurniture.appendChild(price);
    productFurniture.appendChild(description);
    
    
    //Choix entre les différents vernis
    const choosevarnish = document.getElementById('choosevarish');
    
    //Boucle pour afficher les vernis disponibles
    for (let i = 0; i < element.varnish.length;i++) {
    const varnish = element.varnish[i];
    const myvarnish = document.createElement('option');
    choosevarnish.append(myvarnish);
    myvarnish.textContent = varnish;
    myvarnish.value = varnish;

}
   
    //Bouton panier
    const panier = document.getElementById('AddProductPanier');
    //Création du bouton pour ajouter au panier
    const btnPanier = document.createElement('a');
    btnPanier.className = "btn btn-action btn-lg";
    btnPanier.href = "shopping.html";
    btnPanier.innerHTML = 'Ajouter au panier';
    panier.append(btnPanier);


    //addEventListener sert à écouter l'événement click sur le bouton ajouter au panier
   btnPanier.addEventListener('click', function (ajout) {
    // Annule l'action par défaut de l'élément
        ajout.preventDefault()

        

        //Récupére la valeur de l'option sélectionnée (valeur = vernis du produit)
        let elementvarnish = choosevarnish.options[choosevarnish.selectedIndex].value;
        const panierAjout = JSON.parse(localStorage.getItem('panier'));
        console.log(panierAjout);
        //find() renvoie la valeur du premier élément trouvé dans le tableau qui respect la condition donnée par la fonction passé en argument
        const elementPanier = panierAjout.find (furniture => 
              furniture.idFurniture == idFurniture && furniture.elementvarnish == elementvarnish
        );
        console.table(elementPanier);

        if (elementPanier == undefined) {
            let elementImg = element.imageUrl;
            let elementName = element.name;
            let elementPrice = element.price;
            let elementQuantity = 1;
            //Ajout dans le localStorage
            panierAjout.push({elementImg,idFurniture, elementName, elementvarnish, elementPrice, elementQuantity});
        } else {
            panierAjout.forEach(product => {
                if (product.idFurniture === idFurniture) {
                  product.elementQuantity++
                }
            });
            console.log('Produit ajouté au panier', idFurniture, elementvarnish);
            alert("Produit " + element.name + " ajouté au panier en vernis " + elementvarnish)
        }
        localStorage.setItem('panier', JSON.stringify(panierAjout));

        window.location.href = 'shopping.html'
      
    });

}
)
.catch ((error) => {
    alert ('Désolé le serveur ne répond pas ! Veuillez réessayez prochainement !');
    
});





   

