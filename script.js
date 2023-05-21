'use strict'

const nav = document.querySelector('nav');
const section_hero = document.querySelector('#section-hero');
const navHeight = nav.getBoundingClientRect().height;

// Sticky nav
const stickNav = (entries) => {
    const [entry] = entries; // достаем первый элемент из массива, тк у нас всего 1 вхождение (порог - threshold: 0)
    // добавляем класс, когда header не пересекается с вьюпортом
    if (!entry.isIntersecting)
        nav.classList.add('sticky');
    else
        nav.classList.remove('sticky');
}
const obsOptionsHeader = {
    root: null, // элемент, который пересекается с target element (header), null = viewport
    threshold: 0, // процент пересечения root с target element
    rootMargin: `+${navHeight}px`,
}

const observerHeader = new IntersectionObserver(stickNav, obsOptionsHeader);
observerHeader.observe(section_hero);

// Calculator
const calcForm = document.querySelector('#calc-content');
const inputArea = document.querySelector('#area');
const inputRooms = document.querySelector('#rooms');
const radioType = document.querySelectorAll('input[name="type"]');
const checkboxRedevelopment = document.querySelector('input[id="redevelopment"]');
const checkboxRemoval = document.querySelector('input[id="removal"]');
const checkboxDesign = document.querySelector('input[id="design"]');
const totalPriceElement = document.querySelector('#total-price');

let planPrice = 0;
let coef = 0;

const calculate = function (e) {
    e.preventDefault();

    // type of renovation
    for (const radio of radioType) {
        if (radio.checked) {
            planPrice = +radio.value;
        }
    }

    // number of rooms
    const coefficients = {
        1: 1,
        2: 1.05,
        3: 1.10,
        4: 1.15,
    };

    coef = coefficients[inputRooms.value] || 1.2;

    let basePrice = planPrice * inputArea.value * coef;
    let totalPrice = basePrice;

    // additional options
    if (checkboxRedevelopment.checked) {
        totalPrice = totalPrice + basePrice * +checkboxRedevelopment.value;
    }

    if (checkboxRemoval.checked) {
        totalPrice = totalPrice + basePrice * +checkboxRemoval.value;
    }

    if (checkboxDesign.checked) {
        totalPrice = totalPrice + basePrice * +checkboxDesign.value;
    }

    const formatter = new Intl.NumberFormat('ru', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0
    });
    totalPriceElement.innerText = formatter.format(totalPrice);
}

calcForm.addEventListener('submit', calculate);

//Accordion
const accordionItems = document.querySelectorAll('.accordion-container');

accordionItems.forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('active')
    })
});
