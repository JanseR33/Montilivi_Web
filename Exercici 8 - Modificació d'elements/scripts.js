const txtFelicitacio = document.getElementById("txtFelicitacio");
const colorText = document.getElementById("colorText");
const tamanyText = document.getElementById("tamanyText");
const ubicacioText = document.getElementById("ubicacioText");
const imatgeFons = document.getElementById("imatgeFons");
const btnCrear = document.getElementById("btnCrear");
const imatgePostal = document.getElementById("imatgePostal");
const textPostal = document.getElementById("textPostal");

btnCrear.onclick = function () {

    textPostal.innerText = txtFelicitacio.value;

    textPostal.style.color = colorText.value;

    textPostal.style.fontSize = tamanyText.value + "px";

    textPostal.style.top = ubicacioText.value;

    imatgePostal.src = imatgeFons.value;
};