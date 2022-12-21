let currentSlideIndex = 1;
let slidesGap = 10;
let slidePosition = 0;

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