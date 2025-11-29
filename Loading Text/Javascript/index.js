let flipbtn = document.getElementById('flipbtn');
let rotatebtn = document.getElementById('rotatebtn');
let jumpbtn = document.getElementById('jumpbtn');
let cont = document.querySelectorAll('#cont>div');

flipbtn.addEventListener('click',()=>{
   cont.forEach(e=>{
      e.style.animationName = 'flip';
   });
});

rotatebtn.addEventListener('click',()=>{
   cont.forEach(e=>{
      e.style.animationName = 'rotate';
   });
});
jumpbtn.addEventListener('click',()=>{
   cont.forEach(e=>{
      e.style.animationName = 'jump';
   })
})