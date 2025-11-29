let value = document.getElementById('value')
let Increment = document.getElementById('Increment')
let Decrement = document.getElementById('Decrement');

let idx = 0;

function increment(){
    idx++;
    value.style.color = 'green';
    value.innerHTML = `${idx}<span style="font-size:15px;">increment</span>`;
}

function decrement(){
    
    if(idx == 0){
        value.style.color = '#333';
        idx = 0;
    }else{
        idx--;
        value.style.color = 'red';
        value.innerHTML = `${idx}<span style="font-size:15px;">decrement</span>`;
    }
}

Increment.addEventListener('click',increment);
Decrement.addEventListener('click',decrement);