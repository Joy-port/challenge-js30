const pressed = [];
const secretCode = 'wesbos';
const keyShow = document.querySelector('.keyShow');
const secretCodeShow = document.querySelector('.secretCode');

window.addEventListener("keyup", (e) => {

    secretCodeShow.textContent = secretCode;

    pressed.push(e.key);
    // console.log(pressed);


    //2. if pressed 前六個 == secretCode
    // array 只存放當前的六個值
    // if 'aksldk4' -> 7 要刪掉第一個的 a -> 第0 個 , 1
    pressed.splice( -secretCode.length - 1 , pressed.length - (secretCode.length));
    keyShow.textContent = pressed.join(' ');
    //3. pressed. join -> 組合成字串中間不留白
    
    //method 1 with .join
    if(pressed.join('').includes(secretCode)){
        keyShow.style.color = "blue";
        //  console.log('success');
         cornify_add();

    }

    //method 2 with split ?? but not working

})