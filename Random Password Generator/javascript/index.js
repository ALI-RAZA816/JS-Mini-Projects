
const generatePassword = ()=>{
    length = 12;
    let password = '';
    let uppercase = 'ABCDEFGHIJKLMOPQRSTUVWXYZ';
    let lowercase = 'abcdefghijklmopqrstuvwxyz';
    let number = '0123456789';
    let symbols = '~!#$%^&(*()_+}{|?/.><,';
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];
    let password_box = document.getElementById('password');
    const chr = lowercase + uppercase + number + symbols;
    while(length > password.length){
        password += chr[Math.floor(Math.random()*chr.length)];
    }
    password_box.value = password;
}

let button = document.getElementById('btn');
button.addEventListener('click', generatePassword);


const copyPasword = ()=>{
    let password_box = document.getElementById('password');
    password_box.select();
    document.execCommand('copy');
}

const copy = document.querySelector('.fa-copy');
copy.addEventListener('click',copyPasword);
