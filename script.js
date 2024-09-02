const title = document.getElementById('titulo');
const p = document.getElementById('p');
const logo = document.getElementById('logo');
const cor = document.getElementById('corpo');

const nacho = document.getElementById('nacho');
const sweet = document.getElementById('sweet');
const salsa = document.getElementById('salsa');

// Definição das cores
const background = {
    nacho: '#801413',   
    sweet: '#6d235a',  
    salsa: '#0e6337'
};

logo.addEventListener('click', function() {
    voltaLogo();
});

function voltaLogo() {
    // Implementação opcional: Navegação para a página inicial
    window.location.href = 'index.html'; // Redireciona para a página inicial
}

nacho.addEventListener('click', function() {
    trocaTitulo('Nacho');
    trocaP("As one of the original DORITOS® flavors, this one's a true classic.<br> With bold cheesy seasoning that's off the charts, Nacho Cheese will never let you down at snack time!<br> Taste why these are the ultimate chips to snack on.");
    trocaCor(background.nacho);
});

sweet.addEventListener('click', function() {
    trocaTitulo('Spicy Sweet Chili');
    trocaP("Dipping your DORITOS® in salsa verde for extra flavor? Pretty smart.<br> DORITOS® that are already coated in the bold flavor of salsa verde<br> so every crunch is tangy, zesty, and with a mild-medium level of heat? Simply genius.");
    trocaCor(background.sweet);
});

salsa.addEventListener('click', function() {
    trocaTitulo('Salsa Verde');
    trocaP('Now, this is how you upgrade a classic.<br> For those who like a little heat to their tongue (but not enough to burn!)<br> this hot twist on the classic Nacho Cheese flavor<br> is the perfect snack companion for you.');
    trocaCor(background.salsa);
});

function trocaTitulo(novoTexto) {
    title.innerText = novoTexto;
}

function trocaP(novoP) {
    p.innerHTML = novoP;
}

function trocaCor(corFundo) {
    cor.style.backgroundColor = corFundo; // Altera a cor de fundo do elemento 'corpo'
}
