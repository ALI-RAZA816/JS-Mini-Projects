$(document).ready(function(){
    let heading = $('#heading');
    let colorInput = $('#colorInput');

    colorInput.on('input change',function(){
        $('body').css('background-color',`${$(this).val()}`);
        if(colorInput.val() <= "#000000"){
            heading.css('color','white');
        }else{
            heading.css('color','black');
        }
    })
})