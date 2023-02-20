function calculateInterest(principal, rate, time) {
    const amount = principal * Math.pow(1 + rate / 100, time);
    const interest = amount - principal;
    return {
      amount,
      interest
    };
}
  
module.exports = {
    calculateInterest
};
  