const navBarMenu = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.inactive');
const menuHamburguer = document.querySelector('.menu');
const menuHamburguerMObile = document.querySelector('.mobile-menu');
const menuShop = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

navBarMenu.addEventListener('click', showMenu);
menuHamburguer.addEventListener('click', showMenuHamburguer);
menuShop.addEventListener('click', showAsideShop);

function showMenu() {
  const asideClose = shoppingCartContainer.classList.contains('inactive');

  if (!asideClose) {
    shoppingCartContainer.classList.add('inactive');
  }

  menuDesktop.classList.toggle('inactive');
}

function showMenuHamburguer() {
  const asideClose = shoppingCartContainer.classList.contains('inactive');

  if (!asideClose) {
    shoppingCartContainer.classList.add('inactive');
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

  shoppingCartContainer.classList.toggle('inactive');
}

const productsList = [];
productsList.push(
  {
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
)

productsList.push(
  {
    name: 'Brownie',
    price: 290,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
)

productsList.push(
  {
    name: 'Cupcake',
    price: 98,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
)

productsList.push(
  {
    name: 'Helado',
    price: 10,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
)

productsList.push(
  {
    name: 'Pantalla',
    price: 90,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
)

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productInfoFigureImage = document.createElement('img');
    productInfoFigureImage.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productInfoFigureImage);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productsList);
