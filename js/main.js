/**
 * Created by Manu on 21/12/16.
 */


var filtroEquipo;

var updateFilters = function(){
    var trArray = document.getElementById('tablaPrincipal').rows;
    for(var trIndex=1; trIndex<trArray.length; trIndex++){
        //Iterar dentro de los tr de la tablaPrincipal
        trArray[trIndex].style.display = 'table-row';
        var tdArray = trArray[trIndex].cells;
        var equipoA = tdArray[5].innerText;
        var equipoB = tdArray[7].innerText;
        //Comprobar filtro por equipo
        if(equipoA != filtroEquipo && equipoB != filtroEquipo){
            trArray[trIndex].style.display = 'none';
        }
        if (filtroEquipo == "all-clubs") {
            trArray[trIndex].style.display = '';
        }
    }
}

var addSelectorEvents = function(){
    var clubSelector = document.getElementById('selector-clubes');
    clubSelector.addEventListener("change", function(){
        if(filtroEquipo != clubSelector.options[clubSelector.selectedIndex].value){
            filtroEquipo = clubSelector.options[clubSelector.selectedIndex].value;
            updateFilters();
        }
    });
}

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

    var traviesas = document.getElementsByClassName("traviesas");
    for (i=0; i<traviesas.length; i++) {
        traviesas[i].innerHTML="H.C. TRAVIESAS";
    }

    var raxoi = document.getElementsByClassName("raxoi");
    for (i=0; i<raxoi.length; i++) {
        raxoi[i].innerHTML="H.C. RAXOI";
    }

    var ordenes = document.getElementsByClassName("ordenes");
    for (i=0; i<ordenes.length; i++) {
        ordenes[i].innerHTML="A.C. ÓRDENES";
    }

    var lubians = document.getElementsByClassName("lubians");
    for (i=0; i<lubians.length; i++) {
        lubians[i].innerHTML="ESCOLA LUBIÁNS";
    }

    /* Cargar logos */

    var logo_liceo = document.getElementsByClassName("logo-liceo");
    for (i=0; i<logo_liceo.length; i++) {
        logo_liceo[i].innerHTML="<img src='./img/logos/logo-liceo.png' alt='Logo Liceo' style='width: 35px'/>";
    }

    var logo_borbolla = document.getElementsByClassName("logo-borbolla");
    for (i=0; i<logo_borbolla.length; i++) {
        logo_borbolla[i].innerHTML="<img src='./img/logos/logo-borbolla.png' alt='Logo Borbolla' style='width: 35px'/>";
    }

    var logo_dominicos = document.getElementsByClassName("logo-dominicos");
    for (i=0; i<logo_dominicos.length; i++) {
        logo_dominicos[i].innerHTML="<img src='./img/logos/logo-dominicos.png' alt='Logo Dominicos' style='width: 35px'/>";
    }

    var logo_compania = document.getElementsByClassName("logo-compania");
    for (i=0; i<logo_compania.length; i++) {
        logo_compania[i].innerHTML="<img src='./img/logos/logo-compania.png' alt='Logo Compañía' style='width: 35px'/>";
    }

    var logo_compos = document.getElementsByClassName("logo-compos");
    for (i=0; i<logo_compos.length; i++) {
        logo_compos[i].innerHTML="<img src='./img/logos/logo-compos.png' alt='Logo Compostela' style='width: 35px'/>";
    }

    var logo_lubians = document.getElementsByClassName("logo-lubians");
    for (i=0; i<logo_lubians.length; i++) {
        logo_lubians[i].innerHTML="<img src='./img/logos/logo-lubians.png' alt='Logo Lubiáns' style='width: 35px'/>";
    }

    var logo_traviesas = document.getElementsByClassName("logo-traviesas");
    for (i=0; i<logo_traviesas.length; i++) {
        logo_traviesas[i].innerHTML="<img src='./img/logos/logo-traviesas.png' alt='Logo Traviesas' style='width: 35px'/>";
    }

    var logo_raxoi = document.getElementsByClassName("logo-raxoi");
    for (i=0; i<logo_raxoi.length; i++) {
        logo_raxoi[i].innerHTML="<img src='./img/logos/logo-raxoi.png' alt='Logo Raxoi' style='width: 35px'/>";
    }

    var logo_ordenes = document.getElementsByClassName("logo-ordenes");
    for (i=0; i<logo_ordenes.length; i++) {
        logo_ordenes[i].innerHTML="<img src='./img/logos/logo-ordenes.png' alt='Logo Órdenes' style='width: 35px'/>";
    }

    addSelectorEvents();

});