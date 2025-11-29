$(document).ready(function(){
    $('.wrapper img').on('mouseover',function(){
        $(this).prev().addClass('prev');
    });
    $('.wrapper img').on('mouseout',function(){
        $(this).prev().removeClass('prev');
    })
})