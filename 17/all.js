const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

//用正規表達式 忽略the a an 為開頭做排序
function strip(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a,b)=> strip(a) > strip(b)? 1: -1 );

// console.log(sortedBands);

document.querySelector('.lists').innerHTML = 
    sortedBands
        .map(item => `<li>${item}</li>`)
        .join(''); // 將逗點直接刪除，用空字串代替