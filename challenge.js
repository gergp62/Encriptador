var entradaDatos = document.querySelector("#text-encriptar");
var mensaje = document.querySelector("#text-copiar");

function btnEncriptar(){

    var textoEncriptado = encriptar(entradaDatos.value);
    mensaje.value = textoEncriptado;
    
}

function btnDesencriptar(){

    var textoDesencriptado = desencriptar(entradaDatos.value);
    mensaje.value = textoDesencriptado;
}

function encriptar(entradaEncriptar) {

    let reglas = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    entradaEncriptar = entradaEncriptar.toLowerCase();
    for( let i=0; i < reglas.length; i++){
        if(entradaEncriptar.includes(reglas[i][0])  ){
            entradaEncriptar = entradaEncriptar.replaceAll(reglas[i][0], reglas[i][1])
        }
    }
    document.getElementById("sinMensaje").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "unset";
    return entradaEncriptar;

}

function desencriptar(entradaDesencriptar) {
    let reglas1 = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    entradaDesencriptar = entradaDesencriptar.toLowerCase();
    for( let i=0; i < reglas1.length; i++){
        if(entradaDesencriptar.includes(reglas1[i][0])  ){
            entradaDesencriptar = entradaDesencriptar.replaceAll(reglas1[i][0], reglas1[i][1])
        }
    }
    document.getElementById("sinMensaje").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "unset";
    return entradaDesencriptar;

}

function copiar() {
    mensaje.select();
    document.execCommand("copy");
    alert("Mensaje copiado");

}


