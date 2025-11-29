let passwordInput = document.getElementById('passwordInput');
let strengthMsg = document.getElementById('strengthmsg');
let msg = document.getElementById('msg');
console.log(passwordInput.value);
passwordInput.addEventListener('keydown',()=>{
    if(passwordInput.value.length > 0){
        strengthMsg.style.display = 'block';
    }else{
        strengthMsg.style.display = 'none';
    }
    
    if(passwordInput.value.length > 0 && passwordInput.value.length < 10){
        msg.innerHTML = 'Password weak';
        msg.style.color = '#ff0000';
    }else if(passwordInput.value.length >= 10 && passwordInput.value.length < 15 ){
        msg.innerHTML = 'Password medium';
        msg.style.color = '#fbff18';
    }else{
        msg.innerHTML = 'Password strong';
        msg.style.color = '#3acf3a';
    }
});