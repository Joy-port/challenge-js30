const addItems = document.querySelector('.add-items');
const itemLists = document.querySelector('.lists');
const clearBtn = document.querySelector('.clear-btn');
let items = JSON.parse(localStorage.getItem('plates')) || [] ;

// 無法先監聽到還沒新增到畫面的元素，所以只能透過函式綁監聽

function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const itemObj = {
        text,  // text:text
        done: false
    };

    items.push(itemObj);
    updateData();
    this.reset();
}
// if plates 此參數為空值  就自動帶入空陣列
// 渲染畫面
function populateList(plates = [],platesList ){
    console.log(plates);
    if(!plates.length){
        platesList.innerHTML = `<li>Loading Tapas...</li>`;
        return;
    };

    platesList.innerHTML = plates.map((plate, i) =>{
        return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done? 'checked' : ''}/>
        <label for ="item${i}">${plate.text}</label>
        </li>
        `
    }).join(''); //將陣列轉換成字串格式 //就直接不需要str 這個變數
    //用map 就可以新增，也不會消失
}

function updateData(){
    localStorage.setItem('plates', JSON.stringify(items));
    populateList(items, itemLists);
}

function toggleDone(e){
    if(!e.target.matches('input'))return;
    const id = e.target.dataset.index;
    items[id].done = !items[id].done; //if done = true -> then turn to false
    updateData();
    populateList(items, itemLists);
}
function showClearBtm(){
    if(items.length !== 0){
        clearBtn.style.display = 'block';
    }else{
        clearBtn.style.display = 'none';
        return ;
    };
}

function clearItems(e){
    if(!e.target.matches('button')){
        return ;
    };

    items = items.filter (item => item.done === false );
    updateData();
}


function init(){
    populateList(items, itemLists);
    showClearBtm();

}
init();

// const checkBoxes = document.querySelectorAll('input');
// checkBoxes.forEach((item, i)=> item.addEventListener('click',()=> alert('hi')))
// 這一行會在新增list 之後監聽不到，所以需要監聽的不是 li 子元素，而是 ul 父元素，這樣只要新增任何子元素，都可以監聽到。


addItems.addEventListener('submit',addItem);
itemLists.addEventListener('click', toggleDone);
clearBtn.addEventListener('click', clearItems);
// 可以透過submit 事件監聽，不論是否有按按鈕或是透過enter鍵，只要送出表單都會觸發該事件