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

    var borbollaa = document.getElementsByClassName("borbolla-a");
    for (i=0; i<borbollaa.length; i++) {
        borbollaa[i].innerHTML="H.C. BORBOLLA A";
    }

    var borbollab = document.getElementsByClassName("borbolla-b");
    for (i=0; i<borbollab.length; i++) {
        borbollab[i].innerHTML="H.C. BORBOLLA B";
    }

    var compaa = document.getElementsByClassName("compa-a");
    for (i=0; i<compaa.length; i++) {
        compaa[i].innerHTML="CLUB COMPAÑÍA DE MARÍA A";
    }

    var compab = document.getElementsByClassName("compa-b");
    for (i=0; i<compab.length; i++) {
        compab[i].innerHTML="CLUB COMPAÑÍA DE MARÍA B";
    }

    var compostela = document.getElementsByClassName("compostela");
    for (i=0; i<compostela.length; i++) {
        compostela[i].innerHTML="C.H. COMPOSTELA";
    }

    var dominicos = document.getElementsByClassName("dominicos");
    for (i=0; i<dominicos.length; i++) {
        dominicos[i].innerHTML="CLUB AA DOMINICOS";
    }

    /* Cargar logos */

    var logo_liceo = document.getElementsByClassName("logo-liceo");
    for (i=0; i<logo_liceo.length; i++) {
        logo_liceo[i].innerHTML="<img src='./img/logos/logo-liceo.png' style='width: 35px'/>";
    }

    var logo_borbolla = document.getElementsByClassName("logo-borbolla");
    for (i=0; i<logo_borbolla.length; i++) {
        logo_borbolla[i].innerHTML="<img src='./img/logos/logo-borbolla.png' style='width: 35px'/>";
    }

    var logo_dominicos = document.getElementsByClassName("logo-dominicos");
    for (i=0; i<logo_dominicos.length; i++) {
        logo_dominicos[i].innerHTML="<img src='./img/logos/logo-dominicos.png' style='width: 35px'/>";
    }

});


/*var clubFilter = document.getElementsByClassName("selector-clubes");
for (i=0; i<clubFilter.length; i++) {
    clubFilter[i]
}*/
