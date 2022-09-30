const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu'); 
const menuHamIcon = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {shoppingCartContainer
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobilMenuClosed) {
        mobileMenu.classList.add('inactive');
    } 
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    } 

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Juguete Antiestres Y Kawaii',
    price: 791,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_649662-MLA50177027791_062022-F.webp',
});
productList.push({
    name: 'Cortante Galleta Cookie Reposteria Huella Hueso',
    price: 750,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_975077-MLA48112048726_112021-F.webp',
});
productList.push({
    name: 'Cubiertos Metalicos Con Baño De Plata',
    price: 11690,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_947012-MLA42681726834_072020-F.webp',
});
productList.push({
    name: 'Almohadón Deco 40 X 40 Cm',
    price: 3200,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_698105-MLA49720556209_042022-F.webp',
});
productList.push({
    name: 'Dije de plata',
    price: 3090,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_883357-MLA51145469563_082022-F.webp',
});
productList.push({
    name: 'Colchoncito 40x68 cm',
    price: 1850,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_903354-MLA49776143114_042022-F.webp',
});
productList.push({
    name: 'Llavero de plata',
    price: 2800,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_780445-MLA32885364843_112019-F.webp',
});
productList.push({
    name: 'Maceta decorativa',
    price: 2553,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_668274-MLA43993660483_112020-F.webp',
});
productList.push({
    name: 'Sweatter especial para perritos',
    price: 3500,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_950964-MLA50266402174_062022-F.webp',
});
productList.push({
    name: 'Amigurumi Perro Salchicha',
    price: 2000,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_753726-MLA50411564027_062022-F.webp',
});

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
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
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);
