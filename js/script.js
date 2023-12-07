const countContainer = document.querySelectorAll(".count-digit");

const startAction = document.getElementById("start-timer");
const stopAction = document.getElementById("stop-timer");
const resetAction = document.getElementById("reset-timer");

const timeoutAudio = document.getElementById("alarm_audio");

const defaultValue = 30;

var countDownTime = defaultValue;

var timerID;

var isStopped = true;

const findTimeString = () => {
    var minutes = String(Math.trunc(countDownTime / 60));
    var seconds = String(countDownTime % 60);
    if (minutes.length === 1) {
        minutes = "0" + minutes;
    }
    if (seconds.length === 1) {
        seconds = "0" + seconds;
    }
    return minutes + seconds;
};

const startTimer = () => {
    if (isStopped) {
        isStopped = false;
        timerID = setInterval(runCountDown, 1000);
    }
};


const stopTimer = () => {
    isStopped = true;
    if (timerID) {
        clearInterval(timerID);
    }
};


const resetTimer = () => {
    stopTimer();
    countDownTime = defaultValue;
    renderTime();
};

timeoutAudio.src = './sounds/sound.mp3'
timeoutAudio.load();

startAction.onclick = startTimer;
resetAction.onclick = resetTimer;
stopAction.onclick = stopTimer;

const renderTime = () => {
    const time = findTimeString();
    countContainer.forEach((count, index) => {
        count.innerHTML = time.charAt(index);
    });
};


const runCountDown = () => {
    countDownTime -= 1;
    renderTime();

    if (countDownTime === 0) {
    stopTimer();

    timeoutAudio.play();
    countDownTime = defaultValue;
    }
};
