function playMusic() {
    audioContainer.volume = 1;
    audioContainer.loop = true;
    audioContainer.play();
}
function stopMusic() {
    audioContainer.pause();
}
function loadAudio() {
    const source = document.querySelector('#audioSource');
    audioContainer.load();
    playMusic();
}

function playBallEffect() {
    ballEffectContainer.volume = 1;
    ballEffectContainer.loop = false;
    ballEffectContainer.play();
}
function loadEffect() {
    const source = document.querySelector('#ballEffectSource');
    ballEffectContainer.load();
    playBallEffect();
}

function playHurtEffect() {
    hurtEffectContainer.volume = 1;
    hurtEffectContainer.loop = false;
    hurtEffectContainer.play();
}
function loadHurtEffect() {
    const source = document.querySelector('#hurtEffectSource');
    hurtEffectContainer.load();
    playHurtEffect();
}

function playRamenEffect(){
    ramenEffectContainer.volume = 1;
    ramenEffectContainer.loop = false;
    ramenEffectContainer.play();
}
function loadRamenEffect() {
    const source = document.querySelector('#ramenEffectSource');
    ramenEffectContainer.load();
    playRamenEffect();
}

function playGameOverEffect(){
    gameOverEffectContainer.volume = 1;
    gameOverEffectContainer.loop = false;
    gameOverEffectContainer.play();
}
function loadGameOverEffect() {
    const source = document.querySelector('#gameOverEffectSource');
    gameOverEffectContainer.load();
    playGameOverEffect();
}