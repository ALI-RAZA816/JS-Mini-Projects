let lists = []
console.log(lists);
const makeList = () =>{
    let tasklist = document.getElementById('tasklist');
    tasklist.innerHTML = '';
    lists.forEach((list,index)=>{
        let li = document.createElement('li');
        li.innerHTML = `${index + 1}. ${list.inputValue} (Prority:${list.proriatyValue},Due:${list.dateValue})<button id="delete">Delete</button>`;
        tasklist.appendChild(li);
        const deletesdf = document.querySelectorAll('#delete');
        deletesdf.forEach(btn=>{
            btn.addEventListener('click',(event)=>{
                event.target.parentElement.remove();
            })
        })
    })
}
const TO_DO_LIST_APP = () =>{
    let textInput = document.getElementById('textInput');
    let proriatyInput = document.getElementById('prioriatyInput');
    let dateInput = document.getElementById('dateInput');
    let inputValue = textInput.value.trim();
    let proriatyValue = proriatyInput.value.trim();
    let dateValue = dateInput.value.trim();
   
    if(inputValue && proriatyValue && dateValue ){
        lists.push({inputValue,proriatyValue,dateValue});
        textInput.value = '';
        proriatyInput.value = 'Low';
        dateInput.value = '';
        makeList();
    }else{
        alert('Add Task First');
    }
}


let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',TO_DO_LIST_APP);