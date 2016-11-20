$(function(){
   
    mobileNav();
    blurImages();
});


function mobileNav(){
     
    $('.menu').on('click',function(){
        
        $('#main_nav').toggleClass('active');
        
    });
}

//function blurImages(){
//     
//    $('.post').hover(function(){
//        
//        $(this).siblings().css('filter', 'blur(5px)');
//    },function(){
//        $(this).siblings().css('filter', 'blur(0px)');
//     });
//}