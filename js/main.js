/**
 * Created by Manu on 21/12/16.
 */

document.addEventListener("DOMContentLoaded", function loadLeagues() {

    /* Cargar categoría */

    var patines = document.getElementsByClassName("patines");
    for (i = 0; i < patines.length; i++) {
        patines[i].innerHTML = "HP";
    }

    /* Cargar competición */

    var benja1 = document.getElementsByClassName("patines-liga-benjamin-1");
    for (i = 0; i < benja1.length; i++) {
        benja1[i].innerHTML = "LIGA BENJAMÍN 1ª";
    }

    var seniorAut = document.getElementsByClassName("patines-liga-senior-autonomica");
    for (i=0; i<seniorAut.length; i++) {
        seniorAut[i].innerHTML="LIGA SENIOR AUTONÓMICA"
    }

    /* Cargar nombre de equipo */

    var liceoa = document.getElementsByClassName("liceo-a");
    for (i=0; i<liceoa.length; i++) {
        liceoa[i].innerHTML="H.C. LICEO A";
    }

    var liceob = document.getElementsByClassName("liceo-b");
    for (i=0; i<liceob.length; i++) {
        liceob[i].innerHTML="H.C. LICEO B";
    }

    var borbolla = document.getElementsByClassName("borbolla-a");
    for (i=0; i<borbolla.length; i++) {
        borbolla[i].innerHTML="H.C. BORBOLLA A";
    }

    var dominicos = document.getElementsByClassName("dominicos");
    for (i=0; i<dominicos.length; i++) {
        dominicos[i].innerHTML="CLUB AA DOMINICOS";
    }

    /* Cargar logos */

    var liceo = document.getElementsByClassName("logo-liceo");
    var logo = document.createElement("logo");
    logo.src="../img/logos/logo-liceo.png";
    for (i=0; i<liceo.length; i++) {
        liceo[i].innerHTML="<img src='./img/logos/logo-liceo.png' style='width: 35px'/>";
    }

    var borbolla = document.getElementsByClassName("logo-borbolla");
    for (i=0; i<borbolla.length; i++) {
        borbolla[i].innerHTML="<img src='./img/logos/logo-borbolla.png' style='width: 35px'/>";
    }

    var dominicos = document.getElementsByClassName("logo-dominicos");
    for (i=0; i<dominicos.length; i++) {
        dominicos[i].innerHTML="<img src='./img/logos/logo-dominicos.png' style='width: 35px'/>";
    }

});


/*var clubFilter = document.getElementsByClassName("selector-clubes");
for (i=0; i<clubFilter.length; i++) {
    clubFilter[i]
}*/
