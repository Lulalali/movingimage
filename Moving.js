let selectedMeme = 'memeImage1';  // default meme
//select image function
function selectImage(memeId, soundSrc) {
    if (selectedMeme) {
        document.getElementById(selectedMeme).style.display = 'none';
    }
    selectedMeme = memeId;
    document.getElementById(memeId).style.display = 'block';
    playSound(soundSrc);
}

//fuction to move image
function moveMeme() {
    const memeImage = document.getElementById(selectedMeme);
    const maxX = window.innerWidth - memeImage.clientWidth;
    const maxY = window.innerHeight - memeImage.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    memeImage.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

    //  function for start button and move the meme image
    function startMoving() {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    startButton.disabled = true;
    stopButton.disabled = false;

    // Move the meme image every second
    window.memeInterval = setInterval(moveMeme, 1000);
    }

    // function for stop button and stop moving the meme image
    function stopMoving() {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    startButton.disabled = false;
    stopButton.disabled = true;

    // Stop moving the meme image
    clearInterval(window.memeInterval);
    }
    let currentAudio = null; //clear audio
    //fuction play audio
    function playSound(src) {
        if (currentAudio) { // Stop any currently playing audio
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = new Audio(src);
        currentAudio.play();//play new audio
    }
    //funcion stop audio
    function stopSound() {// Stop any currently playing audio
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }