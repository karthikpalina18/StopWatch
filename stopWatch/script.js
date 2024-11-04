let timer;
let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

const display = document.getElementById('display');
const lapsList = document.getElementById('laps');

// Function to format the time
function formatTime(unit) {
    return unit < 10 ? `0${unit}` : unit;
}

// Function to update the stopwatch display
function updateDisplay() {
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Function to start the stopwatch
function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
}

// Function to pause the stopwatch
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Function to reset the stopwatch
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    lapsList.innerHTML = '';
}

// Function to record lap times
function recordLap() {
    const lapTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap: ${lapTime}`;
    lapsList.appendChild(lapItem);
}

// Event listeners for the buttons
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);
