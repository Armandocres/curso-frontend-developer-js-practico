const navBarMenu = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.inactive');
const menuHamburguer = document.querySelector('.menu');
const menuHamburguerMObile = document.querySelector('.mobile-menu');
const menuShop = document.querySelector('.navbar-shopping-cart');
const asideShop = document.querySelector('.product-detail');

navBarMenu.addEventListener('click', showMenu);
menuHamburguer.addEventListener('click', showMenuHamburguer);
menuShop.addEventListener('click', showAsideShop);

function showMenu() {
  const asideClose = asideShop.classList.contains('inactive');

  if (!asideClose) {
    asideShop.classList.add('inactive');
  }

  menuDesktop.classList.toggle('inactive');
}

function showMenuHamburguer() {
  const asideClose = asideShop.classList.contains('inactive');

  if (!asideClose) {
    asideShop.classList.add('inactive');
  }

  menuHamburguerMObile.classList.toggle('inactive');
}

function showAsideShop () {
  const menuOpenClosed = menuHamburguerMObile.classList.contains('inactive');
  const menuDesktopShow = menuDesktop.classList.contains('inactive');

  if (!menuOpenClosed) {
    menuHamburguerMObile.classList.add('inactive');
  }
  

  if (!menuDesktopShow) {
    menuDesktop.classList.add('inactive');
  }

  asideShop.classList.toggle('inactive');
}