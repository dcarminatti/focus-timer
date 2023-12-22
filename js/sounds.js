export default function () {
    const buttonPressAudio = new Audio("../audios/button-press.wav");
    const kitchenTimer = new Audio("../audios/kitchen-timer.mp3");
    const bgAudio = new Audio("../audios/bg-audio.mp3");

    function pressButton() {
        buttonPressAudio.play();
    }

    function timerEnd() {
        kitchenTimer.play();
    }

    return {
        pressButton,
        timerEnd,
        bgAudio,
    };
}
