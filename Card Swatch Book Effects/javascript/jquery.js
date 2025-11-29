$(document).ready(function(){
    $('.box').on('mouseover',function(){
        $(this).nextAll().addClass('prev');
    });
    $('.box').on('mouseout',function(){
        $(this).nextAll().removeClass('prev');
    });
})