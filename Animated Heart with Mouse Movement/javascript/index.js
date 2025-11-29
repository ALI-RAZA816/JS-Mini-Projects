let bodyEl = document.querySelector('body');

// main function
const Animated_Heart = () =>{
    let span = document.createElement('span');
    let xpos = event.offsetX;
    let ypos = event.offsetY;
    span.style.left = xpos + "px";
    span.style.top = ypos + "px";
    let size = Math.random() * 100;
    span.style.height = size + "px";
    span.style.width = size + "px";
    bodyEl.appendChild(span);
    setTimeout(()=>{
        span.remove();
    },3000);

}
// calling function on mouse event
bodyEl.addEventListener('mousemove',Animated_Heart);