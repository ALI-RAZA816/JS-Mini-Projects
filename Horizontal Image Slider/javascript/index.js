let left = document.getElementById("left")
let right = document.getElementById("right");
let container = document.getElementById("container");
right.addEventListener('click',()=>{
    container.scrollLeft +=950;
});
left.addEventListener('click',()=>{
    container.scrollLeft -=950; 
})
container.addEventListener('wheel',(event)=>{
    container.scrollLeft += event.deltaY;
});


