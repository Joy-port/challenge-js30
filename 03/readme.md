# update CSS with JS

### bug
- 用 `mousemove` 監聽可以監聽到 `input range` 的各項數值，但是卻無法立即改變 `input color` 的顏色，會變成選擇顏色後，還需要用滑鼠滑過色塊才會改變樣式
 * 而且看別人的都沒有這個問題ＱＱ ex [s](https://stiaannel.co.za/my-projects/challenges/css-variables)

### learn
- 產生出來的`array` 並不是使用`array` 原型->而是`NodeList` -> `NodeList` 是一種函式方法，`NodeList` 的方法沒有`array`多，如果需要用到的方法不在`NodeList` 原型內，會需要去修改，不過這次使用forEach方法也包含在內，所以不用使用`getter` 或是`setter` 做原型的設定

- `handleUpdate` 函式內的`this` 代表 dom 節點 `inputs`
- 新學到 `input type`  `range` 的樣式 跟 `scrollbar` 的樣式是一樣的設定方式，可以看 [這篇](https://www.oxxostudio.tw/articles/201503/html5-input-range-style.html) 教學文章
    * 但是要注意這個功能會有瀏覽器支援度的問題，firefox 無法正常顯示，會需要加上[這篇文章](https://qastack.cn/programming/6165472/custom-css-scrollbar-for-firefox)的說明，才有辦法改變樣式效果