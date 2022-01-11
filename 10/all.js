const lists = document.querySelectorAll(`.container li input[type="checkbox"]`);
const total = document.querySelector(`.total`);

let totalNum = 0;
let lastChecked;

function handleCheck(e){
    
    let inBetween = false; //split between first / last box & boxes inbetween
    //check group
    if(this.checked){
        totalNum ++;
    }else{
        totalNum --;
    };

    if(e.shiftKey && this.checked){
        
        lists.forEach(checkBox => {
            // console.log(checkBox);
            if(checkBox === this || checkBox === lastChecked){
                //console.log(inBetween);
                return inBetween  = !inBetween; //if star/end => turn to true
                //console.log("this is Start/end"); //check if the range is correct or not
            };

            if(inBetween){
                checkBox.checked = true;
                totalNum ++ ;
            }
        })
    }
    //uncheck group
    if(e.shiftKey && !this.checked){
        lists.forEach(checkBox => {
            // console.log(checkBox);
            if(checkBox === this || checkBox === lastChecked){
                //console.log(inBetween);
                return inBetween  = !inBetween; //if star/end => turn to true
                //console.log("this is Start/end"); //check if the range is correct or not
            };

            if(inBetween){
                checkBox.checked = false;
                totalNum --;
            }
        })
    }
    lastChecked = this; // last = start

    console.log(totalNum);
    total.textContent = totalNum;

}

lists.forEach(item => item.addEventListener("click", handleCheck, false));
