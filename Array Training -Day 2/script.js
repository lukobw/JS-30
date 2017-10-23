const people = [
    {name: 'John', year: 1981},
    {name: 'Mike', year: 1982},
    {name: 'Kate', year: 198},
    {name: 'Lucy', year: 2011}
];

const comments = [
    {text: 'Like this', id: 523423},
    {text: 'Superb', id: 823423},
    {text: 'Nothing is impossible', id: 2039842},
    {text: 'I like football very much', id: 123523},
    {text: 'Let me go!', id: 542328}
];

//1
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({isAdult});

//2

const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({allAdults});

//3
const comment = comments.find(comment => comment.id === 823423);
console.log({comment});

//4
const index = comments.findIndex(comment => comment.id === 823423);
console.log({index});

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];
console.table(newComments);