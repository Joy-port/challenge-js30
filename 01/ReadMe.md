### bug
- 點擊 a 標籤的padding 區域才會有反應，但是文字的部分卻會被 `kbd` `span` 標籤擋住，導致中間區域無法感應，目前還沒有解決辦法
- 原本想要使用gulpfile 文件上傳檔案，但是卻找不到可以編譯audio 檔案的gulp套件，（測試過 ffpmeg / fluent-ffpmeg / gulp-fluent-ffpmeg )，但是不太會修改原有的 js 檔案，導致無法上傳與使用

### learn
- 第一次嘗試綁定 window 的 `keydown` 監聽
- 了解 `keyup`, `keydown`, `keypress`的差距
- 學會在 `XXX` 中帶入 `${}` -> 利用此方式，選舉數個dom 節點，可以避免因使用 `querySelectorAll` 而需要 `forEach`陣列方法才能綁監聽事件的窘境。
- 學會用 監聽事件中的 `transition` ， 綁定css 中的動畫效果，做出更多變化。
- audio 語法 `currentTime` , `.play()` 
- 透過其他人的 code 了解如何新增 click 監聽事件達到相同的效果。
