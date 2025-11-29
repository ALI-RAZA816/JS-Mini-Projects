document.addEventListener('DOMContentLoaded',()=>{
    const showBtn = document.querySelector('.fa-bars');
    const navbar = document.querySelector('.navbar');

    showBtn.addEventListener('click',()=>{
        if(showBtn.classList.contains('fa-bars')){
            showBtn.className = 'fa-solid fa-xmark';
            navbar.classList.add('active');
        }else{
            showBtn.className = 'fa-solid fa-bars';
            navbar.classList.remove('active');
        }
    });
})