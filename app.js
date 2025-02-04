let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

if (nombre.trim() === '') {
    alert("Por favor, inserte un nombre");
    return;
}

    amigos.push(nombre);
    console.log(amigos);
    document.getElementById('amigo').value='';

    mostrarAmigoEnLista();
}

function mostrarAmigoEnLista() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}