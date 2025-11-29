let btn = document.getElementById('btn');
let result = document.getElementById('result');
result.innerHTML = '';

const saveTask =()=>{
    localStorage.setItem("data",result.innerHTML);
}

function mainfunc(){
    let taskbox = document.getElementById('task');
    let inputvalue =taskbox.value 
    const addtask = ()=>{
        error.innerHTML = '';
        let li = document.createElement('li');
        li.innerHTML = inputvalue;
        let i = document.createElement('i');
        i.className = 'fa-solid fa-xmark';
        li.appendChild(i);
        result.appendChild(li);
        li.addEventListener('click',(event)=>{
            event.preventDefault();
            event.target.classList.toggle('checked');
            event.target.classList.toggle('cross');
            saveTask();
        })
        i.addEventListener('click',(evt)=>{
            evt.preventDefault();
            evt.target.parentElement.remove();
            saveTask();    
        });
    }
    saveTask();
    taskbox.value = '';
    if(!inputvalue){
        let error = document.getElementById('error');
        error.innerHTML = `<span style="color:red;">Please enter text first.</span>`
    }else{
        addtask();
    }
}

const showTask = ()=>{
    result.innerHTML = localStorage.getItem('data');
}

showTask();
btn.addEventListener('click',mainfunc);