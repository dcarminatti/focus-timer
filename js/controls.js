export default function Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
}) {
    function play() {
        buttonPlay.classList.add("hide");
        buttonSet.classList.add("hide");
        buttonPause.classList.remove("hide");
        buttonStop.classList.remove("hide");
    }

    function pause() {
        buttonPause.classList.add("hide");
        buttonPlay.classList.remove("hide");
    }

    function stop() {
        reset();
    }

    function getMinutes() {
        let minutes = prompt("Quantos minutos?");
        if (!minutes) {
            return false;
        }

        return minutes;
    }

    function reset() {
        buttonPause.classList.add("hide");
        buttonStop.classList.add("hide");
        buttonPlay.classList.remove("hide");
        buttonSet.classList.remove("hide");
    }

    return { play, pause, stop, getMinutes, reset };
}
