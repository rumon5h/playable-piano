const pianoKeys = document.querySelectorAll('.piano-keys .key'),
volumeSlider = document.querySelector('.volume-slider input'),
keysCheckbox = document.querySelector('.keys-checkbox input');

let allKey = [],

audio = new Audio("tunes/a.wav"); // B  y default, audio src is 'a' tune

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // Passing Audion src based on key pressed
    audio.play() // Playing audio
    const clickedKey = document.querySelector(`[data-key="${key}"]`);// Getting clicked key element
    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150)
}

pianoKeys.forEach(key => {

    // Calling playTune function with passing data-key value as an argument

    key.addEventListener('click', () => playTune(key.dataset.key))
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = (e) => {
    pianoKeys.forEach(key => key.classList.toggle('hide'));
}

const pressedKey = (e) => {
    if(allKey.includes(e.key)) playTune(e.key)
}

keysCheckbox.addEventListener('click', showHideKeys);
volumeSlider.addEventListener('input', handleVolume);
document.addEventListener('keydown', pressedKey);