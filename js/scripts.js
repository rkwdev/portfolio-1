$(document).ready(function () {
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('transform-x')
    })

    $('#slides').superslides({
        animation: 'fade',
        animation_easing: 'linear',
        play: 4000
    });

    var typed = new Typed('.typed', {
        strings: ['Full-Stack Web Developer', 'Front-End Developer', 'UI/UX Expert', 'JavaScript Lover'],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $(window).scroll(function () {
        var position = $(this).scrollTop();
        if (position >= 15) {
            $('.nav-menu').addClass('custom-nav')
        } else {
            $('.nav-menu').removeClass('custom-nav')
        }
    })
})