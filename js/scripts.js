// Page Loading Animation
$(window).on('load', function () {
    $('.loader__img').fadeOut(500, function () {
        $('.loader').fadeOut(750);
    });
});
// End of Page Loading Animation

$(document).ready(function () {
    // Navigation
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('transform-x')
    })

    $('.navbar-brand').click(smoothBodyScroll);
    $('.navbar-nav li a').click(smoothBodyScroll);

    function smoothBodyScroll(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 60
        }, 'slow');
    }

    $(window).scroll(function () {
        var position = $(this).scrollTop();
        if (position >= 29) {
            $('.nav-menu').addClass('custom-nav')
        } else {
            $('.nav-menu').removeClass('custom-nav')
        }

        $('.navbar-nav li a').each(function () {

            var sectionOffset = $(this.hash).offset().top - 110;

            if (sectionOffset <= position) {
                $(this).parent().siblings().children().removeClass('nav-active');
                $(this).addClass('nav-active');
            }
        })
    });
    // End of Navigation

    // Home Slider
    $('#slides').superslides({
        animation: 'fade',
        animation_easing: 'linear',
        play: 4000
    });
    // End of Home Slider

    // Home Typed Effect
    var typedText = $('.typed').attr('data-text');
    var typedSeparated = typedText.split(',');
    var typed = new Typed('.typed', {
        strings: typedSeparated,
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
    // End of Home Typed Effect
})

$(document).ready(function () {
    // Skills Slider
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
    // End of Skills Slider

    // Skills Pie Chart
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
    // End of Skills Pie Chart

    // Works
    $(".controller li").click(function () {
        $(".controller li").removeClass("filter-active");
        $(this).addClass("filter-active");
    })

    $('.filter-container').filterizr({
        layout: 'sameWidth'
    });
    // End of Works

});

// Testimonial
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

$('.testimonials-section__owl-next').click(function () {
    testimonialOwl.trigger('next.owl.carousel');
});

$('.testimonials-section__owl-prev').click(function () {
    testimonialOwl.trigger('prev.owl.carousel', [300]);
});
// End of Testimonial


/* =====================================
    Animations
======================================== */
$(document).ready(function () {
    $(window).scroll(function () {
        var bodyOffset = $(this).scrollTop();

        // About Animation
        if (bodyOffset >= 150) {
            $('#about .section-title').addClass('animate-heading');
        } else {
            $('#about .section-title').removeClass('animate-heading');
        }

        if (bodyOffset >= 135) {
            $('.about__detail').addClass('move-from-right');
            $('.about__img').addClass('move-from-left img-border-anim');
        } else {
            $('.about__detail').removeClass('move-from-right');
            $('.about__img').removeClass('move-from-left img-border-anim');
        }
        // End of About Animation

        // Skills Animation
        if (bodyOffset >= 930) {
            $('#skills .section-title').addClass('animate-heading');
        } else {
            $('#skills .section-title').removeClass('animate-heading');
        }
        // End of Skills Animation

        // Works Animation
        if (bodyOffset >= 1550) {
            $('#works .section-title').addClass('animate-heading');
        } else {
            $('#works .section-title').removeClass('animate-heading');
        }
        // End of Works Animation

        // Price Animation
        if (bodyOffset >= 2680) {
            $('#pricing .section-title').addClass('animate-heading');
            $('.card-1').addClass('move-from-left');
            $('.card-2').addClass('move-from-bottom');
            $('.card-3').addClass('move-from-right');
        } else {
            $('#pricing .section-title').removeClass('animate-heading');
            $('.card-1').removeClass('move-from-left');
            $('.card-2').removeClass('move-from-bottom');
            $('.card-3').removeClass('move-from-right');
        }
        // End of Price Animation

        // Testimonials Animation
        if (bodyOffset >= 3565) {
            $('#testimonials .section-title').addClass('animate-heading');
        } else {
            $('#testimonials .section-title').removeClass('animate-heading');
        }
        // End of Testimonials Animation

        // Contact Animation
        if (bodyOffset >= 4220) {
            $('#contact .section-title').addClass('animate-heading');
            $('#contact-card-1').addClass('move-from-left');
            $('#contact-card-2').addClass('scale-down');
            $('#contact-card-3').addClass('move-from-right');
            $('#contact-form').addClass('move-from-bottom');
        } else {
            $('#contact .section-title').removeClass('animate-heading');
            $('#contact-card-1').removeClass('move-from-left');
            $('#contact-card-2').removeClass('scale-down');
            $('#contact-card-3').removeClass('move-from-right');
            $('#contact-form').removeClass('move-from-bottom');
        }
        // End of Contact Animation

    });

});
/* =====================================
    End of Animations
======================================== */


/* =====================================
    Contact Me
======================================== */
(function ($) {
    'use strict';
    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;
    // Success function
    function done_func(response) {
        message.fadeIn();
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }
    // fail function
    function fail_func(data) {
        message.fadeIn();
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    // Form Submit
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
            .done(done_func)
            .fail(fail_func);
    });

})(jQuery);
/* =====================================
    End of Contact Me
======================================== */