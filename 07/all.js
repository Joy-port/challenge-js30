const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const isAdult = people.some( people => ((new Date().getFullYear()) - people.year) >= 19 )
  console.log(isAdult);

  // Array.prototype.every() // is everyone 19 or older?
  const everyAdult = people.every( people => ((new Date().getFullYear()) - people.year) >= 19 )
  console.log(everyAdult);

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const findComment = comments.find( content => content.id === 823423 );
  console.log(findComment);

  // Array.prototype.findIndex()
  // Find the comment with this ID

  const findCommentIndex = comments.findIndex( content => content.id === 823423 );
  console.log(findCommentIndex);

  // delete the comment with the ID of 823423

  //comments.splice(findCommentIndex, 1); //delete in old array

  //add new Array with deleted obj

  const newComments = [
      ...comments.slice(0,findCommentIndex),  //(starting point, end before XXX )
      ...comments.slice(findCommentIndex+1)  //(starting point from (ending point +1))
  ];

  console.table(comments);
  console.table(newComments); //..without ID of 823423