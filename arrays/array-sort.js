import { companies, ages } from './for-loop';

// sort companies by start year
// sort - return 1 or -1 depending on condition
const sortedCompanies = companies.sort(function (c1, c2) {
  if (c1.start < c2.start) {
    return 1;
  } else {
    return -1;
  }
});

const sortedCompaniesShort = companies.sort((a, b) =>
  a.start > b.start ? 1 : -1
);

// Sort Ages

const sortAgesAscending = ages.sort((a, b) => a - b);
const sortAgesDescending = ages.sort((a, b) => b - a);

console.log(sortedCompanies);
console.log(sortedCompaniesShort);
console.log(sortAgesAscending);
console.log(sortAgesDescending);
