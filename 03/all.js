const inputs = document.querySelectorAll(".input-group input");

function handleUpdate(){
     //this = 監聽的節點 inputs
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  
}

inputs.forEach((item) => item.addEventListener('click', handleUpdate));
inputs.forEach((item) => item.addEventListener('mousemove', handleUpdate));

//但是color 的部分很奇怪
