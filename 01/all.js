//bug 按不到 kbd 跟 有文字的 span 區塊


//play with keys
window.addEventListener('keydown', playDrum);

function playDrum(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //避免使用selectorAll -> 產生迴圈問題、快速選取
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio){
        return ;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add("active");
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {  //透過transitionend 修改設定
    if (e.propertyName !== 'transform') return;
    this.classList.remove('active'); // this = keys
}

//play with mouse
keys.forEach(key => key.addEventListener('click',function(e){

    playWithMouse(e);


function playWithMouse(e){
    const key = document.querySelector(`.key[data-key="${e.target.dataset.key}"]`);
    const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
    e.preventDefault();
    if(! audio) return ;

    audio.currentTime = 0 ;
    audio.play();
    key.classList.add("active")

}
function resetKeys(){
    if(document.querySelectorAll('.active').length != 0){
        const bugTransition = document.querySelectorAll('.active');
      bugTransition.forEach(key => key.classList.remove('active'));
    };
}
    setInterval(resetKeys, 2000);   
}));