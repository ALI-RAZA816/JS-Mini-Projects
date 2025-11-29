document.addEventListener('DOMContentLoaded',()=>{
    
    function countdown(){
        let currentDate = new Date("September 28 2025 4:00");
        let deadlineDate = new Date("May 24 2023 4:00");

        let seconds = document.getElementById('seconds');
        let minutes = document.getElementById('minutes');
        let days = document.getElementById('days');
        let hours = document.getElementById('hours');

        const formateDate = (time)=>{
            return time<10? `0${time}`:`${time}`;
        }


        let differenceDate = currentDate - deadlineDate;


        let diffseconds = Math.floor(differenceDate/1000) % 60;
        let diffminutes = Math.floor(differenceDate/1000/60) % 60;
        let diffhours = Math.floor(differenceDate/1000/60/60) % 24;
        let diffdays = Math.floor(differenceDate/1000/60/60/24);

        seconds.textContent = formateDate(diffseconds);
        minutes.textContent = formateDate(diffminutes);
        days.textContent = formateDate(diffdays);
        hours.textContent = formateDate(diffhours);

     
    }

    setInterval(countdown,1000);
})