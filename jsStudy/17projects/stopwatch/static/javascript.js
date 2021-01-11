window.onload = function () {

    // Change button color
    const btns = document.querySelectorAll(".btn");

    btns.forEach(btn => {
        btn.addEventListener("mouseover", () => {
            btn.classList.add("color-trans");
        })

        btn.addEventListener("mouseout", () => {
            btn.classList.remove("color-trans");
        })
    })

    // Set up stopwatch configuration
    var seconds = 0;
    var tens = 0;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var btnStart = document.getElementById("btn-start");
    var btnStop = document.getElementById("btn-stop");
    var btnReset = document.getElementById("btn-reset");
    var interval;

    // Set up button clicks
    btnStart.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    btnStop.onclick = function () {
        clearInterval(interval);
    }

    btnReset.onclick = function () {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer() {
        tens++;

        if (tens < 9) {
            appendTens.innerHTML = "0" + tens;  // if tens less than 0 then it show str "0" + tens(initially is 0), it ens up 00
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;   // if it is greater than 9 then it is now tens since the number greater than 9 takes 2 bits position 

        }
        
        if (tens > 99) {   // if it is greater than 99 then the seconds bit start counting 
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + tens;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;  // similar to tens, if the number is greater than 9 then it takes 2 bits 
        }
    }
}


