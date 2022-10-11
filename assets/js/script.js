/* Function countdown to set time for each question and show an alert when timepouts*/
var timeLeft = 30;
var time = document.getElementById('timer');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        time.innerHTML = timeLeft + ' seconds';
        timeLeft--;
    }
}
function doSomething() {
    alert("Reached out of time!");
}

