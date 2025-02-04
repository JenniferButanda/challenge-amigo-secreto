let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

if (nombre.trim() === '') {
    alert("Por favor, inserte un nombre");
    return;
}

    amigos.push(nombre);
    //console.log(amigos);
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

function sortearAmigo() {
    if(amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega algunos nombres primero");
        return;
    } else {
        let i = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[i];
        document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSorteado}`;
    }
}