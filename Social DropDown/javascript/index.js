const medias = document.querySelectorAll('#media');
let MediaName = document.getElementById('media-text');
const field = document.querySelector('.field');
const lists = document.querySelector('.lists');

field.addEventListener('click',()=>{
    if(lists.classList.contains('active') || field.classList.contains('rotate')){
        lists.classList.remove('active');
        field.classList.remove('rotate');
    }else{
        lists.classList.add('active');
        field.classList.add('rotate');
    }
})

medias.forEach(media=>{
    media.addEventListener('click',(event)=>{
        MediaName.textContent = event.target.textContent;
        lists.classList.toggle('active');
        field.classList.toggle('rotate');
    })
})