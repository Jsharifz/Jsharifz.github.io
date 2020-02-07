const navSlide = () => {
    const burger = document.querySelector('.burger');
    const close = document.querySelector('.close');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-links-active');
    });

    close.addEventListener('click', function() {
        nav.classList.remove('nav-links-active');
    });
}

navSlide();