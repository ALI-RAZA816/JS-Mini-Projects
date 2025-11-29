document.addEventListener('DOMContentLoaded',()=>{
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let btn = document.getElementById('btn');

    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(!name.value || name.value.length <= 3){
            name.style.border = '1.5px solid red';
            name.nextElementSibling.style.display = 'inline-block';
            name.nextElementSibling.nextElementSibling.style.display = 'block';
            return;
        }

        if(!email.value || email.value.length <= 3){
            email.nextElementSibling.style.display = 'inline-block';
            email.nextElementSibling.nextElementSibling.style.display = 'block';
            email.style.border = '1.5px solid red';
            return;
        }

        if(!password.value || password.value.length <= 10){
            password.nextElementSibling.style.display = 'inline-block';
            password.nextElementSibling.nextElementSibling.style.display = 'block';
            password.style.border = '1.5px solid red';
            return;
        }
        
        
    });

    name.addEventListener('focus',()=>{
        name.style.border = '1.5px solid #6a11cb';
        name.nextElementSibling.style.display = 'none';
        name.nextElementSibling.nextElementSibling.style.display = 'none';
    });
    name.addEventListener('blur',()=>{
        name.style.border = '';
    });
    email.addEventListener('focus',()=>{
        email.style.border = '1.5px solid #6a11cb';
        email.nextElementSibling.style.display = 'none';
        email.nextElementSibling.nextElementSibling.style.display = 'none';
    });
    email.addEventListener('blur',()=>{
        email.style.border = '';
    });
    password.addEventListener('focus',()=>{
        password.style.border = '1.5px solid #6a11cb';
        password.nextElementSibling.style.display = 'none';
        password.nextElementSibling.nextElementSibling.style.display = 'none';
    });
    password.addEventListener('blur',()=>{
        password.style.border = '';
    });
})