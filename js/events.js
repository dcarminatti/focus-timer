import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
} from "./elements.js";

export default function ({ timer, controls, sound }) {
    buttonPlay.addEventListener("click", () => {
        controls.play();
        timer.countdown();
        sound.pressButton();
    });

    buttonPause.addEventListener("click", () => {
        controls.pause();
        timer.hold();
        sound.pressButton();
    });

    buttonStop.addEventListener("click", () => {
        controls.stop();
        timer.reset();
        sound.pressButton();
    });

    buttonSoundOn.addEventListener("click", () => {
        buttonSoundOn.classList.add("hide");
        buttonSoundOff.classList.remove("hide");
        sound.bgAudio.play();
    });

    buttonSoundOff.addEventListener("click", () => {
        buttonSoundOff.classList.add("hide");
        buttonSoundOn.classList.remove("hide");
        sound.bgAudio.pause();
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
}
