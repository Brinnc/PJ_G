/*-----------------------------------------------------------------
오디오 플레이 함수 모음
-----------------------------------------------------------------*/

//15) bgm
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
    /*
    for(let i=0; i<bgmList.length; i++){
        const source = document.querySelector('#audioSource');
        source.src = bgmList[i];
        audioContainer.load();
        playMusic();
    }
    */
}

//16) 볼 이펙트 효과음
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

//17) hp마이너스 이펙트 효과음
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

//18) hp플러스 이펙트 효과음
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

/*------------------------------------------------->html문서로 이동함
//19) 시간 특수 아이템 획득 이펙트 효과음
function playTimeEffect(){
    timeEffectContainer.volume = 1;
    timeEffectContainer.loop = false;
    timeEffectContainer.play();
}
function loadTimeEffect() {
    const source = document.querySelector('#timeEffectSource');
    timeEffectContainer.load();
    playTimeEffect();
}
----------------------------------------------------------------------*/

//20) 게임 오버 이펙트 효과음
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