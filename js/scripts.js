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
        autoplay: 500,
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
    })



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
        // $(this).addClass('filter-active').siblings("li").removeClass('filter-active');
        $(".controller li").removeClass("filter-active");
        $(this).addClass("filter-active");
    })

    $('.filter-container').filterizr({
        layout: 'sameWidth'
    });

});
