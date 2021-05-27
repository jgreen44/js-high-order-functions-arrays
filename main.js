const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// regular for loop
// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }

// forEach (synchronous) - can take in three different arguments
// companies.forEach(function (company, index, companies ) {
//     console.log(company);
// })

//##############################
//######## FILTER ##############
//##############################
// Filter - allows us to filter things out from the array
// let canDrink = [];
// // regular for loop
// for(let i = 0; i < ages.length; i++){
//     if (ages[i] >= 21){
//         canDrink.push(ages[i])
//     }
// }
// console.log(canDrink)

// with filter
// const canDrink = ages.filter(function (age) {
//     if(age >= 21){
//         return true;
//     }
// })

// put above into one line using ES6 arrow function
const canDrink = ages.filter(age => age >= 21);

// Filter retail companies
// ES5 version
// const retailCompanies = companies.filter(function (company) {
//     if(company.category === 'Retail'){
//         return true;
//     }
// })

// ES6 version arrow function (if one parameter, you don't need parenthesis)
const retailCompanies = companies.filter(company => company.category === 'Retail');

// Get 80s companies
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// Get companies that lasted 10 years or more
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));



// console.log(canDrink)
// console.log(retailCompanies)
// console.log(eightiesCompanies)
// console.log(lastedTenYears)



//##############################
//########   MAP  ##############
//##############################

// map - instead of just filtering, we can create new arrays
// Create array of company names
const companyNames = companies.map(function (company) {
    return company.name;
});

// const testMap = companies.map(function (company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

// ES6 method
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

const agesSquare = ages.map(age => Math.sqrt(age))

const agesSquareTimesTwo = ages
    .map(age => Math.sqrt(age))
    .map(ages => ages * 2)

// console.log(companyNames)
// console.log(testMap)
// console.log(agesSquare)
// console.log(agesSquareTimesTwo)


//##############################
//########  SORT  ##############
//##############################

// sort companies by start year
// sort - return 1 or -1 depending on condition
const sortedCompanies = companies.sort(function (c1, c2) {
    if (c1.start < c2.start) {
        return 1;
    }else{
        return -1;
    }
});

const sortedCompaniesShort = companies.sort((a, b) => (a.start > b.start ? 1 : -1))

// Sort Ages

const sortAgesAscending = ages.sort((a, b) => a - b);
const sortAgesDescending = ages.sort((a, b) => b - a);

// console.log(sortedCompanies);
// console.log(sortedCompaniesShort);
// console.log(sortAgesAscending);
// console.log(sortAgesDescending);



//##############################
//#######  REDUCE  #############
//##############################
// reduce - add all ages together

// using for loop
let ageSum = 0;
for (let i = 0; i < ages.length ; i++){
    ageSum += ages[i];
}

const ageSumReduce = ages.reduce(function (total, age) {
    return total + age;
}, 0)

const ageSumReduceShort = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);
// console.log(ageSumReduce);
// console.log(ageSumReduceShort);

// Get total years for all companies
const totalYears = companies.reduce(function (total, company) {
    return total + (company.end - company.start);
}, 0);

const totalYearsShort = companies.reduce((total, company) => total + (company.end - company.start), 0)

// console.log(totalYears);
// console.log(totalYearsShort);

// Combine methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0)

console.log(combined);