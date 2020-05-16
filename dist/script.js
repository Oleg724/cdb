const mainClass = '.main';
const main = document.querySelector(mainClass);
const header = document.querySelector('.header');


// Nav menu --------------------------------------------------------------------------------
const navBtn = header.querySelector('#navBtn');
const closeBurgerMenu = () => {
    navBtn.checked = false;
}


// Search form -----------------------------------------------------------------------------
const searchButton = document.querySelector('#search');
const closeSearchFieldButton = document.querySelector('#search-cancel');
const formField = document.querySelector('.search-form');

const openSearchField = (e) => {
    e.preventDefault();
    closeBurgerMenu();
    const target = e.target; 
    const searchButtonTitle = document.querySelector('#search-text');
    const searchButtonLogo = searchButton.querySelector('.top-panel__logo');
    if (target === searchButton || target === searchButtonTitle || target === searchButtonLogo) {       
        formField.style.display = 'flex';
    }
}

const closeSearchField = () => {
    const formField = document.querySelector('.search-form');
    formField.style.display = 'none';
}

searchButton.addEventListener('click', openSearchField);
closeSearchFieldButton.addEventListener('click', closeSearchField);

navBtn.addEventListener('change', () => {
    closeSearchField();
})

// Login form open/close --------------------------------------------------------------------
const loginButton = document.querySelector('#login');
const closeButton = document.querySelector('#close');

const openModal = (e) => {
    e.preventDefault();
    closeBurgerMenu();
    const target = e.target; 
    const loginButtonTitle = document.querySelector('#login-text');
    const loginButtonLogo = loginButton.querySelector('.top-panel__logo');

    if (target === loginButton || target === loginButtonTitle || target === loginButtonLogo) {
        const modalWindow = document.querySelector('.modal-login');
        modalWindow.style.visibility = 'visible';
    }

    if (formField.style.display === 'flex') {
        formField.style.display = 'none';
    }
}

const closeModal = (e) => {
    const target = e.target;

    if (target === closeButton) {
        const modalWindow = document.querySelector('.modal-login');
        modalWindow.style.visibility = 'hidden';
    }
}

loginButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);


// Login form tabs ----------------------------------------------------------------------
const tabs = document.querySelector('#tabs');

const removeTabClass = (arr, classToRemove) => {
    arr.forEach(function(item) {
        item.classList.remove(classToRemove);
    });
};

const openTab = (e) => {
    const target = e.target;
    const formList = document.querySelectorAll('.modal-login__tab');
    const switcherList = document.querySelectorAll('.switcher__item');    
    const classToShow = 'modal-login__tab--show';
    const classWhite = 'switcher__item--white';

    removeTabClass(switcherList, classWhite);
    target.classList.add(classWhite);
    removeTabClass(formList, classToShow);
    
    const targetIndex = Array.prototype.indexOf.call(switcherList, target);
    const formToShow = formList[targetIndex];
    formToShow.classList.add(classToShow);
};

tabs.addEventListener('click', openTab);


// Reset password menu --------------------------------------------------------------------
const resetPasswordWindow = document.querySelector('.modal-login__password-reset');
const resetWindowButton = document.querySelector('.modal-login__link');

const openResetWindow = (e) => {
    const target = e.target;
    if (target.className === 'modal-login__link') {
        resetPasswordWindow.classList.add('modal-login__password-reset--visible');
    }
}

const closeResetWindow = (e) => {
    const target = e.target;
    if (target.className === 'form__close') {
        resetPasswordWindow.classList.remove('modal-login__password-reset--visible');
    }
}

resetWindowButton.addEventListener('click', openResetWindow);
resetPasswordWindow.addEventListener('click', closeResetWindow);


// Email input ----------------------------------------------------------------------------
const modalLoginWindowInner = document.querySelector('.modal-login__inner');

const closeConfirmWindow = (div, classToRemove) => {
    div.classList.remove(classToRemove);
} 

const checkFormFill = (elem) => {
    const parentNode = elem.parentNode;
    const nodeList = parentNode.childNodes;
    const confirmWindowText = document.querySelector('.confirm-window__text');
  
    for (let i = 0; i < nodeList.length; i++) {
        if (nodeList[i].tagName === 'INPUT' && nodeList[i].value === "") {
            confirmWindowText.textContent = `Please, fill all fields`;
            break;
        } 
        else if (nodeList[i].tagName === 'INPUT' && nodeList[i].value !== "") {
            
            if (nodeList[i].type === 'email' && nodeList[i].value.indexOf('@') < 1) {
                confirmWindowText.textContent = `Please, fill all fields`;
                break;
            }
            confirmWindowText.textContent = 'Data sent successfully!';
        }
    }
}

const openConfirmWindow = (e) => {
    e.preventDefault();
    const target = e.target;
    const displayClass = 'confirm-window--display';
    const confirmWindow = document.querySelector('.confirm-window');
    
    if (target.classList.contains('form__btn') || target.classList.contains('form-btn')) {
        checkFormFill(target, confirmWindow);
        confirmWindow.classList.add(displayClass);
        
        setTimeout(closeConfirmWindow, 2500, confirmWindow, displayClass);
    }; 
}

modalLoginWindowInner.addEventListener('click', openConfirmWindow);


// Sing in input -------------------------------------------------------------------------
const modalLoginTabShowed = document.querySelector('.modal-login__tab--show');
modalLoginTabShowed.addEventListener('click', openConfirmWindow);


// Scroll on page ------------------------------------------------------------------------
const navList = document.querySelector('.nav__list');
const arrowFirstScreen = document.querySelector('#arrow');
const productsLink = document.querySelector('.scroll-link__link');

const scrollToAnchor = (e) => {
    e.preventDefault();
    const target = e.target;
    
    if (target.hasAttribute('href')) {      
        const blockID = target.getAttribute('href');

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}


navList.addEventListener('click', scrollToAnchor);
arrowFirstScreen.addEventListener('click', scrollToAnchor);
productsLink.addEventListener('click', scrollToAnchor);


// Header menu color  --------------------------------------------------------------------
const changeHeaderColor = (e) => {
    if (window.pageYOffset === 0) {
        header.classList.remove('header--bg-green');
    } 
    else {
        header.classList.add('header--bg-green');
    }
}

window.addEventListener('scroll', changeHeaderColor);


// Shop Modal
const modalCart = 'cart';
const modalShopWrapper = 'modal-shop-wrapper';
const modalShop = 'modal-shop';
const modalShopItem = 'modal-shop__item';
const modalShopItemNewDiv = 'slider-item__description';
const modalCloseButton = 'modal-close-btn';
const sectionProductsID = '#products';
const modalCartWrapper = 'cart-wrapper';

const items = document.querySelectorAll('.slider-item');
const modalShopButton = document.querySelector('.modal-btn__link');
const sectionProductsDiv = document.querySelector(sectionProductsID);

const createDiv = (parentID, className, innerText) => {
    const parentList = document.querySelectorAll(parentID);
    let parent;

    if (!parentList[parentList.length - 1]) {
        parent = parentList[0];
    }
    else {
        parent = parentList[parentList.length - 1];
    }

    const newDiv = document.createElement('div');
    newDiv.classList.add(className);
    if (innerText) newDiv.innerHTML = innerText;
    parent.appendChild(newDiv);
}

const createModalShop = (elem) => {
    const clonedElem = elem.cloneNode(true);
    const modalShopDiv = document.querySelector('.' + modalShop);
    clonedElem.classList.add(modalShopItem);
    modalShopDiv.appendChild(clonedElem);
}

const openShopModal = (e) => {
    target = e.target;
    closeBurgerMenu();
    
    if (target === modalShopButton || target.innerHTML === 'Shop' || target.innerHTML === 'Go shopping') {
        closeCart();   
        createDiv(sectionProductsID, modalShopWrapper);
        createDiv('.' + modalShopWrapper, modalShop);
        createDiv('.' + modalShop, modalCloseButton, 'Close');
        items.forEach(createModalShop);
    }
}

const closeModalWindow = (e) => {
    target = e.target;
    if (target.className === modalCloseButton) {
        const targetParent = target.parentNode.parentNode.className;
        const modalToClose = document.querySelector('.' + targetParent);
        modalToClose.remove();
    }
}


main.addEventListener('click', openShopModal);
sectionProductsDiv.addEventListener('click', closeModalWindow);


// Cart -------------------------------------------------------------------------------
const modalCartItem = 'cart__item';
const checkedItemQuantity = 'cart__quantity';

const addNewClass = (divClass, classToAdd, text) => {
    const divs = document.querySelectorAll(divClass);
    divs.forEach(function(item) {
        if (item.innerHTML === text) {
            item.classList.add(classToAdd);
        }
    })
}

const removeChildDiv = (parentDiv, className) => {
    const divsToDelete = parentDiv.querySelectorAll(className);
    divsToDelete.forEach(function(item) {
        item.remove();
    })
}

const getItemsFromLocalStorage = () => {
    const checkedItemsStr = localStorage.getItem('id');
    return checkedItemsArr = JSON.parse(checkedItemsStr);
}

const createCartCounter = () => {
    let itemNumber;
    if (getItemsFromLocalStorage()) {
        itemNumber = getItemsFromLocalStorage().length;   
    } 
    else {
        itemNumber = 0;
    }
    createDiv('#' + modalCart, 'top-panel__counter', `(${itemNumber})`);
}

createCartCounter();

const createCart = (elem) => {
    const productItem = document.querySelector('#' + elem);
    const clonedElem = productItem.cloneNode(true);
    clonedElem.classList.add(modalCartItem);
    const modalDiv = document.querySelector('.' + modalCart);
    modalDiv.appendChild(clonedElem);
    createDiv('.cart__item', 'cart__quantity');
    createDiv('.cart__quantity', 'cart__quantity-change');
    createDiv('.cart__quantity-change', 'cart__plus');
    createDiv('.cart__quantity-change', 'cart__minus');
    createDiv('.cart__quantity', 'cart__quantity-value');
    removeChildDiv(modalDiv, '.rating'); 
}
    
const cartLogo = cart.querySelector('.top-panel__logo');

const openCart = (e) => {
    const target = e.target;
    const itemNumber = document.querySelector('.top-panel__counter');
    
    if (target.id === modalCart 
        || target.innerText === 'OPEN CART' 
        || target.innerHTML === 'Cart'
        || target === cartLogo
        || target === itemNumber) {
        const clearCartText = 'Clear cart';
        const returnToShopText = 'Go shopping';
        const clearCartButton = modalCloseButton + '--bottom';
        const returnToShopButton = modalCloseButton + '--bottom-right';
        const divToDelete = document.querySelector('.' + modalShopWrapper);

        if (formField.style.display === 'flex') {
            formField.style.display = 'none';
        }

        if (divToDelete) {
            divToDelete.remove('.' + modalShopWrapper);
        }
        
        createDiv(sectionProductsID, modalCartWrapper);
        createDiv('.' + modalCartWrapper, modalCart);
        createDiv('.' + modalCart, modalCloseButton, 'Close');
        createDiv('.' + modalCart, modalCloseButton, clearCartText);
        createDiv('.' + modalCart, modalCloseButton, returnToShopText);
        addNewClass('.' + modalCloseButton, returnToShopButton, returnToShopText);
        addNewClass('.' + modalCloseButton, clearCartButton, clearCartText);

        const localStorageItems = getItemsFromLocalStorage();
        const checkedItems = [];
        const checkedItemsQuantity = {};
        
        if (localStorageItems) {
            for (let item of localStorageItems) {
                if (!checkedItems.includes(item)) {
                    checkedItems.push(item);
                    checkedItemsQuantity[item] = 1;
                }
                else {
                    ++checkedItemsQuantity[item];
                }
            };

            checkedItems.forEach(createCart);
            createDiv('.' + modalCart, modalCartItem);
            createDiv('.' + modalCartItem, 'cart__total-price');

            const cartValueList = document.querySelectorAll('.cart__quantity-value');
            const itemsInCart = document.querySelectorAll('.cart__item');
            const modalCartDiv = document.querySelector('.' + modalCart);
            const itemPriceList = modalCartDiv.querySelectorAll('.slider-item__price');
            let totalCartPrice = 0;

            for (let i = 0; i < itemsInCart.length; i++) {
                for (let key in checkedItemsQuantity) {
                    if (itemsInCart[i].id === key) {
                        cartValueList[i].innerHTML = checkedItemsQuantity[key] + ' pcs';
                        
                        const itemPriceText = itemPriceList[i].innerHTML;
                        const itemPrice = +itemPriceText.slice(1, -4);
                        const totalItemPrice = +(itemPrice * checkedItemsQuantity[key]).toFixed(2);
                        totalCartPrice += totalItemPrice;
                        itemPriceList[i].innerHTML = '$' + totalItemPrice + ' USD';
                    }
                }
            }
            
            const totalPriceDiv = itemsInCart[itemsInCart.length - 1].querySelector('.cart__total-price');
            totalPriceDiv.innerHTML = 'Total: $' + totalCartPrice + ' USD';

        } 
        else {
            createDiv('.' + modalCart, 'cart__text', "Cart is empty, let's go shopping =))");
            createDiv('.' + modalCart, 'cart__img');
        }   
    }
}


const closeCart = () => {
    const modalCartWrapperDiv = document.querySelector('.' + modalCartWrapper);

    if (modalCartWrapperDiv) {
        modalCartWrapperDiv.remove();
    } 
}

const clearCart = (e) => {
    const localStorageItems = getItemsFromLocalStorage();
    const target = e.target;

    if (target.innerHTML === 'Clear cart' && localStorageItems) {
        const parentDiv = document.querySelector('.' + modalCart);
        localStorage.removeItem('id');
        removeChildDiv(parentDiv, '.' + modalCartItem);
        createDiv('.' + modalCart, 'cart__text', "Cart is empty, let's go shopping");
        createDiv('.' + modalCart, 'cart__img');
        refreshCartCounter();
    }
}

const refreshCartCounter = () => {
    const itemNumber = document.querySelector('.top-panel__counter');
    if (getItemsFromLocalStorage()) {
        itemNumber.innerHTML = `(${getItemsFromLocalStorage().length})`;
    }
    else {
        itemNumber.innerHTML = '(0)';
    }
}

const body = document.querySelector('body');

body.addEventListener('click', openCart);
body.addEventListener('click', clearCart);


// Refresh item price/quantity -------------------------------------------------------------------------
const refreshItemPriceQuantity = (e) => {
    const target = e.target;
    const parentDiv = target.closest('.cart__item');
    const itemQuantityDiv = parentDiv.querySelector('.cart__quantity-value');
    const itemPriceDiv = parentDiv.querySelector('.slider-item__price');

    itemPrice = +itemPriceDiv.innerHTML.slice(1, -4);
    itemQuantity = +itemQuantityDiv.innerHTML.slice(0, -4);

    let price;

    if (itemQuantity >= 1) {
        price = +(itemPrice/itemQuantity).toFixed(2);
    }
    else {
        price = 0;
    }
    
    const totalPriceDiv = document.querySelector('.cart__total-price');
    const totalPrice = +totalPriceDiv.innerHTML.slice(8, -4);
    let newQuantity;
    let newTotalCartPrice;
    
    if (target.className === 'cart__plus') {
        newQuantity = ++itemQuantity;
        newTotalCartPrice = +(totalPrice + price).toFixed(2);
    }
    else if (target.className === 'cart__minus') {
        if (itemQuantity >= 1) {
            newQuantity = --itemQuantity;
        }
        else {
            newQuantity = 0;
        }
        
        newTotalCartPrice = +(totalPrice - price).toFixed(2);
    }
    
    const newPrice = (price * newQuantity).toFixed(2);
    
    itemQuantityDiv.innerHTML = newQuantity + ' pcs';
    itemPriceDiv.innerHTML = '$' +  newPrice  + ' USD';
    totalPriceDiv.innerHTML = 'Total: $' + newTotalCartPrice + ' USD';

    if (newPrice === '0.00') {
        parentDiv.parentNode.removeChild(parentDiv);
    }

    if (newTotalCartPrice === 0) {
        createDiv('.' + modalCart, 'cart__text', "Cart is empty, let's go shopping");
        createDiv('.' + modalCart, 'cart__img');
    }
}


// Add to cart --------------------------------------------------------------------------------
const addToCart = (e) => {
    e.preventDefault();
    const target = e.target;
    let selectedItemsArray;
    const addToCartText = 'Add to cart';
    if (target.innerHTML === addToCartText 
        || target.className === 'cart__plus'
        || target.className === 'cart__minus') {
        
        if (localStorage.getItem('id')) {
            selectedItemsArray = JSON.parse(localStorage.getItem('id'));
        }
        else {
            selectedItemsArray = [];
        }
        
        let selectedItem = target.closest('.slider-item');
        if (target.className === 'cart__minus') {
            indexToRemove = selectedItemsArray.indexOf(selectedItem.id);
            selectedItemsArray.splice(indexToRemove, 1);   
        }
        else {
            selectedItemsArray.push(selectedItem.id);
        }
        
        localStorage.setItem('id', JSON.stringify(selectedItemsArray));
        refreshCartCounter();

        if (target.className === 'cart__plus' || target.className === 'cart__minus') {
            refreshItemPriceQuantity(e);
        }
        
    }
}

sectionProductsDiv.addEventListener('click', addToCart);


// Rate stars ----------------------------------------------------------------------------
const slider = document.querySelector('.slider');
let ratingItem;

const mouseOverActiveClass = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].classList.contains('active')) {
            break;
        } else {
            arr[i].classList.add('active');
        }
    }
}

const mouseOutActiveClass = (arr) => {
    for (let i = arr.length -1; i >= 0; i--) {
        if (arr[i].classList.contains('current-active')) {
            break;
        } else {
            arr[i].classList.remove('active');
        }
    }
}

const addClass = (arr, className) => {
    for (let i = 0; i < arr.length; i++) {
        ratingItem[i].classList.add(className);
    }
}

const removeClass = (arr, className) => {
    for (let i = 0; i < arr.length; i++) {
        ratingItem[i].classList.remove(className);
    }
}

const showRate = (e) => {
    const target = e.target;
    if (target.classList.contains('rating__path')) {
        const ratingParent = target.parentNode.parentNode.parentNode;
        ratingItem = ratingParent.querySelectorAll('.rating__path');
        removeClass(ratingItem, 'active');
        target.classList.add('active');
        mouseOverActiveClass(ratingItem);
    }
}

const clearRate = (e) => {
    const target = e.target;
    if (target.classList.contains('rating__path')) {
        addClass(ratingItem, 'active');
        mouseOutActiveClass(ratingItem);
    }
}

const setRate = (e) => {
    const target = e.target;
    if (target.classList.contains('rating__path')) {
        removeClass(ratingItem, 'current-active');
        target.classList.add('active', 'current-active');
    }
}

slider.addEventListener('mouseover', showRate);
slider.addEventListener('mouseout', clearRate);
slider.addEventListener('click', setRate);


// Hidden blocks -------------------------------------------------------------------------
const hiddenBlocksInputs = document.querySelector('.hidden-blocks__inner');
const hiddenBlocksList = document.querySelectorAll('.hidden-blocks__item');

const hideBlocks = (e) => {
    const target = e.target;
    if (target.classList.contains('hidden-blocks__title')) {
        for (let item of hiddenBlocksList) {
            item.style.opacity = '0';
        }
    }
}

const showBlock = (e) => {
    const target = e.target;
    const hiddenBlocksTitles = document.querySelectorAll('.hidden-blocks__title');

    for (let i = 0; i < hiddenBlocksTitles.length; i++) {
        if (target.htmlFor === hiddenBlocksTitles[i].htmlFor) {
            hiddenBlocksList[i].style.opacity = '1';
        }
    }
}

const showCurrentBlock = (e) => {
    hideBlocks(e);
    showBlock(e);
}

hiddenBlocksInputs.addEventListener('click', showCurrentBlock);


// Slick-slider -------------------------------------------------------------------------
$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        prevArrow: $('.slider-arrows__left'),
        nextArrow: $('.slider-arrows__right'),
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'easeOutExpo',
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    arrows: true,
                    prevArrow: $('.slider-arrows__left'),
                    nextArrow: $('.slider-arrows__right'),
                    slidesToShow: 2,
                    slidesToScroll: 2, 
                    speed: 1000,
                    easing: 'easeOutExpo',
                }
            },
            {
                breakpoint: 760,
                settings: {
                    arrows: true,
                    prevArrow: $('.slider-arrows__left'),
                    nextArrow: $('.slider-arrows__right'),
                    slidesToShow: 1,
                    slidesToScroll: 1, 
                    speed: 1000,
                    easing: 'easeOutExpo',
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.slider-bottom').slick({
        arrows: true,
        prevArrow: $('.slider-arrows__left--white'),
        nextArrow: $('.slider-arrows__right--white'),
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'easeOutExpo'
    });
});


// Accordeon -------------------------------------------------------------------------
const panelHeadingDivs = document.querySelectorAll('.panel__heading');

const openPanel = (e) => {
    const target = e.target;
    const panelHeadingDiv = target.closest('.panel__heading');
    
    if (target.className === 'panel__link' || target.className === 'panel__icon') {
        for (let item of panelHeadingDivs) {
            if (!panelHeadingDiv.classList.contains('in')) {               
                item.classList.remove('in');
            }           
        }
        panelHeadingDiv.classList.toggle('in');
    }
}

body.addEventListener('click', openPanel);