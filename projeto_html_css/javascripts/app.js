var botaoMenu = document.querySelector('.js-botao-chaveador');

botaoMenu.onclick = function() {
    var menu = document.querySelector('.js-menu');
    menu.classList.toggle('menu--exibindo');
}