//get elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipBtns = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

//build function

// 1. play & paused
function playVideo () {
    //只能偵測到 video.paused 無法偵測video.play
    const method = video.paused ? 'play' : 'pause' ;
    video[method]();
}
// control video with spacebar
function playVideoWithKey (e){
    if(e.keyCode !== 32){
        return ;
    }
    playVideo();
}

//2. update Button
function updateButton(){
    //method 1.
    // if(video.paused){
    //     toggle.textContent ='►';
    // }else{
    //     toggle.textContent ='❚ ❚';
    // };

    //method 2.
    const icon = video.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

//3. skip button 
function skipBtn(e){
    video.currentTime += parseFloat(e.target.dataset.skip);
    // console.log(e.target.dataset.skip);
}

//4. handel range for volume update
function handleRangeUpdate(){
    video[this.name]= this.value;
}

//5. progressbar auto-updated depends on video current progess
function handelProgress(){
    const percent = (video.currentTime / video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}

//6. handel control video by moving progressbar
function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth)*video.duration;
    video.currentTime = scrubTime;
}
//listeners

// 1. play & paused
video.addEventListener("click", playVideo);
toggle.addEventListener("click", playVideo);
window.addEventListener('keydown', playVideoWithKey);

//2. update Button
// 透過偵測影片當下的狀態，去改變按鈕的樣式
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

//3. skip button
skipBtns.forEach(item => item.addEventListener("click", skipBtn));

//4. handel range for volume update ?? not quite understand
ranges.forEach( item => item.addEventListener("change", handleRangeUpdate));
ranges.forEach( item => item.addEventListener("mousemove", handleRangeUpdate));

//5. progressbar auto-updated depends on video current progess
video.addEventListener("timeupdate", handelProgress);

//6. handel control video by moving progressbar
let mousedown = false;

//if mousedown === true -> then play function scrub(e)
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove",(e) => mousedown && scrub(e));

//這兩個只是用來改變 mousedown 是否為true
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup",()=> mousedown = false);