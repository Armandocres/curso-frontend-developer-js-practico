const navBarMenu = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.inactive');
const menuHamburguer = document.querySelector('.menu');
const menuHamburguerMObile = document.querySelector('.mobile-menu');

navBarMenu.addEventListener('click', showMenu);
menuHamburguer.addEventListener('click', showMenuHamburguer);

function showMenuHamburguer() {
  menuHamburguerMObile.classList.toggle('inactive');
}

function showMenu() {
  menuDesktop.classList.toggle('inactive');
}