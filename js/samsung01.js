$(function () {
    $('.mainslide').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,

    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct)
        if (sct < 1000) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct)
        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });

    $('.main_visual .dots li').on('mouseenter', function () {
        $('.mainslide').slick('slickGoTo', idx, false);
    });


    $('.mainVisual .arrows .left').on('click', function () {
        $('.mainslide').slick('slickPrev');
    });

    $('.mainVisual .arrows .right').on('click', function () {
        $('.mainslide').slick('slickNext');
    });

    $('.product_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.product .arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev');
    })
    $('.product .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    })

})