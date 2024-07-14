let startTime, updatedTime, difference, tInterval;
let running = false;
let lapCounter = 0;
let savedTime = 0;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const display = document.getElementById('display');
const laps = document.getElementById('laps');

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);

function startStop() {
    if (!running) {
        startTime = new Date().getTime() - savedTime;
        tInterval = setInterval(getShowTime, 1);
        startStopBtn.innerHTML = 'Pause';
        startStopBtn.style.backgroundColor = '#ffc107';
        running = true;
    } else {
        clearInterval(tInterval);
        savedTime = difference;
        startStopBtn.innerHTML = 'Start';
        startStopBtn.style.backgroundColor = '#28a745';
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    savedTime = 0;
    lapCounter = 0;
    display.innerHTML = '00:00:00';
    startStopBtn.innerHTML = 'Start';
    startStopBtn.style.backgroundColor = '#28a745';
    laps.innerHTML = '';
}

function lap() {
    if (running) {
        const lapTime = document.createElement('div');
        lapTime.innerHTML = `Lap ${++lapCounter}: ${display.innerHTML}`;
        laps.appendChild(lapTime);
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    display.innerHTML = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}
