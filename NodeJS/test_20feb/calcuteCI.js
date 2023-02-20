const compoundInterest = require('./compoundInterest');

const { amount, interest } = compoundInterest.calculateInterest(1000, 5, 3);

console.log(`After 3 years, the amount is ${amount} and the interest earned is ${interest}.`);
