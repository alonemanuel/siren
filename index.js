var body = document.getElementById('body');
var info_beginning = document.getElementById('info_beginning');
var choice_rat = document.getElementById("choice_rat");
var choice_yes_rat = document.getElementById('choice_yes_rat');
var choice_no_rat = document.getElementById('choice_no_rat');
var info_no_rat = document.getElementById('info_no_rat');
var info_yes_rat = document.getElementById('info_yes_rat');
var choice_tell_sivan = document.getElementById('choice_tell_sivan');
var choice_siren = document.getElementById('choice_siren');
var choice_no_tell_sivan = document.getElementById('choice_no_tell_sivan');
var choice_yes_tell_sivan = document.getElementById('choice_yes_tell_sivan');
var info_no_tell_sivan = document.getElementById('info_no_tell_sivan');
var info_yes_tell_sivan = document.getElementById('info_yes_tell_sivan');
var choice_run_siren = document.getElementById('choice_run_siren');
var choice_talk_siren = document.getElementById('choice_talk_siren');
var info_run_siren = document.getElementById('info_run_siren');
var info_talk_siren = document.getElementById('info_talk_siren');


// var choice_yes_tell_sivan = document.getElementById('choice_yes_tell_sivan');
// var info_no_tell_sivan = document.getElementById('info_no_tell_sivan');
// var info_no_tell_sivan = document.getElementById('info_no_tell_sivan');

info_beginning.style.display = "block";
choice_rat.style.display = "inline";

choice_no_rat.onclick = function () {
    // body.style.background = "red";
    // body.style.color = "white";
    choice_no_rat.style.fontWeight = "300";
    choice_yes_rat.style.visibility = "hidden";
    choice_no_rat.style.display = "block"
    info_no_rat.style.display = "block";
    choice_tell_sivan.style.display = "inline";
};

choice_yes_rat.onclick = function () {
    // body.style.background = "red";
    // body.style.color = "white";
    choice_yes_rat.style.fontWeight = "300";
    choice_no_rat.style.visibility = "hidden";
    choice_yes_rat.style.display = "block"
    info_yes_rat.style.display = "block";
    choice_siren.style.display = "inline";
};

choice_no_tell_sivan.onclick = function () {
    // body.style.background = "red";
    // body.style.color = "white";
    choice_no_tell_sivan.style.fontWeight = "300";
    choice_yes_tell_sivan.style.visibility = "hidden";
    choice_no_tell_sivan.style.display = "block"
    info_no_tell_sivan.style.display = "block";
};


choice_yes_tell_sivan.onclick = function () {
    // body.style.background = "red";
    // body.style.color = "white";
    choice_yes_tell_sivan.style.fontWeight = "300";
    choice_no_tell_sivan.style.visibility = "hidden";
    choice_yes_tell_sivan.style.display = "block"
    info_yes_tell_sivan.style.display = "block";
};


choice_run_siren.onclick = function () {
    // body.style.background = "red";
    // body.style.color = "white";
    choice_run_siren.style.fontWeight = "300";
    choice_talk_siren.style.visibility = "hidden";
    choice_run_siren.style.display = "block"
    info_run_siren.style.display = "block";
};
choice_talk_siren.onclick = function () {
    // body.style.background = "red";
    // body.style.color = "white";
    choice_talk_siren.style.fontWeight = "300";
    choice_run_siren.style.visibility = "hidden";
    choice_talk_siren.style.display = "block"
    info_talk_siren.style.display = "block";
};

function showElement(elementId) {
    document.getElementById(elementId).style.display = "block";
}

function hideElement(elementId) {
    document.getElementById(elementId).style.display = "none";

}


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
