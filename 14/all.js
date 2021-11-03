
// start with strings, numbers and booleans

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

// You might think we can just do something like this:
const team = players; 
//傳參考

//淺層拷貝
const team2 = [].concat(players);


const team3 = [ ...players];

const team4 = Array.from(players);

console.log(team2 === players, team3 ===players, team4  === players);

const person = {
  name: 'Wes Bos',
  age: 80,
  hobby:['books','movies']
};

const  captain1 = person ;
console.log(captain1 === person);

const captain2 = Object.assign({}, person, {number: 99});

console.log(captain2 === person, captain2)

const captain3 = {...person};
console.log(captain3 === person, captain3)

captain2.hobby.push('eat');

console.log(person.hobby === captain2.hobby, captain3.hobby);
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

//深層拷貝

const newCopy = JSON.parse(JSON.stringify(players));
const newCopy2 = JSON.parse(JSON.stringify(person));
newCopy2.hobby.pop('eat');
console.log(newCopy2.hobby === person.hobby, newCopy2.hobby);