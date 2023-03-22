const navBarMenu = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.inactive');

navBarMenu.addEventListener('click', showMenu);

function showMenu() {
  menuDesktop.classList.toggle('inactive');
}