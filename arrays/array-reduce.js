import { companies, ages } from './for-loop';
// reduce - add all ages together

// using for loop
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}

const ageSumReduce = ages.reduce(function (total, age) {
  return total + age;
}, 0);

const ageSumReduceShort = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);
console.log(ageSumReduce);
console.log(ageSumReduceShort);

// Get total years for all companies
const totalYears = companies.reduce(function (total, company) {
  return total + (company.end - company.start);
}, 0);

const totalYearsShort = companies.reduce(
  (total, company) => total + (company.end - company.start)
);
const totalYearsShortInitialValue = companies.reduce(
  (total, company) => total + (company.end - company.start),
  {}
);

console.log(totalYears);
console.log(totalYearsShort);
console.log(totalYearsShortInitialValue);

function isThisEqual(object1, object2) {
  return object1.name === object2.name;
}

console.log(Object.is(totalYearsShort, totalYearsShortInitialValue));
console.log(isThisEqual(totalYearsShort, totalYearsShortInitialValue));

// Combine methods

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
