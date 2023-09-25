
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(sec => {
        const secTop = sec.offsetTop;
        const secHeight = sec.clientHeight;
        if (pageYOffset >= secTop - secHeight / 3) {
            current = sec.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    if (current) {
        document.querySelector(`header nav a[href="#${current}"]`).classList.add('active');
    }



    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);
    
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
    
});


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



const typed = new Typed('.multiple-text', {
    strings: ['Front-End Developer', 'Python Developer', 'Graphic Designer', 'Data Analysis'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});








