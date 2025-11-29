// variable intialization
let inputField = document.getElementById('input-field');
let result = document.getElementById('result');
let btn = document.getElementById('btn');

// create a function
function calculateAge(){
    // current date
    let newDate = new Date();
    // get date from current date
    let Birthday = new Date(inputField.value);
    // calculate birthday date from current date
    let newDateMonth = newDate.getMonth();
    let newDateYear = newDate.getFullYear();
    let BirthdayMonth = Birthday.getMonth();
    let BirthdayYear = Birthday.getFullYear();
    let years = newDateYear - BirthdayYear;
    let months = newDateMonth - BirthdayMonth;

    if(months < 0 || (months === 0 && newDate.getDate() < Birthday.getDate())){
        BirthdayYear -- ;
    }

    if(years > 1){
        result.innerHTML = `Your are ${years} years old.`;
    }else{
        result.innerHTML = `Your are ${years} year old.`;
    }
}

// add event listner on button.
btn.addEventListener('click',calculateAge);




