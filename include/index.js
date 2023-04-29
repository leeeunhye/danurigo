jQuery(document).ready(function() {
    /* 메인상품이 1개 이상일때 실행   */
    jQuery(".main-swipe-roll .swiper-wrapper").each(function(){
        var swiperslidelength = jQuery('.swiper-slide',this).length; 
        if ( swiperslidelength > 1 ) {
            $.getScript('https://moma-img.cafe24img.com/img/1/8435/jquery.plugin.js', function() {
                var swiper2 = new Swiper('.main-swipe-roll', {
                    slidesPerView: 'auto',
                    autoHeight: true, //enable auto height		
                    spaceBetween: 0,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
navigation: {
nextEl: ".bestbt02",
prevEl: ".bestbt01",
},
                });
            });
        }
    });
});
