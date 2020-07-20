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


function makeInvisible(elementId) {
    document.getElementById(elementId).style.opacity = 0;
}

function makeVisibleOnHover(elementId) {
    var elem = document.getElementById(elementId);
    elem.onmouseover = function () {
        elem.style.opacity = 1;


    };

}


function onOpenSite() {
    console.log("Site opened");
    // showElement('info0')
    // showElement("info1")
    // makeInvisible("info1")
    // makeVisibleOnHover("info1")
}

onOpenSite()
