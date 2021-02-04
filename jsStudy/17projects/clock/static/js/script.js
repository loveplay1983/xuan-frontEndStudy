function js_clock() {
    var date = new Date();
    var hour = date.getHours();  // 0-23 hours
    var min = date.getMinutes(); // 0-59 mins
    var sec = date.getSeconds(); // 0-59 seconds
    var session = "AM";

    // "AM" and "PM" 12 hours rule    
    if(hour == 0) {
        // if hour eq 0 then it turns out the time is 12 o'clock right there and it is getting "PM"
        hour = 12;
    }

    if(hour > 12) {
        // if hour gt 12 then it turns out the time is now "PM", e.g. if hour eq 13 then 13 -12 = 1, it is 1:00 PM then
        hour = hour - 12;
        session = "PM";
    }

    // ternary operation, simply put, test whether hour ls 10, if true, now hour = "0"+"hour", just hour otherwise
    // it is simply just add "0" to hour, min or sec if they are only one bit, or display the original bit if they are gt 10
    hour = (hour < 10) ? "0" + hour : hour;   
    min  = (min < 10) ? "0" + min : min;
    sec  = (sec < 10) ? "0" + sec : sec;

    // the final display of the clock
    var time = hour + ":" + min + ":" + sec + "-" + session;

    // document.getElementById("clock-display").innerText = time;
    document.getElementById("clock-display").textContent = time;
    
    setInterval(js_clock, 1000);   // execute js_clock after 1 second
    // setTimeout(js_clock, 1000);   // execute js_clock after 1 second

    
}

js_clock();
