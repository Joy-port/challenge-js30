// 這段是用來讓滑動效果變比較慢，產生延遲與duration
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e){
    
    sliderImages.forEach(item => {
        //知道滑到整個頁面的哪裡 ＋ 圖片的一半
        const slideInAt = (window.scrollY + window.innerHeight)  - item.height/2;
        //知道滑到圖片的最下方在哪裡 item.offsetTop = 距離最上方有多遠 + 圖片大小
        const imageBottom = item.offsetTop + item.height;
        const isHalfShown = slideInAt > item.offsetTop;
        // console.log(slideInAt, item.offsetTop);
        const isNotScrolledPast = window.scrollY < imageBottom;
        
        if(isHalfShown && isNotScrolledPast){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        };
    })
}

window.addEventListener('scroll', debounce(checkSlide));