'use strict';

{
    $(function(){
        $('.header__btn').on('click', function(){
            $('.nav').toggleClass('active');
        });

        $('.nav__btn, .link__item a').on('click', function(){
            $('.nav').removeClass('active');
        });
    });

    // slideshow
    $(document).ready(function(){
    $('.current__preview').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.current__slide'
    });
    
    $('.current__slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.current__preview',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
});

    // fade in
    $(window).on('load scroll',function() {
        const fadeIn = $('.fadeIn');

        fadeIn.each(function() {
            const boxOffset = $(this).offset().top;
            const scrollPos = $(window).scrollTop();
            const wh = $(window).height();

            if(scrollPos > boxOffset - wh + 100){
                // 条件に当てはまったら
                $(this).addClass('animated');
                }
            });
        });

}