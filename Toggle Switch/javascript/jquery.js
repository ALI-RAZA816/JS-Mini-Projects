$(document).ready(function(){
    let text = $('.text');
    let isSwitched = false
    let toggle_switch = $('.toggle-switch');
    toggle_switch.click(function(){
        toggle_switch.toggleClass('active');
        text.text(isSwitched ? "No":"Yes");
        isSwitched = !isSwitched;
    })
})