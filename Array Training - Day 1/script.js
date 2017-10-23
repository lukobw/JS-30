/* jshint esversion: 6*/
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

// 1. Filter the list of inventors for those who were born in the 1500's [inventors]

const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1600));
console.table(fifteen);

// 2. Give us an array of the inventors' first and last names [inventors]

const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullName);

// 3. Sort the inventors by birthdate, oldest to youngest [inventors]

const birthDateOrdered = inventors.sort((a, b) => a.year > b.year ? 1: -1);
console.table(birthDateOrdered);

// 4. How many years did all the inventors live? [inventors]

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived [inventors]

const yearsLived = inventors.sort(function(a, b){
    const firstGuy = a.passed - a.year;
    const lastGuy = b.passed - b.year;
    return lastGuy > firstGuy ? -1 : 1;
});
console.table(yearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// CONSOLE NEEDS TO BE OPEN ON: https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//     .map(link => link.textContent)
//     .filter(streetName => streetName.includes('de'));

// 7. Sort the people alphabetically by last name [people]

const lastNameSort = people.sort((firstName, lastName) => {
    const [aLast, aFirst] = firstName.split(', ');
    const [bLast, bFirst] = lastName.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log(lastNameSort);

// 8. Sum up the instances of each of transportation in [data]

const transportationSum = data.reduce(function(object, item) {
    if(!object[item]) {
        object[item] = 0;
    }
    object[item]++;
    return object;
}, {});
console.log(transportationSum);