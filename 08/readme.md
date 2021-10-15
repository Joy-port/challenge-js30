# html canvas

## learn 

### basics 

- html canvas!!! cool，edit window width by window size
    - innerWidth / innerHeight => the size of your browser
    - `getContent` don't draw on html but on the canvas.getContext element
        - elements in `getContext` -> strokeStyle \ lineJoin \ lineCap
- drawing needs start point and end point -> start X / Y end X / Y
    - addEventListener different between -> 'mousemove' 'mouseup' 'mousedown' 'mouseout'


``` javascript 
// let mousemove don't draw or not click
canvas.addEventListener('mouseup', () => isDrawing = false); 
canvas.addEventListener('mouseout', () => isDrawing = false);

```


``` javascript 只畫出頭跟尾一條直線，中間軌跡會隨著尾端做軌跡變換，但是起始點位置不變
    if(!isDrawing == true){
        return ;
    }
    console.log(e);  //滑鼠軌跡記錄
    ctx.beginPath();      //start from 
    ctx.moveTo(lastX, lastY); //go to 
    ctx.lineTo(e.offsetX, e.offsetY);

    ctx.stroke(); //add line

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', () => isDrawing = true); //點下去才知道位置

```

-> add `[lastX, lastY] = [e.offsetX, e.offsetY];` //讓起始點跟著滑鼠位置移動而變換
-> 但是因為監聽的初始位置 `lastX` `lastY` 一直是 0，所以要從監聽 `mousedown` 位置，改變初始點

``` javascript 
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; //讓起始點跟著滑鼠位置移動而變換
}); //點下去才知道位置

```

### change color


- [hsl](https://mothereffinghsl.com/)

``` javascript 
let hue = 0 //for hsl color

//start from 
function draw() {
    ...
    ctx.strokeStyle =  `hsl(${hue}, 100%, 50%)`;  //start from color red
    
    ...

    hue++ ; //change color add 1 by 1

    hue ++ ; //change color add 1 by 1
    if(hue >= 360){
        hue = 0 ;
    }  // clear all and back to red
}


```

#### blend the color together
- [global composite operation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)

### clean up canvas
- [clear](https://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing)

### start to draw
