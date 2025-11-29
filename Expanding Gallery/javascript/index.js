const items = document.querySelectorAll('.item');

items.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        items.forEach(itemremove=>{
            itemremove.classList.remove('active');
        })
        item.classList.add('active');
    })
})