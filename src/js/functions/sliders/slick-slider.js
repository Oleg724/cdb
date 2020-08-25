$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        prevArrow: $('.slider-arrows__left'),
        nextArrow: $('.slider-arrows__right'),
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'easeOutExpo',
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    arrows: true,
                    prevArrow: $('.slider-arrows__left'),
                    nextArrow: $('.slider-arrows__right'),
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    speed: 1000,
                    easing: 'easeOutExpo',
                }
            },
            {
                breakpoint: 760,
                settings: {
                    arrows: true,
                    prevArrow: $('.slider-arrows__left'),
                    nextArrow: $('.slider-arrows__right'),
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 1000,
                    easing: 'easeOutExpo',
                }
            }
        ]
    });
});