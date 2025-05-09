function updateClock(){
    const now=new Date('2024-12-24T06:20:30');

    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();

    hours=hours<10?'0'+hours:hours;
    minutes=minutes<10?'0'+minutes : minutes;
    seconds=seconds<10?'0'+seconds : seconds;

    const timeString=hours+':'+minutes+':'+seconds//`${hours}:${minutes}:${seconds}`;   //hours+':'+minutes+':'+seconds
    document.getElementById('clock').textContent=timeString;

    changeBackground(now.getHours())


}

function changeBackground(hour){
    bgcolor='#0f172a'

    if(hour >=6 && hour<12){
        bgcolor='aqua'
    }
    else if(hour>=12 && hour<18){
        bgcolor='red'
    }
    else if(hour>=18 && hour<21){
        bgcolor='beige'
    }
    else{
        bgcolor='brown'
    }
    document.body.style.backgroundColor=bgcolor
}

updateClock();

setInterval(updateClock,1000);
