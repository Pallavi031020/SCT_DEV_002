let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

function updateDisplay(time) {
  const date = new Date(time);
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
  document.getElementById('display').textContent = `${minutes}:${seconds}.${milliseconds}`;
}

function start() {
  if (isRunning) return;
  isRunning = true;
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay(elapsedTime);
  }, 10);
}

function pause() {
  isRunning = false;
  clearInterval(timerInterval);
}

function reset() {
  isRunning = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay(0);
  document.getElementById('laps').innerHTML = '';
}

function recordLap() {
  if (!isRunning) return;
  const lapTime = document.getElementById('display').textContent;
  const lapDiv = document.createElement('div');
  lapDiv.className = 'lap-item';
  lapDiv.textContent = `Lap ${document.getElementById('laps').childElementCount + 1}: ${lapTime}`;
  document.getElementById('laps').prepend(lapDiv);
}
