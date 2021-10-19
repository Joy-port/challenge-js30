const lists = document.querySelectorAll(`.container li input[type="checkbox"]`);

let lastChecked;

function handleCheck(e){

    let inBetween = false; //split between first / last box & boxes inbetween
    //check group
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
            }
        })
    }
    lastChecked = this; // last = start
}

lists.forEach(item => item.addEventListener("click", handleCheck, false));