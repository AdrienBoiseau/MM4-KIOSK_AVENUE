var livres = [['Les Mémoires de Zeus', 'images/livres/livre1.png'],['The book of Strange new Things', 'images/livres/livre2.png'], ['The Spy\'s Son', 'images/livres/livre5.png'], ['The Washington Connection and Third World Fascism','images/livres/livre3.png' ],['A Breath of Life','images/livres/livre4.png']];

document.getElementById("recherche").onkeyup = function () {
    let recherche = document.getElementById("recherche").value;

    //reset des results à chaque caractères tapé
    var elements = document.getElementsByClassName('Result');

    //A CORRIGER (crash sur la suppression car il supprime un élément null)
    try {
        elementsLength = elements.length;
        for (var y = 0 ; y < elementsLength ; y++) {
            elements[y].remove();
        }
    }
    catch(error) {
        elements[0].remove();

    }

    //Si la recherche n'est pas vide alors chercher les results
    if (recherche !== "") {

        document.getElementById("categories").style.display = "none";
        document.getElementById("titre").style.display = "none";
        document.getElementById("resultRecherche").style.display = "block";

        //parcours du tableau de livre
        for (let i = 0; i < livres.length; i++) {
            let rechercheLower = recherche.toLowerCase();
            let livreLower = livres[i][0].toLowerCase();

            let regex = '[a-z]*' + rechercheLower + '[a-z]*';

            if (livreLower.match(new RegExp(regex))) {

                var newDiv = document.createElement("div");
                newDiv.className = "Result";
                var newA = document.createElement("a");
                newA.href = "pagelivre.html";
                var titre = document.createElement("p");
                titre.innerHTML = livres[i][0];
                var image = document.createElement("img");
                image.src = livres[i][1];
                newDiv.appendChild(newA);
                newA.appendChild(image);
                newA.appendChild(titre);

                // ajoute le nouvel élément créé et son contenu dans le DOM
                var parentDiv = document.getElementById("card");
                parentDiv.append(newDiv);

            }
        }
    }
    //suppression des résultats si on ne tape plus rien
    else {
        document.getElementById("categories").style.display = "block";
        document.getElementById("titre").style.display = "block";
        document.getElementById("resultRecherche").style.display = "none";

    }


};