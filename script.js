let currentSlideIndex = 1;
let slidesGap = 10;
let slidePosition = 0;

let productsInCart = 0;

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.contains('show-nav') ? nav.classList.remove('show-nav') : nav.classList.add('show-nav');
}


function toggleCarouselPopUp() {
    const popup = document.querySelector('.carousel-popup');
    if(popup.classList.contains('hide')) {
        popup.classList.remove('hide');
        carouselPopUp().updateSlide();
    } else {
        popup.classList.add('hide')
        carousel().updateSlide();
    }
}

const carousel = () => {

    const slideWidth = Number(document.querySelector('.product .carousel-item').offsetWidth) + slidesGap;
    const carouselElem = document.querySelector('.product .images-container');
    const slidesNumber = carouselElem.children.length;
    const carouselMenu = [...document.querySelector('.product .carousel-menu').children];

    function nextSlide() {
        if(currentSlideIndex < slidesNumber) {
            carouselElem.style.left = `${-(slideWidth * currentSlideIndex)}px`;
            slidePosition = -(slideWidth * currentSlideIndex);
            currentSlideIndex++;
            highlightCurrentSlide(currentSlideIndex-1);
        }
    }
    
    function prevSlide() {
        if(currentSlideIndex > 1) {
            carouselElem.style.left = `${-(slideWidth * (currentSlideIndex - 1)) + slideWidth}px`;
            slidePosition = -(slideWidth * (currentSlideIndex - 1)) + slideWidth;
            currentSlideIndex-- ;
            highlightCurrentSlide(currentSlideIndex-1);
        }
    }
    
    function selectSlide(index) {
    
        const difference = currentSlideIndex - index;
    
        carouselElem.style.left = `${slidePosition + (slideWidth * difference)}px`;
        slidePosition = slidePosition + (slideWidth * difference);
        currentSlideIndex = index;
        highlightCurrentSlide(currentSlideIndex-1);
    }
    
    function highlightCurrentSlide(index) {
        carouselMenu.forEach(element => element.classList.remove('current'));
        carouselMenu[index].classList.add('current');
    }

    function updateSlide() {
        let leftValue = (1-currentSlideIndex) * slideWidth;
        carouselElem.style.left = `${leftValue}px`;
        slidePosition = leftValue;
        highlightCurrentSlide(currentSlideIndex-1);
    }

    return {nextSlide, prevSlide, selectSlide, updateSlide}
}

const carouselPopUp = () => {

    const slideWidth = Number(document.querySelector('.carousel-popup .carousel-item').offsetWidth) + slidesGap;
    const carouselElem = document.querySelector('.carousel-popup .images-container');
    const slidesNumber = carouselElem.children.length;
    const carouselMenu = [...document.querySelector('.carousel-popup .carousel-menu').children];

    function nextSlide() {
        if(currentSlideIndex < slidesNumber) {
            carouselElem.style.left = `${-(slideWidth * currentSlideIndex)}px`;
            slidePosition = -(slideWidth * currentSlideIndex);
            currentSlideIndex++;
            highlightCurrentSlide(currentSlideIndex-1);
        }
    }
    
    function prevSlide() {
        if(currentSlideIndex > 1) {
            carouselElem.style.left = `${-(slideWidth * (currentSlideIndex - 1)) + slideWidth}px`;
            slidePosition = -(slideWidth * (currentSlideIndex - 1)) + slideWidth;
            currentSlideIndex-- ;
            highlightCurrentSlide(currentSlideIndex-1);
        }
    }
    
    function selectSlide(index) {
    
        const difference = currentSlideIndex - index;
    
        carouselElem.style.left = `${slidePosition + (slideWidth * difference)}px`;
        slidePosition = slidePosition + (slideWidth * difference);
        currentSlideIndex = index;
        highlightCurrentSlide(currentSlideIndex-1);
    }
    
    function highlightCurrentSlide(index) {
        carouselMenu.forEach(element => element.classList.remove('current'));
        carouselMenu[index].classList.add('current');
    }

    function updateSlide() {
        let leftValue = (1-currentSlideIndex) * slideWidth;
        carouselElem.style.left = `${leftValue}px`;
        slidePosition = leftValue;
        highlightCurrentSlide(currentSlideIndex-1);
    }

    return {nextSlide, prevSlide, selectSlide, updateSlide}
}

function toggleCartMenu() {
    const cartMenu = document.querySelector('.cart-menu');
    updateCart();
    cartMenu.classList.contains('hide') ? cartMenu.classList.remove('hide') : cartMenu.classList.add('hide')
}

function updateCart() {
    const cartInfo = document.querySelector('.container-product');
    if(productsInCart === 0) {
        cartInfo.innerHTML = `Your cart is empty`
    } else {
        cartInfo.innerHTML = `
            <div class="flex">
                <div class="cart-image"><img src="./images/image-product-1-thumbnail.jpg"></div>
                    <div class="info fs-300">
                    <p>Fall limited edition sneakers</p>
                    <span class="unit-value">$125,00</span>x<span class="qtt">${productsInCart}</span>
                    <span class="final-value bold txt-black">$${productsInCart * 125},00</span>
                </div>
                <div class="pointer" onclick="cleanCart()"><img src="./images/icon-delete.svg" alt=""></div>
            </div>
            <button class="txt-white bold fs-400 pointer">Checkout</button>
        `
    }
}

function cleanCart() {
    productsInCart = 0;
    updateCart();
}

function oneMore() {
    const counter = document.querySelector(".add-to-cart > div > span");
    counter.textContent = Number(counter.textContent) + 1;
}

function oneLess() {
    const counter = document.querySelector(".add-to-cart > div > span");
    counter.textContent = Number(counter.textContent) > 0 ? Number(counter.textContent) - 1 : 0;
}

function addToCart() {
    let number = Number(document.querySelector(".add-to-cart > div > span").textContent);

    if(number > 0)
        productsInCart = number;
    else
        return 
}