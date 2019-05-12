$(function(){
   $(window).scroll(function(){
       var scroll = $(this).scrollTop();
       if(scroll > 200 ){
           $('.scroll-nav').slideDown();
       } else{
          $('.scroll-nav').slideUp(); 
       }
   });
    $('.header li a').click(function(){
        $('html , body').animate({
        scrollTop : $('#' + $(this).data('value')).offset().top},1500);
    });
});