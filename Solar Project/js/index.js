document.addEventListener('DOMContentLoaded',()=>{

    let container = document.querySelector('.container');

    document.addEventListener('mousemove',(e)=>{
        // let PX = Math.round(e.pageX /10);
        let PY = Math.round(e.pageY /10);
        // container.style.transform =`rotateX(${PX}deg)`;
        container.style.transform =`rotateX(${PY}deg)`;
    });

});