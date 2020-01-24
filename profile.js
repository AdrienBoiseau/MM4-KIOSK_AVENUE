// Ferme le popup lorsque l'on clique en dehors de celui-ci
var popup = document.getElementById('popup');
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
};
window.onload = function() {
    document.getElementById('popup').style.display='block';
};