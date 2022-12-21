function toggleMenu(event) {
    const nav = document.querySelector('.nav');
    nav.classList.contains('show-nav') ? nav.classList.remove('show-nav') : nav.classList.add('show-nav');
}

const carousel = (() => {

    let currentSlideIndex = 1;
    let slidesGap = 10;
    let slidePosition = 0;
    const slidesNumber = document.querySelector('.images-container').children.length;

    function nextSlide() {
        const slideWidth = Number(document.querySelector('.carousel-item').offsetWidth) + slidesGap;
        const carousel = document.querySelector('.images-container');

        if(currentSlideIndex < slidesNumber) {
            carousel.style.left = `${-(slideWidth * currentSlideIndex)}px`;
            slidePosition = -(slideWidth * currentSlideIndex);
            currentSlideIndex++;
            highlightCurrentSlide(currentSlideIndex-1);
        }
    }

    function prevSlide() {
        const slideWidth = Number(document.querySelector('.carousel-item').offsetWidth) + slidesGap;
        const carousel = document.querySelector('.images-container');

        if(currentSlideIndex > 1) {
            carousel.style.left = `${-(slideWidth * (currentSlideIndex - 1)) + slideWidth}px`;
            slidePosition = -(slideWidth * (currentSlideIndex - 1)) + slideWidth;
            currentSlideIndex-- ;
            highlightCurrentSlide(currentSlideIndex-1);
        }
    }

    function selectSlide(index) {
        const slideWidth = Number(document.querySelector('.carousel-item').offsetWidth) + slidesGap;
        const carousel = document.querySelector('.images-container');
        const difference = currentSlideIndex - index;

        carousel.style.left = `${slidePosition + (slideWidth * difference)}px`;
        slidePosition = slidePosition + (slideWidth * difference);
        currentSlideIndex = index;
        highlightCurrentSlide(currentSlideIndex-1);

    }

    function highlightCurrentSlide(index) {
        const slideMenuItems = document.querySelector('.carousel-menu').children;
        [...slideMenuItems].forEach(element => element.classList.remove('current'));
        slideMenuItems[index].classList.add('current');
    }

    return {nextSlide, prevSlide, selectSlide}
})()