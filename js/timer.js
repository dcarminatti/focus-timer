import Sound from "./sounds.js";

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
}) {
    let timerTimeOut;
    let startMinutes = 25;

    function updateDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0");
        secondsDisplay.textContent = String(seconds).padStart(2, "0");
    }

    function countdown() {
        timerTimeOut = setTimeout(() => {
            let seconds = Number(secondsDisplay.textContent);
            let minutes = Number(minutesDisplay.textContent);

            if (minutes == 0 && seconds == 0) {
                resetControls();
                updateDisplay(startMinutes, 0);
                Sound().timerEnd();
                return;
            }

            if (seconds == 0) {
                seconds = 60;
                minutes = minutes - 1;
            }

            updateDisplay(minutes, seconds - 1);

            countdown();
        }, 1000);
    }

    function reset() {
        updateDisplay(startMinutes, 0);
        clearTimeout(timerTimeOut);
    }

    function updateMinutes(newMinutes) {
        startMinutes = newMinutes;
    }

    function hold() {
        clearTimeout(timerTimeOut);
    }

    return {
        updateDisplay,
        countdown,
        reset,
        updateMinutes,
        hold,
    };
}
