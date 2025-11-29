document.addEventListener('DOMContentLoaded',()=>{
    let SignUp = document.getElementById('sign-up');
    let SignIn = document.getElementById('sign-in');
    let Name = document.getElementById('name');
    let form_h = document.getElementById('form-h');
    let span = document.getElementById('span');

    SignIn.addEventListener('click',(e)=>{
        e.preventDefault();
        Name.style.height = '0';
        Name.style.opacity = '0';
        Name.style.visibility = 'hidden';
        form_h.classList.add('active');
        form_h.innerHTML = "Sign In";
        span.innerHTML = `<span>Lost password <a href="">Click here!</a></span>`;
        SignIn.style.background = '#452efc';
        SignIn.style.color = '#fff';
        SignUp.style.color = '#808080';
        SignUp.style.background = '#dfdede';
    });
    
    SignUp.addEventListener('click',(e)=>{
        e.preventDefault();
        Name.style.height = '45px';
        Name.style.opacity = '1';
        Name.style.visibility = 'visible';
        form_h.classList.remove('active');
        form_h.innerHTML = "Sign Up";
        SignUp.style.background = '#452efc';
        SignUp.style.color = '#fff';
        SignIn.style.color = '#808080';
        SignIn.style.background = '#dfdede';
        span.innerHTML = `<span>Password suggestion <a href="">Click here!</a></span>`
    });
});