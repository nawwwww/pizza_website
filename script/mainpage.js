window.addEventListener('load', function (event) {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        speed: 1000,
        autoplay: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    this.document.getElementsByClassName('btnMenu');
    for (let i = 0; i < this.document.getElementsByClassName('btnMenu').length; i++) {
        this.document.getElementsByClassName('btnMenu')[i].addEventListener('click', function (event) {
            document.location = 'menu.html';
        })
    }

})