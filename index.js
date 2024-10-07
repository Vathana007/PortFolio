const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');

// Display Mobile Menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Home page
var typed = new Typed(".textH", {
    strings: ["Frontend Developer", "Web Developer", "Mobile Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener('DOMContentLoaded', function () {
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);  // Optional: remove this line if you want the animation to play every time the element comes into view
            }
        });
    }, options);

    const elements = document.querySelectorAll('.animate');
    elements.forEach(el => observer.observe(el));
});

document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('modalBox').classList.add('show');
});

document.querySelector('.modalClose').addEventListener('click', function() {
    document.getElementById('modalBox').classList.remove('show');
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('modalBox')) {
        document.getElementById('modalBox').classList.remove('show');
    }
});



