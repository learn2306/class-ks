$(function() {
    $('.gnb > ul > li').on('mouseover', function() {
        $('.bgGnb').slideDown();
        $('.gnb .sub').fadeIn()
    })
    $('.gnb').on('mouseleave', function() { 
        $('.bgGnb').slideUp(300);
        $('.gnb .sub').fadeOut(300)
    }) 
    
    $('.bgGnb').on('mouseleave', function() {
        $('this').slideUp(300);
        $('.gnb .sub').fadeOut(300)
    })

    $('.ham').on('click', function(){
        $('.gnb').slideToggle(500);       
    });
});
