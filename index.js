var zap, kon, dez, alt, imp, ekv, p, q;
var q, q1, q2;
var p, p1, p2;
q = 1;
p = 1;
var chek = true;
var chek1 = true;
window.onload = function() {
    p1 = document.getElementById("ppp");
    q1 = document.getElementById("qqq");
    zap = document.getElementById("zap");
    kon = document.getElementById("kon");
    dez = document.getElementById("dez");
    alt = document.getElementById("alt");
    imp = document.getElementById("imp");
    ekv = document.getElementById("ekv");
    zap.onclick = zapr;
    kon.onclick = konn;
    dez.onclick = dezz;
    alt.onclick = altt;
    imp.onclick = impp;
    ekv.onclick = ekvv;
    q1.onclick = q2;
    p1.onclick = p2;
}

function zapr() {
    if (p == 1 && q == 1) {
        document.getElementById("result").innerHTML = "F F";
    }
    if (p == 0 && q == 0) {
        document.getElementById("result").innerHTML = "T T";
    }
    if (p == 1 && q == 0) {
        document.getElementById("result").innerHTML = "F T";
    }
    if (p == 0 && q == 1) {
        document.getElementById("result").innerHTML = "T F";
    }
}

function konn() {
    if (p == 1 && q == 1) {
        document.getElementById("result").innerHTML = "T";
    }
    if (p == 0 && q == 0) {
        document.getElementById("result").innerHTML = "F";
    }
    if (p == 1 && q == 0) {
        document.getElementById("result").innerHTML = "F";
    }
    if (p == 0 && q == 1) {
        document.getElementById("result").innerHTML = "F";
    }
}

function dezz() {
    if (p == 1 && q == 1) {
        document.getElementById("result").innerHTML = "T";
    }
    if (p == 0 && q == 0) {
        document.getElementById("result").innerHTML = "F";
    }
    if (p == 1 && q == 0) {
        document.getElementById("result").innerHTML = "T";
    }
    if (p == 0 && q == 1) {
        document.getElementById("result").innerHTML = "T";
    }
}

function altt() {
    if (p == 1 && q == 1) {
        document.getElementById("result").innerHTML = "F";
    }
    if (p == 0 && q == 0) {
        document.getElementById("result").innerHTML = "F";
    }
    if (p == 1 && q == 0) {
        document.getElementById("result").innerHTML = "T";
    }
    if (p == 0 && q == 1) {
        document.getElementById("result").innerHTML = "T";
    }
}

function impp() {
    if (p == 1 && q == 1) {
        document.getElementById("result").innerHTML = "T";
    }
    if (p == 0 && q == 0) {
        document.getElementById("result").innerHTML = "T";
    }
    if (p == 1 && q == 0) {
        document.getElementById("result").innerHTML = "F";
    }
    if (p == 0 && q == 1) {
        document.getElementById("result").innerHTML = "T";
    }
}

function ekvv() {
    if (p == 1 && q == 1) {
        document.getElementById("result").innerHTML = "T";
    }
    if (p == 0 && q == 0) {
        document.getElementById("result").innerHTML = "T";
    }
    if (p == 1 && q == 0) {
        document.getElementById("result").innerHTML = "F";
    }
    if (p == 0 && q == 1) {
        document.getElementById("result").innerHTML = "F";
    }
}




function q2() {

    if (chek) {
        q1.innerHTML = "F"
        q = 0;
    }
    if (!chek) {
        q1.innerHTML = "T"
        q = 1;
    }
    chek = !chek;
}

function p2() {

    if (chek1) {
        p1.innerHTML = "F"
        p = 0;
    }
    if (!chek1) {
        p1.innerHTML = "T"
        p = 1;
    }
    chek1 = !chek1;
}
