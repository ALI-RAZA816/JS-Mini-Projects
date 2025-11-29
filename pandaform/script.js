let userNameField = document.getElementById('username');
let userpasswordField = document.getElementById('password');
let eyesDot1 = document.getElementById('eyes-dot-1');
let eyesDot2 = document.getElementById('eyes-dot-2');
let LeftHand = document.getElementById('hand-l');
let rightHand = document.getElementById('hand-r');

let moveEyes = ()=>{
    eyesDot1.classList.add('active');
    eyesDot2.classList.add('active');
    userNameField.style.borderBottom = '1px solid #F4C531'
}
let resetEyes = ()=>{
    eyesDot1.classList.remove('active');
    eyesDot2.classList.remove('active');
    userNameField.style.borderBottom = '1px solid #3F3554'
    
    
}
let hideEyes = ()=>{
    LeftHand.classList.add('active');
    rightHand.classList.add('active');
    userpasswordField.style.borderBottom = '1px solid #F4C531'
    
}
let showEyes = ()=>{
    LeftHand.classList.remove('active');
    rightHand.classList.remove('active');
    userpasswordField.style.borderBottom = '1px solid #3F3554'

}
userNameField.addEventListener('focus',moveEyes);
userNameField.addEventListener('blur',resetEyes);
userpasswordField.addEventListener('focus',hideEyes);
userpasswordField.addEventListener('blur',showEyes);

