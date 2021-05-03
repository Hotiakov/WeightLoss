document.addEventListener("DOMContentLoaded", (e) => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.feedback__next',
            prevEl: '.feedback__prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            551: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
            }
        },
    });

    let burger = document.querySelector('.header__burger');
    let menu = document.querySelector('.header__menu');
    burger.addEventListener('click', (e) => {
        burger.classList.toggle('active');
        document.body.classList.toggle('lock');
        menu.classList.toggle('active');
    });
});


