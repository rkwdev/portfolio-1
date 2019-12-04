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
        if (position >= 29) {
            $('.nav-menu').addClass('custom-nav')
        } else {
            $('.nav-menu').removeClass('custom-nav')
        }
    });
})

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });


    $(window).scroll(function () {
        var position = $(this).scrollTop();
        if (position >= 860) {
            $('.skills-section__chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: 'rgba(0,0,0,.3)',
                scaleColor: '#fff',
                scaleLength: 5,
                lineWidth: 6,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent))
                }
            });
        }
    });

    $(".controller li").click(function () {
        $(".controller li").removeClass("filter-active");
        $(this).addClass("filter-active");
    })

    $('.filter-container').filterizr({
        layout: 'sameWidth'
    });

});


$('.testimonials-section__carousel').owlCarousel({
    loop: true,
    // nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    responsive: {
        992: {
            items: 1
        }
    }
});

var testimonialOwl = $('.testimonials-section__carousel');
testimonialOwl.owlCarousel();
// Go to the next item
$('.testimonials-section__owl-next').click(function () {
    testimonialOwl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.testimonials-section__owl-prev').click(function () {
    testimonialOwl.trigger('prev.owl.carousel', [300]);
})