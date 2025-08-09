const currentTime = document.getElementById("currentTime");
const alarmTimeInput = document.getElementById("alarmTime");
const setAlarmBtn = document.getElementById("setAlarmBtn");
const clearAlarmBtn = document.getElementById("clearAlarmBtn");
const alarmStatus = document.getElementById("alarmStatus");
const alarmSound = document.getElementById("alarmSound");

let alarmTime = null;
let alarmTimeout = null;

// Update clock every second
function updateClock() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    currentTime.textContent = `${hours}:${minutes}:${seconds}`;

    // Check if alarm should ring
    if (alarmTime === `${hours}:${minutes}`) {
        alarmSound.play();
        alarmSound.loop = true;
    }
}
setInterval(updateClock, 1000);

// Set Alarm
setAlarmBtn.addEventListener("click", () => {
    if (alarmTimeInput.value) {
        alarmTime = alarmTimeInput.value;
        alarmStatus.textContent = `Alarm set for ${alarmTime}`;
    } else {
        alert("Please select a valid time.");
    }
});

// Clear Alarm
clearAlarmBtn.addEventListener("click", () => {
    alarmTime = null;
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alarmStatus.textContent = "No alarm set";
});
