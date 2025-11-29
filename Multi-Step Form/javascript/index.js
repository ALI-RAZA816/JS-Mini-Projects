let forms = document.querySelectorAll('form');


let getform2 = document.getElementById('getform2');
let getform3 = document.getElementById('getform3');
let preform1 = document.getElementById('preform1');
let preform0 = document.getElementById('preform0');

getform2.addEventListener('click',(event)=>{
    event.preventDefault();
    forms[0].style.left = '-100%';
    forms[1].style.left = '0';
})


getform3.addEventListener('click',(event)=>{
    event.preventDefault();
    
    forms[0].style.left = '-100%';
    forms[1].style.left = '-100%';
    forms[2].style.left = '0';
});


preform1.addEventListener('click',(event)=>{
    event.preventDefault();
    forms[2].style.left = '100%';
    forms[1].style.left = '0';
    
});

preform0.addEventListener('click',(event)=>{
    event.preventDefault();
    forms[1].style.left = '100%';
    forms[0].style.left = '0';

})
