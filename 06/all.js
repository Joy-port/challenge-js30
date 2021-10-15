const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];


fetch(url)
    .then( bob => bob.json())
    .then( data => cities.push(...data))

    const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

function findMatchCity(wordMatch, cities){
    return cities.filter( place =>{
        //figure out if typing words matches city name
        const regex = new RegExp(wordMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex)
    } );
}

function displayMatches(){
    const matchAry = findMatchCity(this.value, cities);
    const str = matchAry.map(place => {
        const regex = new RegExp( this.value , 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);   
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        
        return `<li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
        </li>`;
    }).join('');
    suggestion.innerHTML = str ;
}

const searchInput = document.querySelector(".search");
const suggestion = document.querySelector(".suggestions");

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);