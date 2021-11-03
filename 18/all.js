const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
//這個是個類陣列，需要透過展開或是array from 新增方法
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const[mins, secs] = timeCode.split(':').map(parseFloat);//用冒號區分 宣告分鐘、秒數//都還是字串 -> parseFloat 轉數字
        return (mins * 60)+ secs; 
        // console.log(mins, secs);
    })
    .reduce((total, vidSeconds)=> total + vidSeconds) ;// 輸入兩個參數或是陣列-> 最後輸出一個數值

    let secondsLeft = seconds ;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;
    const minutes = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;



let ary =[hours, minutes,secondsLeft];
let reg = ary.join(':');
let total = document.querySelector('.total');
total.textContent = reg;