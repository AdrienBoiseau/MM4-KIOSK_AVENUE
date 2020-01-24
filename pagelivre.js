document.getElementById("plusResume").onclick = function () {
    document.getElementById("resumeNonComplet").style.display = "none";
    document.getElementById("resumeComplet").style.display = "block";

};
document.getElementById("moinsResume").onclick = function () {
    document.getElementById("resumeNonComplet").style.display = "block";
    document.getElementById("resumeComplet").style.display = "none";
};
document.getElementById("avisPlus").onclick = function () {
    document.getElementById("avisNonComplet").style.display = "none";
    document.getElementById("avisComplet").style.display = "block";

};
document.getElementById("avisMoins").onclick = function () {
    document.getElementById("avisNonComplet").style.display = "block";
    document.getElementById("avisComplet").style.display = "none";
};