const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let direction = true;


let isDrawing = false; //set a data save the status of mouse move
let lastX = 0;
let lastY = 0;

let hue = 0 //for hsl color

function draw(e){
    if(!isDrawing == true){
        return ;
    }
    console.log(e);  //滑鼠軌跡記錄
    ctx.strokeStyle =  `hsl(${hue}, 100%, 50%)`;  //start from color red

    ctx.beginPath();      //start from 
    ctx.moveTo(lastX, lastY); //go to 
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke(); //add line

    [lastX, lastY] = [e.offsetX, e.offsetY]; //讓起始點跟著滑鼠位置移動而變換

    hue ++ ; //change color add 1 by 1
    if(hue >= 360){
        hue = 0 ;
    }  // clear all and back to red

    if(ctx.lineWidth >= 80 || ctx.lineWidth <= 1 ){
        direction = ! direction; //true to false 1 -> 0
    }

    //direction = true = 1
    if(direction){
        ctx.lineWidth ++ ;
    } else {
        ctx.lineWidth -- ;
    }

}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; //讓起始點跟著滑鼠位置移動而變換
}); //點下去才知道位置

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false); 
canvas.addEventListener('mouseout', () => isDrawing = false);



const cleanBtn = document.querySelector(".clear") ;
const drawBtn = document.querySelector(".alert-draw") ;

function cleanCanvas(e){
    console.log(e)
    if(e.target.nodeName === "BUTTON"){
        // Store the current transformation matrix
        ctx.save();

        // Use the identity matrix while clearing the canvas
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Restore the transform
        ctx.restore();
    }
}


cleanBtn.addEventListener('click', cleanCanvas);

window.onload = function(e){
    canvas.style.pointerEvents = "none";
    drawBtn.addEventListener("click", function(e){
        console.log(e);
        if(e.target.classList.contains("alert-draw")){
            drawBtn.style.display="none";
            canvas.style.pointerEvents = "auto";

        }else{
            return;
        };
    }, false)
}