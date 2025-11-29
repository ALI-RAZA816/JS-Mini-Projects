document.addEventListener('DOMContentLoaded',()=>{
    let hour = document.getElementById('hour');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');

    function displayTime(){
        let currentTime = new Date();

        let timehour = currentTime.getHours();
        let timemin = currentTime.getMinutes();
        let timesec = currentTime.getSeconds();

        let hRotation = 30*timehour + timemin/2;
        let minRotation = 6*timemin;
        let secRotation = 6*timesec;

        hour.style.transform = `rotate(${hRotation}deg)`;
        min.style.transform = `rotate(${minRotation}deg)`;
        sec.style.transform = `rotate(${secRotation}deg)`;
    }

    setInterval(displayTime,1000);
})