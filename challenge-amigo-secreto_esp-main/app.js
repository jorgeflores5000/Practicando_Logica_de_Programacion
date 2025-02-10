// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];


function agregarNombre(){
    nombresAmigos.push(document.getElementById("amigo").value);
    console.log(nombresAmigos);
    limpiarCaja();
}

function validarEntrada(){
    if(!document.getElementById("amigo").value){
        alert("Debes ingresar un nombre");
    } else {
        agregarNombre();
    }
}

function actualizarLista(){
    
}

function visualizarLista(){

}

function sortearAmigos(){

}
 function limpiarCaja(){
    document.getElementById("amigo").value = "";
}
