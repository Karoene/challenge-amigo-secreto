//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a
//  lógica para resolver o problema.
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const amigoInput = document.getElementById('amigo');
let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = amigoInput.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(nomeAmigo);
    atualizarLista();
    amigoInput.value = '';
}

function atualizarLista() {
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const novoItem = document.createElement('li');
        novoItem.textContent = amigo;
        listaAmigos.appendChild(novoItem);
    });
}

function sortearAmigo() {
    if (amigos.length < 3) {
        alert('É necessário pelo menos 3 participantes para o sorteio.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = ''; // Limpa resultados anteriores
    const resultadoItem = document.createElement('li');
    resultadoItem.textContent = `Amigo sorteado: ${amigoSorteado}`; // Mensagem com o nome
    resultado.appendChild(resultadoItem);
}