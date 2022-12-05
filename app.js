const pianoKeys = document.querySelectorAll('.piano-keys .key');

let audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play()
}

pianoKeys.forEach(key => {

    // Calling playTune function with passing data-key value as an argument

    key.addEventListener('click', () => playTune(key.dataset.key))
})