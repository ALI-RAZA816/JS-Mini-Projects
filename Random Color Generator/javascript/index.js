    const container = document.querySelector('.container');
    for(var i=0; i<100; i++){
        let div = document.createElement('div');
        div.classList.add('color');
        container.appendChild(div);
    }


    const ColorContainer = document.querySelectorAll('.color');
    const generatorColor = ()=>{
        ColorContainer.forEach(containersss=>{
            const actualColor = randomcolor();
            containersss.style.backgroundColor = '#'+ actualColor;
            console.log(actualColor);
            containersss.innerHTML = '#' + actualColor;
        })
    }

    generatorColor();
   
    function randomcolor(){
        const codelength = 6;
        const code = '0123456789abcdef';
        let colorcode =''; 
        for(var i=0; i<codelength; i++){
            let color =Math.floor(Math.random()*code.length);
            colorcode += code.substring(color,color+1);
        }
        return colorcode;
    }