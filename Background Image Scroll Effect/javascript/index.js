window.addEventListener('scroll',()=>{
    let backImEl = document.getElementById('imge');

    backImEl.style.opacity = 1 - window.pageYOffset / 900;
    backImEl.style.backgroundSize =160 - window.pageYOffset / 12 + "%";
});