window.addEventListener('keydown',(e)=>{
    console.log(e);
    let keyCode = e.keyCode;
    console.log(keyCode);
    let div = document.querySelector(`div[data-key="${e.keyCode}"]`);
    let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // if (!audio) {
    //     return;
    // }
    sound.play();
    sound.currentTime = 0;
    div.classList.add('playing');
    // e.target.classList.remove('playing');
})

window.addEventListener('keyup',(e)=>{
    let keyCode = e.keyCode;
    console.log(keyCode);
    let div = document.querySelector(`div[data-key="${e.keyCode}"]`);
    let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    div.classList.remove('playing');
})