const QUARTER = 0.25;
const DIME = 0.10;
const NICKEL = 0.05;
const PENNY = 0.01;

export class Counter {

  constructor(input) {
    this.userInput = parseFloat(input.toFixed(2));
    this.quarters;
    this.dimes;
    this.nickels;
    this.pennies;
  }

  calculateChange = (input) => {
    if (isNaN(input)) {
      return;
    }

    let change;

    if (input >= QUARTER) {
      this.quarters = Math.floor(input / QUARTER);
      change = parseFloat((input % QUARTER).toFixed(2));
      console.log(">>>>> Q =" + this.quarters);
    } else if (input >= DIME) {
      this.dimes = Math.floor(input / DIME);
      change = parseFloat((input % DIME).toFixed(2));
      console.log(">>>>> D =" + this.dimes);
    }
    return;
  }

}