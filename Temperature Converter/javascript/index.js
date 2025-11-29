let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');

function funcelsius(){
    fahrenheit.value = (celsius.value * 1.8 + 32).toFixed(2);
    kelvin.value = (celsius.value + 272.32);

}

function funfahrenheit (){
    celsius.value =((fahrenheit.value - 32)/ 1.8).toFixed(2);
    kelvin.value =((fahrenheit.value - 32)/ 1.8 + 273.32).toFixed(2);
    
}
function funkelvin(){
    celsius.value =(kelvin.value - 273.32).toFixed(2)
    fahrenheit.value =((kelvin.value - 273.32) * 1.8  + 32).toFixed(2);
}

kelvin.addEventListener('change',funkelvin);
fahrenheit.addEventListener('change',funfahrenheit);
celsius.addEventListener('change',funcelsius);