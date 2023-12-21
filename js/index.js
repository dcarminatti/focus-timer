const buttonPlay = document.querySelector(".play"),
    buttonPause = document.querySelector(".pause"),
    buttonStop = document.querySelector(".stop"),
    buttonSet = document.querySelector(".set"),
    buttonSoundOn = document.querySelector(".sound-on"),
    buttonSoundOff = document.querySelector(".sound-off"),
    minutesDisplay = document.querySelector(".minutes"),
    secondsDisplay = document.querySelector(".seconds");

let minutes;

function resetControls() {
    buttonPause.classList.add("hide");
    buttonStop.classList.add("hide");
    buttonPlay.classList.remove("hide");
    buttonSet.classList.remove("hide");
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function countdown() {
    setTimeout(() => {
        let seconds = Number(secondsDisplay.textContent);
        let minutes = Number(minutesDisplay.textContent);

        if (minutes == 0 && seconds == 0) {
            resetControls();
            return;
        }

        if (seconds == 0) {
            seconds = 60;
            minutes = minutes - 1;
        }

        updateTimerDisplay(minutes, seconds - 1);

        countdown();
    }, 1000);
}

buttonPlay.addEventListener("click", () => {
    buttonPlay.classList.add("hide");
    buttonSet.classList.add("hide");
    buttonPause.classList.remove("hide");
    buttonStop.classList.remove("hide");

    countdown();
});

buttonPause.addEventListener("click", () => {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
});

buttonStop.addEventListener("click", () => resetControls());

buttonSoundOn.addEventListener("click", () => {
    buttonSoundOn.classList.add("hide");
    buttonSoundOff.classList.remove("hide");
});

buttonSoundOff.addEventListener("click", () => {
    buttonSoundOff.classList.add("hide");
    buttonSoundOn.classList.remove("hide");
});

buttonSet.addEventListener("click", () => {
    minutes = prompt("Quantos minutos?");
    updateTimerDisplay(minutes, 0);
});
