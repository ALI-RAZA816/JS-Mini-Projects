document.addEventListener("DOMContentLoaded",()=>{
    let bars = document.getElementById('bars');
    let sideMenu = document.getElementById('side-menu');
    bars.addEventListener('click',()=>{
        if(bars.classList.contains('fa-bars')){
            bars.className = 'fa-solid fa-xmark';
            sideMenu.classList.add('active');
        }else{
            bars.className = 'fa-solid fa-bars';
            sideMenu.classList.remove('active');
        }
    })
    let SearchIcon = document.getElementById("magnifying-glass");
    const inputField = document.querySelector('.input');
    SearchIcon.addEventListener('click',()=>{
        if(SearchIcon.classList.contains('fa-magnifying-glass')){
            SearchIcon.className = 'fa-solid fa-xmark';
            inputField.classList.add('active');
        }else{
            SearchIcon.className = 'fa-solid fa-magnifying-glass';
            inputField.classList.remove('active');
        }
    });

    let ShowMenu = document.getElementById('show-menu');
    let ShowList = document.getElementById('show-list');
    const angle = document.querySelector('#angle-down');
    ShowMenu.addEventListener('click',()=>{
        ShowList.classList.toggle('active');
        angle.classList.toggle('active')
    });

    let ShowMenuSecond = document.getElementById('show-second-menu');
    let ShowsecondList = document.getElementById('show-second-list');
    const angle1 = document.querySelector('#angle1');
    ShowMenuSecond.addEventListener('click',()=>{
        ShowsecondList.classList.toggle('show');
        angle1.classList.toggle('show');
    });
})