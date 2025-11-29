$(document).ready(function(){
    $('#btn').on('click',function(){
        let randomcolor = '';
        let character = '0123456789abcdef';

        for(i = 0; i<6; i++){
            randomcolor =randomcolor + character[Math.floor(Math.random()*16)];
        }

        $('#input-field').val('#'+ randomcolor);
        $('#input-field').css('color','#'+ randomcolor);
        $('.input').css('border-color','#'+ randomcolor);
        $('.wrapper-container').find('i').css("background-color",'#' + randomcolor);
        $('.wrapper-container .box:first-child').css("background-color",'#' + randomcolor);

        $('.input').find('i').on('click',function(){
            $('#input-field').select();
            document.execCommand('copy');
        })
    })
})
    