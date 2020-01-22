//Rezize du trait pour iPhone 5S
function rezizeTrait() {
  let trait = document.getElementById("trait");
  let cercle1 = document.getElementById("cercle1");
  let cercle2 = document.getElementById("cercle2");
  let cercle3 = document.getElementById("cercle3");


  if(window.innerWidth<=360) {
    trait.style.width = "40%";
    cercle1.style.width = "55px";
    cercle1.style.height = "55px";
    cercle1.style.lineHeight = "5px";
    cercle2.style.width = "55px";
    cercle2.style.height = "55px";
    cercle2.style.lineHeight = "5px";
    cercle3.style.width = "55px";
    cercle3.style.height = "55px";
    cercle3.style.lineHeight = "5px";

  }
  if(window.innerWidth>360 && window.innerWidth<=500) {
    trait.style.width = "53.8%";
    trait.style.marginTop = "7%";
    cercle1.style.width = "70px";
    cercle1.style.height = "70px";
    cercle1.style.lineHeight = "25px";
    cercle2.style.width = "70px";
    cercle2.style.height = "70px";
    cercle2.style.lineHeight = "25px";
    cercle3.style.width = "70px";
    cercle3.style.height = "70px";
    cercle3.style.lineHeight = "25px";
  }
  if(window.innerWidth>500 ) {
    trait.style.width = "58%";
    trait.style.marginLeft = "11%";
    trait.style.marginTop = "6%";
  }
}
//Time interval de 0,01 seconde pour rezize
setInterval(function(){
  rezizeTrait();
}, 1);


//Sélection dépôt
document.getElementById("depot").onclick = function () {

  let main = document.getElementById("mainmain");
  let depot = document.getElementById("depot");
  let depotSelect = document.getElementById("depotSelect").style.display;
  let mainSelect = document.getElementById("mainSelect").style.display;

  //dépot pas sélectionné et pas le main à main non plus
  if (depotSelect === "none" && mainSelect === "none") {

    depot.style.backgroundColor = "#02DA91";
    document.getElementById("textDepot").style.color = "white";
    document.getElementById("depotSelect").style.display = "block";
    document.getElementById("depotNotSelect").style.display = "none";

  //dépot pas sélectionné mais la main si
  } else if (mainSelect === "block" && depotSelect === "none") {

    depot.style.backgroundColor = "#02DA91";
    document.getElementById("textDepot").style.color = "white";
    document.getElementById("depotSelect").style.display = "block";
    document.getElementById("depotNotSelect").style.display = "none";
    main.style.backgroundColor = "transparent";
    document.getElementById("textMain").style.color = "#02DA91";
    document.getElementById("mainSelect").style.display = "none";
    document.getElementById("mainNotSelect").style.display = "block";

  //dépot sélectionné et main non
  } else {

    depot.style.backgroundColor = "transparent";
    document.getElementById("textDepot").style.color = "#02DA91";
    document.getElementById("depotSelect").style.display = "none";
    document.getElementById("depotNotSelect").style.display = "block";

  }
};

//Sélection main à main
document.getElementById("mainmain").onclick = function () {

  let depot = document.getElementById("depot");
  let main = document.getElementById("mainmain");
  let mainSelect = document.getElementById("mainSelect").style.display;
  let depotSelect = document.getElementById("depotSelect").style.display;

  //main pas sélectionné et pas dépot non plus
  if (mainSelect === "none" && depotSelect === "none") {

    main.style.backgroundColor = "#02DA91";
    document.getElementById("textMain").style.color = "white";
    document.getElementById("mainSelect").style.display = "block";
    document.getElementById("mainNotSelect").style.display = "none";

  //main pas sélectionné mais la dépot si
  } else if (mainSelect === "none" && depotSelect === "block") {

    depot.style.backgroundColor = "transparent";
    document.getElementById("textDepot").style.color = "#02DA91";
    document.getElementById("depotSelect").style.display = "none";
    document.getElementById("depotNotSelect").style.display = "block";
    main.style.backgroundColor = "#02DA91";
    document.getElementById("textMain").style.color = "white";
    document.getElementById("mainSelect").style.display = "block";
    document.getElementById("mainNotSelect").style.display = "none";

   //main sélectionné et dépot non
  } else {

    main.style.backgroundColor = "transparent";
    document.getElementById("textMain").style.color = "#02DA91";
    document.getElementById("mainSelect").style.display = "none";
    document.getElementById("mainNotSelect").style.display = "block";

  }
};

/* PASSAGE ÉTAPE 1 -> ÉTAPE 2 */
document.getElementById("boutonFooterSuivant").onclick = function () {

  let mainSelect = document.getElementById("mainSelect").style.display;
  let depotSelect = document.getElementById("depotSelect").style.display;

  let cercle1 = document.getElementById("cercle1");
  let cercle2 = document.getElementById("cercle2");

  //check si une méthode d'emprunt est select ou non ?
  if (mainSelect === "block" || depotSelect === "block") {
    document.getElementById("etape1").style.display = "none";
    document.getElementById("etape2").style.display = "block";
    document.getElementById("boutonFooterSuivant").style.display = "none";
    document.getElementById("boutonFooterValider").style.display = "block";
    cercle1.style.background = "white";
    cercle1.style.color = "#02DA91";
    cercle1.style.border = "2px solid #02DA91";
    cercle2.style.background = "#02DA91";
    cercle2.style.color = "white";
    cercle2.style.border = "2px solid #02DA91";
  } else {
    alert("Vous devez sélectionner une méthode d'emprunt !");
  }
};
/* PASSAGE ÉTAPE 2 -> ÉTAPE 3 */
document.getElementById("boutonFooterValider").onclick = function () {

  let cercle2 = document.getElementById("cercle2");
  let cercle3 = document.getElementById("cercle3");

  document.getElementById("etape1").style.display = "none";
  document.getElementById("etape2").style.display = "none";
  document.getElementById("etape3").style.display = "block";
  document.getElementById("boutonFooterSuivant").style.display = "none";
  document.getElementById("boutonFooterValider").style.display = "none";
  document.getElementById("boutonFooterOK").style.display = "block";
  cercle2.style.background = "white";
  cercle2.style.color = "#02DA91";
  cercle2.style.border = "2px solid #02DA91";
  cercle3.style.background = "#02DA91";
  cercle3.style.color = "white";
  cercle3.style.border = "2px solid #02DA91";

};

/* PASSAGE ÉTAPE 3 ou ÉTAPE 2 -> ÉTAPE 1*/
document.getElementById("cercle1").onclick = function () {

  let cercle1 = document.getElementById("cercle1");
  let cercle2 = document.getElementById("cercle2");
  let cercle3 = document.getElementById("cercle3");
  document.getElementById("etape1").style.display = "block";
  document.getElementById("etape2").style.display = "none";
  document.getElementById("etape3").style.display = "none";
  document.getElementById("boutonFooterSuivant").style.display = "block";
  document.getElementById("boutonFooterValider").style.display = "none";
  document.getElementById("boutonFooterOK").style.display = "none";
  cercle2.style.background = "white";
  cercle2.style.color = "#02DA91";
  cercle2.style.border = "2px solid #02DA91";
  cercle1.style.background = "#02DA91";
  cercle1.style.color = "white";
  cercle1.style.border = "2px solid #02DA91";
  cercle3.style.background = "white";
  cercle3.style.color = "#02DA91";
  cercle3.style.border = "2px solid #02DA91";

};

/* PASSAGE ÉTAPE 3 -> ÉTAPE 2*/
document.getElementById("cercle2").onclick = function () {

  let mainSelect = document.getElementById("mainSelect").style.display;
  let depotSelect = document.getElementById("depotSelect").style.display;
  let cercle1 = document.getElementById("cercle1");
  let cercle2 = document.getElementById("cercle2");
  let cercle3 = document.getElementById("cercle3");
  //check si une méthode d'emprunt est select ou non ?
  if (mainSelect === "block" || depotSelect === "block") {
    document.getElementById("etape1").style.display = "none";
    document.getElementById("etape2").style.display = "block";
    document.getElementById("etape3").style.display = "none";
    document.getElementById("boutonFooterSuivant").style.display = "none";
    document.getElementById("boutonFooterValider").style.display = "block";
    document.getElementById("boutonFooterOK").style.display = "none";
    cercle1.style.background = "white";
    cercle1.style.color = "#02DA91";
    cercle1.style.border = "2px solid #02DA91";
    cercle2.style.background = "#02DA91";
    cercle2.style.color = "white";
    cercle2.style.border = "2px solid #02DA91";
    cercle3.style.background = "white";
    cercle3.style.color = "#02DA91";
    cercle3.style.border = "2px solid #02DA91";
  } else {
    alert("Vous devez sélectionner une méthode d'emprunt !");
  }



};