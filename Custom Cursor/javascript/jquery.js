$(document).ready(function(){
    var btn = $('.btn'); 
    var cursor = $('.cursor');
    $(window).on('mousemove',function(e){
        let x = e.pageX;
        let y = e.pageY;
        cursor.css({
            'visibility': 'visible',
            'transform':`translate(${x + 'px'},${y + 'px'})`
        });
    });

    $(btn).hover(function(){
        $(cursor).toggleClass('active');
        $(cursor).toggleClass('outer-cursor');
    })
});