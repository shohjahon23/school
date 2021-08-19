$(document).ready(function(){
    // // // header navbar 
    var $header = $('header')
    var $nav = $('.navbar')
    var flag = false
    function fixed () {
        if(scrollY >= $header.innerHeight() && !flag){
            $nav.addClass('fixed-top').animate({
                opacity: 1
            }, 1000)
            flag = true
        }
        else if(scrollY < $header.innerHeight() && flag) {
            $nav.animate({
                opacity: 0
            }, 500, function() {
                $nav.removeClass('fixed-top').css('opacity', 1)
            })  
            flag = false
        }
    }
    $(window).on('scroll', fixed)
    fixed()

    // // // header carousel
    $(".owl1").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
    });
    $('.owl-prev').html("")
    $('.owl-next').html("")
    
    // // // teacher cards starting
    // // // owl carousel- 2
    $(".owl2").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 40000,
        responsive: {
            500: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // // // cards content toggle
    $('.card').click(function() {
        if($(".content").css("top")=="330px"){
            $(".content").css("top","0")
        }else{
            $(".content").css("top","330px")
        } 
    })
});