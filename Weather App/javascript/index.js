async function Weather(){
    let inputField = document.getElementById("inputfield");
    let Value = inputField.value;
    let temperature = document.getElementById("temp");
    let city = document.getElementById("city");
    let humidity = document.getElementById("humid");
    let Windspeed = document.getElementById("speed");
    let picture = document.getElementById("picture");
    let apiKey = '9646cf69311282f3f524046eea52f18c';
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${Value}&appid=${apiKey}`;
    let response = await fetch(api);
    let data = await response.json();
    if(!Value){
        alert('Enter city name');
        return false;
    }
    if(response.status == 404){
        document.querySelector('#error').style.display = 'block';
        document.querySelector('.temperature').style.display = 'none';
        document.querySelector('.wind').style.display = 'none';
    }else{
        document.querySelector('#error').style.display = 'none';
        city.innerHTML = data.name;
        temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}<sup>o</sup>C`;
        humidity.innerHTML = `${data.main.humidity}% <br> <span>Humidity</span>`;
        Windspeed.innerHTML = `${data.wind.speed}km/h <br> <span>WindSpeed</span>`;
        if(data.weather[0].main == 'Clouds'){
            picture.src = 'images/clouds.png';
        }else if(data.weather[0].main == 'Drizzle'){
            picture.src = 'images/drizzle.png';
        }else if(data.weather[0].main == 'Mist'){
            picture.src = 'images/mist.png';
        }else if(data.weather[0].main == 'Rain'){
            picture.src = 'images/rain.png'
        }else if(data.weather[0].main == 'Clear'){
            picture.src = 'images/sun.png';
        }else if(data.weather[0].main == 'Haze'){
            picture.src = 'images/haze.png';
        }
        document.querySelector('.temperature').style.display = 'flex';
        document.querySelector('.wind').style.display = 'flex';
    }
}


const search = document.querySelector('.fa-magnifying-glass');

search.addEventListener('click', Weather);