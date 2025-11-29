let btns = document.querySelectorAll('#btn');
let img = document.querySelector('.left img');

btns[0].addEventListener('click',()=>{
    btns[0].classList.add('active');
    btns[1].classList.remove('active');
    btns[2].classList.remove('active');
    img.src = 'images/image1.png';
});

btns[0].click();

btns[1].addEventListener('click',()=>{
    btns[0].classList.remove('active');
    btns[1].classList.add('active');
    btns[2].classList.remove('active');
    img.src = 'images/image2.png';
});

btns[2].addEventListener('click',()=>{
    btns[0].classList.remove('active');
    btns[1].classList.remove('active');
    btns[2].classList.add('active');
    img.src = 'images/image3.png';
});