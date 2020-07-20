var body = document.getElementById('body');
var info_beginning_0 = document.getElementById('info_beginning_0');
var info_beginning_1 = document.getElementById('info_beginning_1');
var choice_ceremony = document.getElementById('choice_ceremony');
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


var body_click_flag = 0;

// var choice_yes_tell_sivan = document.getElementById('choice_yes_tell_sivan');
// var info_no_tell_sivan = document.getElementById('info_no_tell_sivan');
// var info_no_tell_sivan = document.getElementById('info_no_tell_sivan');

info_beginning_0.style.display = "block";
choice_ceremony.style.display = "inline";

// body.onclick = function () {
//     if (!body_click_flag ) {
//         body.style.background = "black";
//         body.style.color = "#FFFFF8";
//
//
//     } else {
//         body.style.background = "#FFFFF8";
//         body.style.color = "black";
//
//     }
//     body_click_flag = 1 - body_click_flag;
//
// };


choice_ceremony.onclick = function () {
    choice_ceremony.style.fontWeight = "300";
    choice_ceremony.style.display = "block"
    info_beginning_1.style.display = "block";
    choice_rat.style.display = "inline";
};

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
