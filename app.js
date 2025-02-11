// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];


function agregarAmigo(){
    nombresAmigos.push(document.getElementById("amigo").value);
    console.log(nombresAmigos);
    limpiarCaja();
    actualizarLista();
}

function validarEntrada(){
    if(!document.getElementById("amigo").value){
        alert("Por favor ingrese un nombre");
    } else {
        agregarAmigo();
    }
}

function actualizarLista(){
    let = limpiarlista = document.getElementById("listaAmigos");
    limpiarlista.innerHTML = "";
    
    if(nombresAmigos.length != 0){
        for(let i = 0; i < nombresAmigos.length; i++){
            let lista = document.getElementById("listaAmigos");
            let elemento = document.createElement("li");
            elemento.textContent = nombresAmigos[i];
            lista.appendChild(elemento);
        }
    } else {
        validarEntrada();
    }
}


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function sortearAmigo(){

    if(nombresAmigos.length != 0){
        let amigoSecreto = Math.floor(Math.random()*nombresAmigos.length);
        let amigoSorteado = nombresAmigos[amigoSecreto];
        asignarTextoElemento('ul',`El amigo secreto es: ${amigoSorteado}`);
    } else {
        alert("La lista de amigos está vacía");
    }
}
 function limpiarCaja(){
    document.getElementById("amigo").value = "";
}

