var btn_en = document.getElementById("boton_encripta");
var btn_desen = document.getElementById("boton_desencripta");
var btn_copy = document.getElementById("boton_copiar");

var textBox = document.getElementById("box-area");
var muniecoContainer = document.getElementById("munieco-container")
var noMessageAlert = document.getElementById("alerta-no-message")

var textContainer = document.getElementById("text-container")
var parrafoSalida = document.getElementById("finalP")

function previo_encripta(){
    if(textBox.value!=" "){
        muniecoContainer.style.display = "none"; 
        noMessageAlert.style.display ="none";
        textContainer.style.display = "flex";
        var newtext = encripta(textBox.value);
        parrafoSalida.textContent=(newtext);
        btn_copy.style.visibility="visible";
    }

}
function previo_desencripta(){
    if(textBox.value!=""){
        muniecoContainer.style.display = "none"; 
        noMessageAlert.style.display ="none";
        textContainer.style.display = "flex";
        var newtext = desencripta(textBox.value);
        parrafoSalida.textContent=(newtext);
        btn_copy.style.visibility="visible";
    }
}

function encripta(texto){
    var mensajeSalida=texto
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");
    return mensajeSalida
}
function desencripta(texto){
    var mensajeSalida=texto
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
    return mensajeSalida
}

function copiar(){
    var texto = parrafoSalida.textContent;
    navigator.clipboard.writeText(texto);
    textBox.value="";
}
btn_en.onclick=previo_encripta;
btn_desen.onclick=previo_desencripta;
btn_copy.onclick=copiar;
