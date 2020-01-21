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

document.getElementById("boutonFooterSuivant").onclick = function () {
  let mainSelect = document.getElementById("mainSelect").style.display;
  let depotSelect = document.getElementById("depotSelect").style.display;
  if (mainSelect === "block" || depotSelect === "block") {
    document.getElementById("etape1").style.display = "none";
    document.getElementById("etape2").style.display = "block";
    document.getElementById("boutonFooterSuivant").style.display = "none";
    document.getElementById("boutonFooterValider").style.display = "block";
  } else {
    alert("Vous devez sélectionner une méthode d'emprunt !");
  }
};

document.getElementById("boutonFooterValider").onclick = function () {
  document.getElementById("etape1").style.display = "none";
  document.getElementById("etape2").style.display = "none";
  document.getElementById("etape3").style.display = "block";
  document.getElementById("boutonFooterSuivant").style.display = "none";
  document.getElementById("boutonFooterValider").style.display = "none";
  document.getElementById("boutonFooterOK").style.display = "block";

};