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
}