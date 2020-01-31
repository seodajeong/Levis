$(function(){
    $('.gnb > li:not(.sale)').on({
        mouseenter:function(){
            $('header').addClass('nav-open')
        },
        mouseleave:function(){
            $('header').removeClass('nav-open')
        }
    })

    //swiper 객체 생성
    var swiper = new Swiper('.main-slide .swiper-container',{
        navigation: {
            nextEl: '.main-slide .sp-button-next',
            prevEl: '.main-slide .sp-button-prev',
        }
    });

    // header - 스크롤
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        
        if(scrollTop > 0){
            $('body').addClass('scroll');
        }else{
            $('body').removeClass('scroll');
        }
    });
   

    var swiper = new Swiper('.main-best .swiper-container',{
        slidesPerView:4,
        spaceBetween:50,
        centeredSlides:true,
        loop:true
        // navigation: {
        //     nextEl: '.main-slide .sp-button-next',
        //     prevEl: '.main-slide .sp-button-prev',
        // }
    });

    var swiper = new Swiper('main-sns .sns-list',{
        slidesPerView:4,
        spaceBetween:20,
        centeredSlides:true,
        loop:true
    });
})