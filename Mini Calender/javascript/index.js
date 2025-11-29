const date = document.querySelector('.date');
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');

const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const month1 = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const current_date = new Date();
const system_date = current_date.getDate();
const system_day = current_date.getDay();
const system_month = current_date.getMonth();
const system_year = current_date.getFullYear();


date.innerHTML= system_date;
day.innerHTML = week[system_day];
month.innerHTML = month1[system_month];
year.innerHTML = system_year;
