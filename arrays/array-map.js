import { companies } from './for-loop';

// map - instead of just filtering, we can create new arrays

// Create array of company names
const companyNames = companies.map(function (company) {
  return company.name;
});

const testMap = companies.map(function (company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});

// ES6 method
const testMap = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);

const agesSquare = ages.map((age) => Math.sqrt(age));

const agesSquareTimesTwo = ages
  .map((age) => Math.sqrt(age))
  .map((ages) => ages * 2);

console.log(companyNames);
console.log(testMap);
console.log(agesSquare);
console.log(agesSquareTimesTwo);
