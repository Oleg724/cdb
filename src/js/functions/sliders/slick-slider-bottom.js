$(document).ready(function () {
    $('.slider-bottom').slick({
        arrows: true,
        prevArrow: $('.slider-arrows__left--white'),
        nextArrow: $('.slider-arrows__right--white'),
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'easeOutExpo'
    });
});