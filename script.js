function toggleMenu(event) {
    const nav = document.querySelector('.nav');
    nav.classList.contains('show-nav') ? nav.classList.remove('show-nav') : nav.classList.add('show-nav');
}

const carousel = (() => {

    let currentSlideIndex = 1;
    const slidesNumber = document.querySelector('.images-container').children.length;
    let slidesGap = 10;

    function nextSlide() {
        const slideWidth = Number(document.querySelector('.carousel-item').offsetWidth) + slidesGap;
        const carousel = document.querySelector('.images-container');

        if(currentSlideIndex < slidesNumber) {
            carousel.style.left = `${-(slideWidth * currentSlideIndex)}px`;
            currentSlideIndex++;
        }
    }

    function prevSlide() {
        const slideWidth = Number(document.querySelector('.carousel-item').offsetWidth) + slidesGap;
        const carousel = document.querySelector('.images-container');

        if(currentSlideIndex > 1) {
            carousel.style.left = `${-(slideWidth * (currentSlideIndex - 1)) + slideWidth}px`;
            currentSlideIndex-- ;
        }
    }
    return {nextSlide, prevSlide}
})()