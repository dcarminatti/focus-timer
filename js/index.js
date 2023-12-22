import Timer from "./timer.js";
import Controls from "./controls.js";

const buttonPlay = document.querySelector(".play"),
    buttonPause = document.querySelector(".pause"),
    buttonStop = document.querySelector(".stop"),
    buttonSet = document.querySelector(".set"),
    buttonSoundOn = document.querySelector(".sound-on"),
    buttonSoundOff = document.querySelector(".sound-off"),
    minutesDisplay = document.querySelector(".minutes"),
    secondsDisplay = document.querySelector(".seconds");

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
});

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
});

buttonPlay.addEventListener("click", () => {
    controls.play();
    timer.countdown();
});

buttonPause.addEventListener("click", () => {
    controls.pause();
    timer.hold();
});

buttonStop.addEventListener("click", () => {
    controls.stop();
    timer.reset();
});

buttonSoundOn.addEventListener("click", () => {
    buttonSoundOn.classList.add("hide");
    buttonSoundOff.classList.remove("hide");
});

buttonSoundOff.addEventListener("click", () => {
    buttonSoundOff.classList.add("hide");
    buttonSoundOn.classList.remove("hide");
});

buttonSet.addEventListener("click", () => {
    let startMinutes = controls.getMinutes();

    if (!startMinutes) {
        timer.reset();
        return;
    }

    timer.updateDisplay(startMinutes, 0);
    timer.updateMinutes(startMinutes);
});
