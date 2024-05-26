const slides = document.querySelector('.slider').children;
const navLinks = document.querySelector('.slider-nav').children;
let index = 0;

function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        navLinks[i].classList.remove('active');
    }
    slides[index].style.display = 'block';
    navLinks[index].classList.add('active');
    index = (index + 1) % slides.length;
}

setInterval(changeSlide, 3000);

changeSlide(); // Initial call