$(document).ready(function(){
    let imgBox = $('.right');
    $('.left ul li:eq(0)').click(function(){
        imgBox.css({
            'background-image':'url("./images/nature.jpg")',
            'background-position':'center',
            'background-repeat':'no-repeat',
            'background-size':'cover'
        });
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.left ul li:eq(1)').click(function(){
        imgBox.css({
            'background-image':'url("./images/drink.jpg")',
            'background-position':'center',
            'background-repeat':'no-repeat',
            'background-size':'cover'
        });
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.left ul li:eq(2)').click(function(){
        imgBox.css({
            'background-image':'url("./images/traveling.jpg")',
            'background-position':'center',
            'background-repeat':'no-repeat',
            'background-size':'cover'
        });
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.left ul li:eq(3)').click(function(){
        imgBox.css({
            'background-image':'url("./images/archeticture.jpg")',
            'background-position':'center',
            'background-repeat':'no-repeat',
            'background-size':'cover'
        });
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.left ul li:eq(4)').click(function(){
        imgBox.css({
            'background-image':'url("./images/fashion.jpg")',
            'background-position':'center',
            'background-repeat':'no-repeat',
            'background-size':'cover'
        });
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.left ul li:eq(5)').click(function(){
        imgBox.css({
            'background-image':'url("./images/interiors.jpg")',
            'background-position':'center',
            'background-repeat':'no-repeat',
            'background-size':'cover'
        });
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
})