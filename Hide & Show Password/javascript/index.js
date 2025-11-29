const password = document.querySelector('#password-input');
const eye_icon = document.querySelector('.fa-eye');

eye_icon.addEventListener('click',()=>{
    if(password.type == "password"){
        password.type = "text";
        eye_icon.className = 'fa-solid fa-eye-slash';

    }else{
        password.type = "password";
        eye_icon.className = 'fa-solid fa-eye';
    }
})
