let images = document.querySelectorAll('.img img');
let box = document.querySelector('.box-img');
let boximg = document.querySelector('.box-img img');
let overlay = document.querySelector('.overlay');
let cclose = document.querySelector('.box-img i');

images.forEach((e)=>{
    e.addEventListener('click',()=>{
        let currentImage = e.src;
        box.classList.add('displayImg');
        overlay.classList.add('displayOverlay')
        boximg.src = currentImage; 
    });
});

cclose.addEventListener('click',()=>{
    box.classList.remove('displayImg');
    overlay.classList.remove('displayOverlay')
    
});

overlay.addEventListener('click',()=>{
    box.classList.remove('displayImg');
    overlay.classList.remove('displayOverlay')
})