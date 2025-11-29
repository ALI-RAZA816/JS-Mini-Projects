let list = document.querySelectorAll('#lists');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');

list.forEach(e=>{
    e.addEventListener('dragstart',(e)=>{
        let selected = e.target;
        box2.addEventListener('dragover',(e)=>{
            e.preventDefault();
        });
        box2.addEventListener('drop',(e)=>{
            box2.appendChild(selected);
            selected = null;
        });
        box1.addEventListener('dragover',(e)=>{
            e.preventDefault();
        });
        box1.addEventListener('drop',(e)=>{
            box1.appendChild(selected);
            selected = null;
        });
    });
})