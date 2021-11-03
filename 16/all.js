const container = document.querySelector('.container');
const text = document.querySelector('h1');
const walk = 100 ; // 100px 是陰影移動最大的範圍

function shadow(e){
    const {offsetWidth: width, offsetHeight: height} = container ;
    let {offsetX: x, offsetY: y}= e;

    // 如果滑到 h1 容器內，數字會重新計算變成h1 容器內的標準值
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    };

    //算出陰影滑動最大的距離，與相對應的數值
    // 原本是在 0 <-> 100 之間做移動， 改為 -50 <-> 100 之間做數值上的移動 //為了css 的設定
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / width * walk) - (walk / 2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(150, 150, 0 , 0.6), 
    ${xWalk * -1}px ${yWalk}px 0 rgba(0, 150, 150 , 0.6),
    ${yWalk}px ${xWalk* -1}px 0 rgba(75, 0, 150 , 0.6),
    ${yWalk}px ${xWalk}px 0 rgba(0, 0, 250 , 0.6) `;
}

container.addEventListener('mousemove', shadow);