let arrays = ["Youtuber","Freelancer","Web Developer"];


const container = document.querySelector('.container');
let arraysIndex = 0;
let character = 0;
function updateText(){
    character++;
    if(arraysIndex < arrays.length){
        container.innerHTML=`<h1>I am ${arrays[arraysIndex].slice(0,character)}</h1>`;
        if(character === arrays[arraysIndex].length){
            arraysIndex++;
            character = 0;
        }
    }else{
        arraysIndex = 0;
    }
}

setInterval(updateText,500);