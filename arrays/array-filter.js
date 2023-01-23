// Filter - allows us to filter things out from the array

let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

// with filter
const canDrink = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
});

// put above into one line using ES6 arrow function
const canDrink = ages.filter((age) => age >= 21);

// Filter retail companies
// ES5 version
const retailCompanies = companies.filter(function (company) {
  if (company.category === 'Retail') {
    return true;
  }
});

// ES6 version arrow function (if one parameter, you don't need parenthesis)
const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);

// Get 80s companies
const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990
);

// Get companies that lasted 10 years or more
const lastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);

console.log(canDrink);
console.log(retailCompanies);
console.log(eightiesCompanies);
console.log(lastedTenYears);
