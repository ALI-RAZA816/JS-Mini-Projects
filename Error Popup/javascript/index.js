let success = document.getElementById('success');
let error = document.getElementById('error');
let invalid = document.getElementById('invalid');
const sucessnote = document.querySelector('.sucessnote');
const errornote = document.querySelector('.errornote');
const invalidnote = document.querySelector('.invalidnote');

success.addEventListener('click',()=>{
    sucessnote.classList.add('active');
    setTimeout(()=>{
        sucessnote.classList.remove('active');
    },6000);
})
error.addEventListener('click',()=>{
    errornote.classList.add('active');
    setTimeout(()=>{
        errornote.classList.remove('active');
    },6000);
})
invalid.addEventListener('click',()=>{
    invalidnote.classList.add('active');
    setTimeout(()=>{
        invalidnote.classList.remove('active');
    },6000);
})