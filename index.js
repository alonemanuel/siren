function showElement(elementId) {
    document.getElementById(elementId).style.display = "block";
}

function hideElement(elementId) {
    document.getElementById(elementId).style.display = "none";

}

var no_rat = document.getElementById("no_rat");
no_rat.onclick = function () {
    showElement("no_rat_info")
    hideElement("rat")
};
var rat = document.getElementById("rat");
rat.onclick = function () {
    showElement("rat_info")
};

console.log("bla");