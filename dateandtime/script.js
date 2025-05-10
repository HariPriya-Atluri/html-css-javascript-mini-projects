function dateTime(){
    const now=new Date();

    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const months=['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct',
        'Nov','Dec'
    ]

    let day=days[now.getDay()]
    let month=months[now.getMonth()]
    let date=now.getDate()
    
    let year=now.getFullYear()
    let hours=now.getHours()
    let minutes=now.getMinutes()
    let seconds=now.getSeconds()


    //string formatting using padStart
    let h=String(hours).padStart(2,'0')
    let m=String(minutes).padStart(2,'0')
    let s=String(seconds).padStart(2,'0')
    // let h=hours<10?'0'+hours:hours
    // let m=minutes<10?'0'+minutes:minutes
    // let s=seconds<10?'0'+seconds:seconds

    document.getElementById('display').textContent=h+':'+m+':'+s

    document.getElementById('present').textContent=day+' '+date+' '+month+'  '+year
}
dateTime()

setInterval(dateTime,1000)
// setInterval expects a function reference, not a function call.