const time = document.querySelector(".time"),
start = document.querySelector("#Start"),
stop = document.querySelector("#Stop"),
reset = document.querySelector("#Reset");

start.addEventListener("click", startTheTimer);
stop.addEventListener("click", stopTheTimer);
reset.addEventListener("click", resetTheTimer);

let count = 0;
let time_gap = null;

function counter() {
    count++;
    
    let hours = Math.floor(count / 3600);
    if (hours < 10) hours = '0' + hours 
    let minutes = Math.floor((count - (hours * 3600)) / 60);
    if (minutes < 10) minutes = '0' + minutes
    let seconds = count % 60;
    if (seconds < 10) seconds = '0' + seconds

    time.innerText = `${hours}:${minutes}:${seconds}`

}

function startTheTimer() {
    if(time_gap) {
        return;
    };

    time_gap = setInterval(counter, 1000);
    document.getElementById("timer").style.animation = "none"
}

function stopTheTimer() {
    clearInterval(time_gap);
    time_gap = null;
    document.getElementById("timer").style.animation = "glow .1s ease-in-out infinite alternate"
}

function resetTheTimer() {
    stopTheTimer()
    time.innerText = "00:00:00"
    count = 0
    document.getElementById("timer").style.animation = "none"
}