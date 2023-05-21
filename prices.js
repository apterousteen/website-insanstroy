'use strict'

const table_sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        let link = document.querySelector(`nav li a[href="#${id}"]`);
        let link_container = link.parentElement;
        if (entry.isIntersecting) {
            link_container.classList.add('active');
        } else {
            link_container.classList.remove('active');
        }
    });
}, {threshold: 0.5});

table_sections.forEach((section) => {
    observer.observe(section);
});
