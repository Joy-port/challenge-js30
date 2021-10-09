const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hrHand = document.querySelector(".hr-hand");
const dateWord = document.querySelector(".date p");
const dateNum = document.querySelector(".date span");


function setTime(){
    // get time data

    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();

    let secNow = (sec / 60) * 360 + 90;
    secHand.style.transform = `rotate(${secNow}deg)`;

    let minNow = (min / 60) * 360 + 90;
    minHand.style.transform = `rotate(${minNow}deg)`;

    let hrNow = (hr / 12) * 360 + 90;
    hrHand.style.transform = `rotate(${hrNow}deg)`;
}

setInterval(setTime, 1000); //1sec

function setDate(){
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const day = now.getDay();


    const monthNow = (month + 1 < 10 ? "" : 0 ) + month + 1;
    const dateNow = (date + 1 < 10 ? "" : 0 ) + date;
    
    let dayNow = "";
    
    if(day === 1){
        dayNow = "Mon";
    }else if(day === 2){
        dayNow = "Tue";
    }else if(day === 3){
        dayNow = "Wed";
    }else if(day === 4){
        dayNow = "Thr";
    }else if(day === 5){
        dayNow = "Fri";
    }else if(day === 6){
        dayNow = "Sat";
    }else if(day === 7){
        dayNow = "Sun";
    };

    let str = `${dateNow}-${monthNow}-${year}`;
    dateNum.innerHTML += str;
    dateWord.textContent =`${dayNow}`;
}
setDate();