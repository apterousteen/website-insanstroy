// Flickity Slider Hero
let carousel_h = document.querySelector('.carousel.carousel-hero');
let carousel_hero = new Flickity(carousel_h, {
    prevNextButtons: false,
    pageDots: false,
});

const updateStatus = function (slider) {
    let startStatus = document.querySelector(`.carousel-status.status-${slider.element.dataset.type} > .start`);
    let endStatus = document.querySelector(`.carousel-status.status-${slider.element.dataset.type} > .end`);

    let slideNumber = slider.selectedIndex + 1;
    startStatus.textContent = `0${slideNumber}`;
    endStatus.textContent = `0${slider.slides.length}`;
}

const prevSlide = (slider) => {
    slider.previous();
    updateStatus(slider);
};

const nextSlide = (slider) => {
    slider.next();
    updateStatus(slider);
};

// previous hero
let previousHeroButton = document.querySelector('.button--previous.button-p-hero');
previousHeroButton.addEventListener('click', prevSlide.bind(null, carousel_hero));
// next hero
let nextButton = document.querySelector('.button--next.button-n-hero');
nextButton.addEventListener('click', nextSlide.bind(null, carousel_hero));
// hero status init
carousel_hero.on('select', updateStatus(carousel_hero));

////////////////////////////
// Flickity Slider Portfolio-1
let carousel_p_1 = document.querySelector('.carousel.carousel-portfolio-1');
let carousel_portfolio_1 = new Flickity(carousel_p_1, {
    prevNextButtons: false,
    pageDots: false,
});

// previous portfolio 1
let previousPortfolio_1_Button = document.querySelector('.button--previous.button-p-portfolio-1');
previousPortfolio_1_Button.addEventListener('click', prevSlide.bind(null, carousel_portfolio_1));

// next portfolio 1
let nextPortfolio_1_Button = document.querySelector('.button--next.button-n-portfolio-1');
nextPortfolio_1_Button.addEventListener('click', nextSlide.bind(null, carousel_portfolio_1));

// portfolio 1 status init
carousel_hero.on('select', updateStatus(carousel_portfolio_1));

////////////////////////////
// Flickity Slider Portfolio-2
let carousel_p_2 = document.querySelector('.carousel.carousel-portfolio-2');
let carousel_portfolio_2 = new Flickity(carousel_p_2, {
    prevNextButtons: false,
    pageDots: false,
});

// previous portfolio 2
let previousPortfolio_2_Button = document.querySelector('.button--previous.button-p-portfolio-2');
previousPortfolio_2_Button.addEventListener('click', prevSlide.bind(null, carousel_portfolio_2));

// next portfolio 2
let nextPortfolio_2_Button = document.querySelector('.button--next.button-n-portfolio-2');
nextPortfolio_2_Button.addEventListener('click', nextSlide.bind(null, carousel_portfolio_2));

// portfolio 2 status init
carousel_hero.on('select', updateStatus(carousel_portfolio_2));

////////////////////////////
// Flickity Slider Portfolio-3
let carousel_p_3 = document.querySelector('.carousel.carousel-portfolio-3');
let carousel_portfolio_3 = new Flickity(carousel_p_3, {
    prevNextButtons: false,
    pageDots: false,
});

// previous portfolio 3
let previousPortfolio_3_Button = document.querySelector('.button--previous.button-p-portfolio-3');
previousPortfolio_3_Button.addEventListener('click', prevSlide.bind(null, carousel_portfolio_3));

// next portfolio 3
let nextPortfolio_3_Button = document.querySelector('.button--next.button-n-portfolio-3');
nextPortfolio_3_Button.addEventListener('click', nextSlide.bind(null, carousel_portfolio_3));

// portfolio 3 status init
carousel_hero.on('select', updateStatus(carousel_portfolio_3));