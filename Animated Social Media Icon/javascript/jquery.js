$(document).ready(function(){
    let bars = $('.fa-bars');
    let xmark = $('.fa-xmark');
    let main = $('.main');
    bars.click(function(){
        main.addClass('active');
        $(this).css('display','none');
        xmark.css('display','block');
    });
    xmark.click(function(){
        main.removeClass('active');
        $(this).css('display','none');
        bars.css('display','block');
    });
})