const panel = document.querySelectorAll(".panel");

function toggleOpen(e){
    this.classList.toggle("open");

}
function showText(e){
   if(e.propertyName.includes("flex")){
       this.classList.toggle("open-active");
   };
}


panel.forEach((item)=> item.addEventListener('click', toggleOpen) );
panel.forEach ((item) => item.addEventListener('transitionend', showText));