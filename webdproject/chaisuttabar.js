const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 0;


prevBtn.addEventListener('click', () => {
    scrollAmount -= 320; 
    carousel.style.transform = `translateX(${scrollAmount}px)`;
});


nextBtn.addEventListener('click', () => {
    scrollAmount += 320;
    carousel.style.transform = `translateX(${scrollAmount}px)`;
});
